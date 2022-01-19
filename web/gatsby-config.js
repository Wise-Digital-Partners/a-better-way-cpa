// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://e-3-mortgage.netlify.app/",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl,
    author: `WISE Digital Partners`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          // formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [768, 960, 1024, 1920],
          // backgroundColor: `transparent`,
          // tracedSVGOptions: {},
          // blurredOptions: {},
          // jpgOptions: {},
          // pngOptions: {},
          // webpOptions: {},
          // avifOptions: {},
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `uploads`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/downloads`,
    //     name: `downloads`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // develop: true,
        tailwind: true,
        purgeOnly: [
          "node_modules/@fortawesome/fontawesome-pro/css/all.min.css",
        ],
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dark Horse CPAs`,
        short_name: `Dark Horse CPAs`,
        start_url: `/`,
        background_color: `#91BD14`,
        theme_color: `#91BD14`,
        display: `standalone`,
        icon: `static/images/favicon.png`,
      },
    },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `466692116686156`,
    //     access_token: `EAAOlUYciOnEBAOnHexZBcSXT0A4rt2T86ZBrUBuM3r4SHZB0Y1ElYhrqInz0ku8T2UITy7ryTgrOZC6IhtVkJTkaDcvZC4CmwQsY6puslptANGgrPe1YmFWZB9JhC21YwM82fRh2zqJt4DY5SIqZCBaGJ9BxP2s7ZAGdBPvZCR40KTs1MwE7CcaIZCvSCMyN8yN0AZD`,
    //     instagram_id: `17841402300827155`,
    //   },
    // },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M5DS9R8",
        includeInDevelopment: true,
        // defaultDataLayer: { platform: "gatsby" },
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
  ],
};
