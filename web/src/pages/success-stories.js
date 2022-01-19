import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
// import Fade from "react-reveal/Fade";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CTA";
import ButtonGhost from "../components/Button/ButtonGhost";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Success Stories | A Better Way CPA | Dark Horse CPA"
        description="Hear it from the 'horse's mouth.' Our success stories show the Dark Horse model has helped CPAs not only boost their earnings but live a more balanced life."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-10 md:pt-20 pb-20 md:pb-30">
        <div className="container">
          <header className="max-w-[785px]">
            <h1>Success Stories</h1>
            <p className="text-lg mb-0">
              Hear it from the "horse's mouth." Here's how the Dark Horse model
              has helped CPAs not only boost their earnings but live a more
              balanced life.
            </p>
          </header>
        </div>
      </section>

      <section className="pb-20 md:pb-30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center mb-20 md:mb-28">
            <div className="order-2 md:order-1">
              <div className="uppercase text-gray-300 text-sm font-bold mb-7">
                ACCELERATOR
              </div>
              <h2 className="heading-three">John Warner</h2>
              <blockquote className="mb-10">
                <q className="mb-5 text-lg block">
                  The growth was fast and furious.” Five months after joining
                  Dark Horse, John’s business was self-sustaining; he had more
                  than enough revenue to qualify to become a Principal and, as
                  such, was made an equity Principal in the firm. Over the two
                  years since joining Dark Horse, his business has doubled in
                  size, and he now has two employees working for him to support
                  the client base.
                </q>
                <footer>
                  <cite className="not-italic text-sm">St. Louis, MO</cite>
                </footer>
              </blockquote>
              <ButtonGhost
                href="/john-warner/"
                iconRight
                text="Read the Story"
                className="w-full md:w-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.john.childImageSharp.gatsbyImageData}
                className="rounded-3xl z-0"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.suzi.childImageSharp.gatsbyImageData}
                className="rounded-3xl z-0"
              />
            </div>
            <div>
              <div className="uppercase text-gray-300 text-sm font-bold mb-7">
                SOLE PRACTITIONER
              </div>
              <h2 className="heading-three">Suzi Drenner</h2>
              <blockquote className="mb-10">
                <q className="mb-5 text-xl block">
                  Having the support of a person who ‘gets it’ is amazing –
                  life-changing! I actually took my first spring break vacation
                  in 20 years.
                </q>
                <footer>
                  <cite className="not-italic text-sm">
                    North County, San Diego
                  </cite>
                </footer>
              </blockquote>
              <ButtonGhost
                href="/suzi-drennen/"
                iconRight
                text="Read the Story"
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
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
    suzi: file(
      relativePath: { eq: "6.0 Success Stories/1.0 Sole Practitioner.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    john: file(
      relativePath: { eq: "6.0 Success Stories/2.0 Accelerator.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
