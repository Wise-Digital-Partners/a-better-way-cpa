import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import DarkHorseDifference from "../components/Repeating/DarkHorseDifference";
import FAQs from "../components/Repeating/FAQs";
import About from "../components/Repeating/About";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import Subscribe from "../components/Repeating/Subscribe";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonGhost from "../components/Button/ButtonGhost";
import ModalVideo from "../components/Modal/ModalVideo";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Sole Practitioner | A Better Way CPA | Dark Horse"
        description="Stop being overworked and underpaid. Join the collaborative Dark Horse CPA team to scale your book of business, increase your fees, and work more efficiently."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-4 pb-20 md:pb-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-10 lg:gap-x-10 items-center">
            <div className="order-2 md:order-1">
              <h1>Sole Practitioners and Micro Firms</h1>
              <p className="text-lg">
                Overworked and underpaid solo CPA practitioners are increasingly
                deciding to merge their practice into Dark Horse CPAs. As a Dark
                Horse Principal, they gain the resources needed to scale their
                book of business, increase their fees, work more efficiently and
                join a collaborative team that helps them handle any tax or
                accounting issues with clients that may arise during client
                service. The Dark Horse model removes the ceiling on their
                earnings and helps them live a more balanced life.
              </p>
              <ButtonSolid
                href="#"
                text="Book a Discovery Call"
                className="w-full md:w-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage image={data.hero.childImageSharp.gatsbyImageData} />
            </div>
          </div>
        </div>
      </section>

      <BgImage
        className="bg-secondary-400 py-14 md:py-28"
        image={data.grayCrossesBackground.childImageSharp.gatsbyImageData}
      >
        <div className="container px-10">
          <div className="bg-secondary-400 py-12 px-4 md:px-16 max-w-[883px] mx-auto">
            <h2 className="text-center md:text-left mb-10">
              The Dark Horse Platform
            </h2>
            <p className="font-display text-xl md:text-2xl mb-0">
              The Dark Horse Platform includes all the technology,
              collaboration, and operational systems needed to operate a
              successful practice. When we built the company, we thought about
              everything a sole practitioner would need to succeed and brought
              those things together. We also understand the need to "go at it
              together" rather than alone, which is the single greatest piece of
              the puzzle that Dark Horse can bring you.
            </p>
          </div>
        </div>
      </BgImage>

      <DarkHorseDifference className="pt-20 md:pt-30" />

      <section className="pt-10 md:pt-20 pb-20 md:pb-52">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-10 items-center">
            <div>
              <img
                src={data.transitionBreakdown.publicURL}
                alt="Transition Breakdown"
                className="mx-auto"
              />
            </div>
            <div>
              <h1 className="mb-0">Transition Breakdown</h1>
              <p className="text-lg">
                Everyone's business and client base are unique. Our transition
                plan is customized to each incoming Principal. In general, it
                starts with outlining client scope and type, crafting
                communication, rolling up software licenses, and promoting the
                new addition in our public platforms. It is a 4-6 week process
                with dedicated support from key executives during the entire
                transition.
              </p>
              <ButtonGhost
                href="#"
                iconRight
                text="Success Stories"
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQs />

      <section className="pb-20 md:pb-30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="relative">
              <GatsbyImage
                image={data.suzi.childImageSharp.gatsbyImageData}
                className="rounded-3xl z-0"
              />
              <button
                data-modal-open="modal-video"
                className="absolute flex justify-center items-center inset-0 w-full"
              >
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 75 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="37.5" cy="37.5" r="37.5" fill="#FD9A4A" />
                  <path d="M29 53V22L53 37.7541L29 53Z" fill="#314251" />
                </svg>
              </button>
            </div>
            <div>
              <h2>Success Stories</h2>
              <blockquote className="mb-6">
                <q className="mb-6 block">
                  Having the support of a person who ‘gets it’ is amazing –
                  life-changing! I actually took my first spring break vacation
                  in 20 years.
                </q>
                <footer>
                  <cite className="not-italic">
                    <b>Suzi Drennen</b>
                    <br />
                    North County, San Diego
                  </cite>
                </footer>
              </blockquote>
              <ButtonGhost
                href="https://darkhorse.cpa/success-stories/25-years-of-running-a-successful-cpa-practice/"
                outboundLink={true}
                iconRight
                text="Read the Story"
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <About />
      <RecentBlogPosts />
      <Subscribe />
      <CallToAction />
      <ModalVideo
        video={
          <iframe
            title="Suzi Drennen Success Story"
            src="https://player.vimeo.com/video/446627832?h=baaf26eb1e"
            width="100%"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen;"
            allowFullScreen
          ></iframe>
        }
      />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "3.0 Sole Practitioner/1.0 Hero.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 550)
      }
    }
    transitionBreakdown: file(
      relativePath: { eq: "3.0 Sole Practitioner/2.0 Transition.svg" }
    ) {
      publicURL
    }
    grayCrossesBackground: file(
      relativePath: { eq: "Global/Patterns/gray-crosses-full-bakground.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    suzi: file(relativePath: { eq: "3.0 Sole Practitioner/suzi.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
