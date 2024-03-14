import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import Fade from "react-reveal/Fade";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonGhost from "../components/Button/ButtonGhost";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="About | A Better Way CPA | Dark Horse"
        description="Dark Horse is a community of CPAs seeking to grow and scale a book of business, invest in client relationships, and design a lifestyle that fits their journey."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="overflow-hidden pt-10 md:pt-18 pb-20 md:pb-48">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-10 items-center">
            <div className="order-2 md:order-1">
              <h1>A Horse of a Different Color</h1>
              <p className="text-lg">
                Dark Horse is an anti-CPA firm. We exist to serve accountants so
                that they can best serve clients. Other firms exist to serve
                clients and shove accountants into their predefined box of
                client service. Take the power back. We're here to disrupt the
                traditional power structures the incumbents use to control
                accountants in their effort to extract the maximum value from
                them possible, only to discard them when they burn out. We're
                here to disrupt public accounting for the positive, creating
                better careers and lives in the process.
              </p>
              <ButtonSolid
                href="https://meetings.hubspot.com/justin-kurn"
                outboundLink
                text="Book a Discovery Call"
                className="w-full md:w-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="w-80 h-80 relative flex items-center justify-center md:ml-auto md:mr-8">
                <img
                  src={data.rotatingWords.publicURL}
                  alt="Rotating words"
                  className="rotating absolute inset-0"
                />
                <img src={data.horseHead.publicURL} alt="Dark Horse logo" />
              </div>
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
              Dark Horse’s Golden Rule
            </h2>
            <p className="font-display text-xl md:text-2xl mb-10">
              Every decision made and action taken must benefit you, your
              clients, your peers, or the firm as a whole (collectively, the
              stakeholders) without being at the expense of any of these
              stakeholders.
            </p>
            {/* <ButtonGhost
              href="#"
              iconRight
              altStyle={3}
              text="Learn More about Our Why"
            /> */}
          </div>
        </div>
      </BgImage>

      <section className="pt-20 md:pt-36 pb-20 md:pb-30">
        <div className="container">
          <header className="mb-8">
            <h2>Our Founders</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-10 lg:gap-x-20">
            <div>
              <div className="border-4 border-secondary-400 rounded-3xl overflow-hidden shadow-7xl mb-6 z-0">
                <GatsbyImage
                  image={data.chase.childImageSharp.gatsbyImageData}
                />
              </div>
              <div>
                <h3 className="mb-3.5">Chase Birky</h3>
                <div className="text-sm text-gray-300 font-bold mb-4">
                  Co-Founder + CEO +{" "}
                  <a
                    className="text-primary-500 no-underline"
                    href="https://darkhorse.cpa/podcast/"
                  >
                    Podcaster
                  </a>
                </div>
                <p className="mb-0 text-secondary-50 text-lg">
                  Chase aimed to build a firm that specialized in serving small
                  businesses and individuals that were too often overlooked by
                  the big guys.
                </p>
              </div>
            </div>

            <div>
              <div className="border-4 border-secondary-400 rounded-3xl overflow-hidden shadow-7xl mb-6 z-0">
                <GatsbyImage image={data.max.childImageSharp.gatsbyImageData} />
              </div>
              <div>
                <h3 className="mb-3.5">Max Fritz</h3>
                <div className="text-sm text-gray-300 font-bold mb-4">
                  Co-Founder + COO
                </div>
                <p className="mb-0 text-secondary-50 text-lg">
                  Max is passionate about helping small businesses and
                  individuals navigate the ever-changing tax landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="">
              <div className="max-w-[538px] min-h-[508px] relative">
                <div className="absolute inset-0 flex justify-center items-center">
                  <GatsbyImage
                    image={data.orangeCrosses.childImageSharp.gatsbyImageData}
                  />
                </div>
                <Fade left duration="2000" distance="40px" fraction={0.7}>
                  <div className="absolute right-0 top-0">
                    <GatsbyImage
                      image={data.cpa2.childImageSharp.gatsbyImageData}
                      className="z-0 md:max-w-[310px] shadow-6xl rounded-3xl"
                    />
                  </div>
                </Fade>

                <Fade right duration="2000" distance="40px" fraction={0.2}>
                  <div className="absolute left-0 bottom-0">
                    <GatsbyImage
                      image={data.cpa1.childImageSharp.gatsbyImageData}
                      className="z-0 md:max-w-[310px] shadow-6xl rounded-3xl"
                    />
                  </div>
                </Fade>
              </div>
            </div>

            <div>
              <h2>Meet Our CPAs</h2>
              <p>
                We are in the business of attracting the Dark Horse CPAs in the
                industry. They are dynamic, motivated, entrepreneurial, and are
                5+ years into their career. They deserve to be given a shot to
                succeed. We have been fortunate to attract some of the BEST in
                the industry.
              </p>
              <ButtonGhost href="/our-cpas/" iconRight text="Meet our CPAs" />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-0 md:pb-30 md:flex justify-between items-center">
        <div>
          <GatsbyImage
            image={data.clientLeft.childImageSharp.gatsbyImageData}
            className="z-0 md:rounded-tr-3xl md:rounded-br-3xl md:min-h-[544px] w-full"
          />
        </div>
        <div className="container">
          <header className="md:max-w-[560px] md:mx-auto md:px-4 py-12 md:py-0">
            <h2>Our Clients</h2>
            <p className="text-lg mb-0">
              Our clients come to us looking for a higher caliber CPA. They want
              someone they can build a long-term relationship with, reach out to
              when questions come up, and trust that you are their go-to
              resource for all Tax and Accounting needs. We focus on individuals
              and small to medium-sized businesses because we believe we can
              make the largest positive impact on this group of people.
            </p>
          </header>
        </div>
        <div>
          <GatsbyImage
            image={data.clientRight.childImageSharp.gatsbyImageData}
            className="z-0 md:rounded-tl-3xl md:rounded-bl-3xl md:min-h-[544px] w-full"
          />
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/About.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/About.jpg" }
    ) {
      publicURL
    }
    horseHead: file(relativePath: { eq: "4.0 About DH/1.1 DH head.svg" }) {
      publicURL
    }
    rotatingWords: file(
      relativePath: { eq: "4.0 About DH/1.2 Rotating words.svg" }
    ) {
      publicURL
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
    chase: file(relativePath: { eq: "4.0 About DH/2.1 Founders 1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    max: file(relativePath: { eq: "4.0 About DH/2.2 Founders 2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    cpa1: file(relativePath: { eq: "4.0 About DH/3.1 CPA 1.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 311)
      }
    }
    cpa2: file(relativePath: { eq: "4.0 About DH/3.2 CPA 2.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 311)
      }
    }
    orangeCrosses: file(
      relativePath: { eq: "4.0 About DH/3.2 Background.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 345)
      }
    }
    clientLeft: file(relativePath: { eq: "4.0 About DH/4.0 Client left.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 386)
      }
    }
    clientRight: file(
      relativePath: { eq: "4.0 About DH/4.0 Client Right.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 386)
      }
    }
  }
`;
export default Page;
