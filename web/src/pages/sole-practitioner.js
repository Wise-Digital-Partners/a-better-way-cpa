import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import Fade from "react-reveal/Fade";

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
  const [clientSegmentation, setClientSegmentation] = useState(false);
  const [supportAllocation, setSupportAllocation] = useState(false);
  const [clientCommunication, setClientCommunication] = useState(false);
  const [dataTransfer, setDataTransfer] = useState(false);
  const [clientDHEngagement, setClientDHEngagement] = useState(false);
  const [publicProfileChanges, setPublicProfileChanges] = useState(false);
  const [prWeb, setPRWeb] = useState(false);

  const clickClientSegmentation = () => {
    setClientSegmentation(!clientSegmentation);
    setSupportAllocation(false);
    setClientCommunication(false);
    setDataTransfer(false);
    setClientDHEngagement(false);
    setPublicProfileChanges(false);
    setPRWeb(false);
  };

  const clickSupportAllocation = () => {
    setSupportAllocation(!supportAllocation);
    setClientSegmentation(false);
    setClientCommunication(false);
    setDataTransfer(false);
    setClientDHEngagement(false);
    setPublicProfileChanges(false);
    setPRWeb(false);
  };

  const clickClientCommunication = () => {
    setClientCommunication(!clientCommunication);
    setClientSegmentation(false);
    setSupportAllocation(false);
    setDataTransfer(false);
    setClientDHEngagement(false);
    setPublicProfileChanges(false);
    setPRWeb(false);
  };

  const clickDataTransfer = () => {
    setDataTransfer(!dataTransfer);
    setClientSegmentation(false);
    setSupportAllocation(false);
    setClientCommunication(false);
    setClientDHEngagement(false);
    setPublicProfileChanges(false);
    setPRWeb(false);
  };

  const clickClientDHEngagement = () => {
    setClientDHEngagement(!clientDHEngagement);
    setClientSegmentation(false);
    setSupportAllocation(false);
    setClientCommunication(false);
    setDataTransfer(false);
    setPublicProfileChanges(false);
    setPRWeb(false);
  };

  const clickPublicProfileChanges = () => {
    setPublicProfileChanges(!publicProfileChanges);
    setClientSegmentation(false);
    setSupportAllocation(false);
    setClientCommunication(false);
    setDataTransfer(false);
    setClientDHEngagement(false);
    setPRWeb(false);
  };

  const clickPRWeb = () => {
    setPRWeb(!prWeb);
    setClientSegmentation(false);
    setSupportAllocation(false);
    setClientCommunication(false);
    setDataTransfer(false);
    setClientDHEngagement(false);
    setPublicProfileChanges(false);
  };

  return (
    <Layout>
      <SearchEngineOptimization
        title="Sole Practitioner | A Better Way CPA | Dark Horse"
        description="Stop being overworked and underpaid. Join the collaborative Dark Horse CPA team to scale your book of business, increase your fees, and work more efficiently."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-6 md:pt-10 pb-20 md:pb-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-10 lg:gap-x-10 items-center">
            <div className="order-2 md:order-1">
              <h1>Sole Practitioners and Micro Firms</h1>
              <p className="text-lg">
                Overworked and underpaid sole CPA practitioners are increasingly
                deciding to merge their practice into Dark Horse CPAs. As a Dark
                Horse Principal, they gain the resources needed to scale their
                book of business, increase their fees, work more efficiently and
                join a collaborative team that helps them handle any tax or
                accounting issues with clients that may arise during client
                service. The Dark Horse model removes the ceiling on their
                earnings and helps them live a more balanced life.
              </p>
              <ButtonSolid
                href="https://meetings.hubspot.com/justin-kurn"
                outboundLink
                text="Book a Discovery Call"
                className="w-full md:w-auto"
              />
            </div>
            <div className="order-1 md:order-2 md:ml-auto">
              <GatsbyImage image={data.hero.childImageSharp.gatsbyImageData} />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-30">
        <div className="container">
          <header className="max-w-[624px] mx-auto text-center mb-10 md:mb-12">
            <h2>Pain Points</h2>
            <p className="text-lg">
              If you are like many people working in Public Accounting, the
              following Pain Points may have crossed your mind...
            </p>
          </header>
          <div className="grid md:grid-cols-3 gap-y-8 md:gap-x-6 lg:gap-x-10 items-center">
            <Fade right cascade mirror distance="100px" duration="1000">
              <div>
                <div className="relative z-20 block mb-6 md:mb-8 bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg mb-6 after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-right-4 after:border-transparent after:border-[16px] after:border-l-secondary-50/30 after:border-r-0">
                  How can I command a premium price for my services?
                </div>
                <div className="relative z-20 block mb-6 md:mb-8 bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg mb-6 after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-right-4 after:border-transparent after:border-[16px] after:border-l-secondary-50/30 after:border-r-0">
                  Who do I go to if I need to spot check my work?
                </div>
                <div className="relative z-20 block mb-6 md:mb-8 bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-right-4 after:border-transparent after:border-[16px] after:border-l-secondary-50/30 after:border-r-0">
                  What technology is best suited to service my clients and to
                  work efficiently?
                </div>
              </div>
            </Fade>
            <div className="mx-auto">
              <GatsbyImage
                image={data.painPoints.childImageSharp.gatsbyImageData}
              />
            </div>
            <Fade right cascade distance="100px" duration="1000">
              <div>
                <div className="relative z-20 block mb-6 md:mb-8 bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg mb-6 after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-left-4 after:border-transparent after:border-[16px] after:border-r-secondary-50/30 after:border-l-0">
                  How do I scale my operation over time?
                </div>
                <div className="relative z-20 block mb-6 md:mb-8 bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg mb-6 after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-left-4 after:border-transparent after:border-[16px] after:border-r-secondary-50/30 after:border-l-0">
                  How can I formally collaborate with like-minded peers?
                </div>
                <div className="relative z-20 block mb-6 md:mb-8 bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-left-4 after:border-transparent after:border-[16px] after:border-r-secondary-50/30 after:border-l-0">
                  How to I stay relevant with my branding and online presence?
                </div>
              </div>
            </Fade>
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
              Our Dark Horse platform.
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
              <h2>Transition breakdown.</h2>
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

      <section className="pb-20 md:pb-30">
        <div className="container">
          <header className="text-center">
            <h2>Timeline</h2>
          </header>
          <div className="grid grid-cols-5 gap-y-8 gap-x-2 lg:gap-x-4">
            <div className="bg-secondary-900 rounded-xl md:rounded-3xl text-center px-2 py-2 md:py-3 text-sm md:text-xl text-secondary-50 font-extrabold">
              Week 1
            </div>
            <div className="bg-secondary-900 rounded-xl md:rounded-3xl text-center px-2 py-2 md:py-3 text-sm md:text-xl text-secondary-50 font-extrabold">
              Week 2
            </div>
            <div className="bg-secondary-900 rounded-xl md:rounded-3xl text-center px-2 py-2 md:py-3 text-sm md:text-xl text-secondary-50 font-extrabold">
              Week 3
            </div>
            <div className="bg-secondary-900 rounded-xl md:rounded-3xl text-center px-2 py-2 md:py-3 text-sm md:text-xl text-secondary-50 font-extrabold">
              Week 4
            </div>
            <div className="bg-secondary-900 rounded-xl md:rounded-3xl text-center px-2 py-2 md:py-3 text-sm md:text-xl text-secondary-50 font-extrabold">
              Week 5
            </div>
          </div>

          <div className="relative">
            <div className="w-px bg-gray-200/30 absolute h-full left-[20%]"></div>
            <div className="w-px bg-gray-200/30 absolute h-full left-[40%]"></div>
            <div className="w-px bg-gray-200/30 absolute h-full left-[60%]"></div>
            <div className="w-px bg-gray-200/30 absolute h-full left-[80%]"></div>

            <div className="pt-8 md:pt-10">
              <div className="relative">
                <div
                  className={`absolute inset-x-0 max-w-[416px] bg-secondary-50 shadow-7xl rounded-xl p-4 md:p-6 text-xs text-secondary-800 font-medium inline-block transition-all duration-300 ease-linear ${
                    clientSegmentation
                      ? "opacity-100 -top-40 md:-top-44 z-30"
                      : "opacity-0 -top-32 md:-top-36"
                  }`}
                >
                  Consistent (but not overwhelming) communication is critical to
                  the transition. We recommend sending 3 emails during the
                  process. The first announces the changes, answers some FAQs
                  and describes next steps. The second has the Dark Horse
                  engagement letter and education on any software changes
                  (ShareFile, etc.) they would need to know about. The third is
                  a thank you and welcome to the Dark Horse family.
                </div>
                <button
                  onClick={clickClientSegmentation}
                  onKeyDown={clickClientSegmentation}
                  className={`relative z-20 block mb-6 md:mb-8 hover:bg-secondary-50/60 rounded-xl text-center px-3 py-1.5 text-sm md:text-lg font-bold hover:text-primary-50 max-w-[320px] w-[32%] no-underline transition-all duration-300 ease-linear ${
                    clientSegmentation
                      ? "bg-secondary-50/60"
                      : "bg-secondary-50/30"
                  }`}
                >
                  Client Segmentation{" "}
                  <i className="fal fa-info-circle text-primary-500 ml-0.5"></i>
                </button>
              </div>

              <div className="relative">
                <div
                  className={`absolute inset-x-0 max-w-[416px] bg-secondary-50 shadow-7xl rounded-xl p-4 md:p-6 text-xs text-secondary-800 font-medium inline-block transition-all duration-300 ease-linear ${
                    supportAllocation
                      ? "opacity-100 -top-28 md:-top-32 z-30"
                      : "opacity-0 -top-20 md:-top-24"
                  }`}
                >
                  Determining where the primary support needs are in relation to
                  the types of clients being moved over. Allocating certain
                  deliverables and workload to key individuals as well as
                  identifying additional hires/support needs.
                </div>
                <button
                  onClick={clickSupportAllocation}
                  onKeyDown={clickSupportAllocation}
                  className={`relative z-20 block mb-6 md:mb-8 hover:bg-secondary-50/60 rounded-xl text-center px-3 py-1.5 text-sm md:text-lg font-bold hover:text-primary-50 max-w-[605px] w-[57%] no-underline transition-all duration-300 ease-linear ${
                    supportAllocation
                      ? "bg-secondary-50/60"
                      : "bg-secondary-50/30"
                  }`}
                >
                  Support Allocation{" "}
                  <i className="fal fa-info-circle text-primary-500 ml-0.5"></i>
                </button>
              </div>

              <div className="relative">
                <div
                  className={`absolute inset-x-0 mx-auto max-w-[416px] bg-secondary-50 shadow-7xl rounded-xl p-4 md:p-6 text-xs text-secondary-800 font-medium inline-block transition-all duration-300 ease-linear ${
                    clientCommunication
                      ? "opacity-100 -top-40 md:-top-44 z-30"
                      : "opacity-0 -top-32 md:-top-36"
                  }`}
                >
                  Consistent (but not overwhelming) communication is critical to
                  the transition. We recommend sending 3 emails during the
                  process. The first announces the changes, answers some FAQs
                  and describes next steps. The second has the Dark Horse
                  engagement letter and education on any software changes
                  (ShareFile, etc.) they would need to know about. The third is
                  a thank you and welcome to the Dark Horse family.
                </div>
                <button
                  onClick={clickClientCommunication}
                  onKeyDown={clickClientCommunication}
                  className={`relative z-20 block mb-6 md:mb-8 hover:bg-secondary-50/60 rounded-xl text-center px-3 py-1.5 text-sm md:text-lg font-bold hover:text-primary-50 w-full no-underline transition-all duration-300 ease-linear ${
                    clientCommunication
                      ? "bg-secondary-50/60"
                      : "bg-secondary-50/30"
                  }`}
                >
                  Client Communication{" "}
                  <i className="fal fa-info-circle text-primary-500 ml-0.5"></i>
                </button>
              </div>

              <div className="relative">
                <div
                  className={`absolute inset-x-0 left-[25%] max-w-[416px] bg-secondary-50 shadow-7xl rounded-xl p-4 md:p-6 text-xs text-secondary-800 font-medium inline-block transition-all duration-300 ease-linear ${
                    dataTransfer
                      ? "opacity-100 -top-28 md:-top-32 z-30"
                      : "opacity-0 -top-20 md:-top-24"
                  }`}
                >
                  Identifying all key client information that must be transited
                  into our software. This includes all tax related software,
                  CRM/Contact information and any additional information
                  relevant to the ongoing business.
                </div>
                <button
                  onClick={clickDataTransfer}
                  onKeyDown={clickDataTransfer}
                  className={`relative z-20 block mb-6 md:mb-8 ml-[29%] hover:bg-secondary-50/60 rounded-xl text-center px-3 py-1.5 text-sm md:text-lg font-bold hover:text-primary-50 max-w-[311px] w-[35%] no-underline transition-all duration-300 ease-linear ${
                    dataTransfer ? "bg-secondary-50/60" : "bg-secondary-50/30"
                  }`}
                >
                  Data Transfer{" "}
                  <i className="fal fa-info-circle text-primary-500 ml-0.5"></i>
                </button>
              </div>

              <div className="relative">
                <div
                  className={`absolute inset-x-0 left-[43%] max-w-[416px] bg-secondary-50 shadow-7xl rounded-xl p-4 md:p-6 text-xs text-secondary-800 font-medium inline-block transition-all duration-300 ease-linear ${
                    clientDHEngagement
                      ? "opacity-100 -top-28 md:-top-32 z-30"
                      : "opacity-0 -top-20 md:-top-24"
                  }`}
                >
                  Based on the types of engagements identified above, we send
                  specific engagement letters with the client and DH, which
                  would be sent in the second communication.
                </div>
                <button
                  onClick={clickClientDHEngagement}
                  onKeyDown={clickClientDHEngagement}
                  className={`relative z-20 block mb-6 md:mb-8 ml-[48%] hover:bg-secondary-50/60 rounded-xl text-center px-3 py-1.5 text-sm md:text-lg font-bold hover:text-primary-50 max-w-[311px] w-[35%] no-underline transition-all duration-300 ease-linear ${
                    clientDHEngagement
                      ? "bg-secondary-50/60"
                      : "bg-secondary-50/30"
                  }`}
                >
                  Client DH Engagement{" "}
                  <i className="fal fa-info-circle text-primary-500 ml-0.5"></i>
                </button>
              </div>

              <div className="relative">
                <div
                  className={`absolute inset-x-0 ml-auto max-w-[416px] bg-secondary-50 shadow-7xl rounded-xl p-4 md:p-6 text-xs text-secondary-800 font-medium inline-block transition-all duration-300 ease-linear ${
                    publicProfileChanges
                      ? "opacity-100 -top-20 md:-top-24 z-30"
                      : "opacity-0 -top-12 md:-top-16"
                  }`}
                >
                  Begin the announcement on LinkedIn, and any public facing
                  sites that showcase you professionally.
                </div>
                <button
                  onClick={clickPublicProfileChanges}
                  onKeyDown={clickPublicProfileChanges}
                  className={`relative z-20 block mb-6 md:mb-8 ml-auto hover:bg-secondary-50/60 rounded-xl text-center px-3 py-1.5 text-sm md:text-lg font-bold hover:text-primary-50 max-w-[337px] w-[35%] no-underline transition-all duration-300 ease-linear ${
                    publicProfileChanges
                      ? "bg-secondary-50/60"
                      : "bg-secondary-50/30"
                  }`}
                >
                  Public Profile Changes{" "}
                  <i className="fal fa-info-circle text-primary-500 ml-0.5"></i>
                </button>
              </div>

              <div className="relative">
                <div
                  className={`absolute inset-x-0 ml-auto max-w-[416px] bg-secondary-50 shadow-7xl rounded-xl p-4 md:p-6 text-xs text-secondary-800 font-medium inline-block transition-all duration-300 ease-linear ${
                    prWeb
                      ? "opacity-100 -top-24 md:-top-28 z-30"
                      : "opacity-0 -top-16 md:-top-20"
                  }`}
                >
                  Update the Dark Horse Website and submit a Press Release
                  sharing about your transition to Dark Horse and welcoming you
                  to the family.
                </div>
                <button
                  onClick={clickPRWeb}
                  onKeyDown={clickPRWeb}
                  className={`relative z-20 block mb-6 md:mb-8 ml-auto hover:bg-secondary-50/60 rounded-xl text-center px-3 py-1.5 text-sm md:text-lg font-bold hover:text-primary-50 max-w-[134px] w-full no-underline transition-all duration-300 ease-linear ${
                    prWeb ? "bg-secondary-50/60" : "bg-secondary-50/30"
                  }`}
                >
                  PR & web{" "}
                  <i className="fal fa-info-circle text-primary-500 ml-0.5"></i>
                </button>
              </div>
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
              <h2>Success stories.</h2>
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
                href="/suzi-drennen/"
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
        gatsbyImageData(layout: CONSTRAINED, width: 491)
      }
    }
    painPoints: file(
      relativePath: { eq: "3.0 Sole Practitioner/2.0 PainPoints.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 440)
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
