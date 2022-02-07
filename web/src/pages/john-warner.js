import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CTA";
import ModalVideo from "../components/Modal/ModalVideo";

const StyledContent = styled.div`
  p,
  span,
  li {
    ${tw`md:text-xl`}
  }
  ul {
    ${tw`list-disc pl-7 mb-6 flex flex-col space-y-0.5`}
  }
`;

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="John Warner | Success Stories | A Better Way CPA"
        description="Meet John Warner, a Principal at Dark Horse CPAs. He's living his dream, helping small businesses and individuals improve their tax and financial position."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <section className="md:pt-18 pb-10 md:pb-30">
        <div className="container">
          <div className="relative">
            <div className="hidden md:block absolute right-0 top-0">
              <GatsbyImage
                image={data.orangeCrosses.childImageSharp.gatsbyImageData}
              />
            </div>

            <div className="grid md:grid-cols-12 gap-y-10 gap-x-4 items-start max-w-[1030px] md:pt-12">
              <div className="bg-secondary-400 px-4 py-8 md:p-14 md:col-start-1 md:col-span-8 md:row-start-1 md:max-w-[730px] -mx-4 md:mx-0">
                <div className="max-w-[454px]">
                  <div className="uppercase text-white text-sm font-bold mb-7">
                    ACCELERATOR
                  </div>

                  <h1>Meet the first Dark Horse Accelerator</h1>

                  <div>
                    <span className="text-primary-50">
                      <b>John Warner</b>
                    </span>
                    <br />
                    <span className="text-secondary-50">St. Louis</span>
                  </div>
                </div>
              </div>
              <div className="md:col-end-13 md:col-span-5 md:row-start-1 relative md:mt-14 relative">
                <GatsbyImage
                  image={data.john.childImageSharp.gatsbyImageData}
                  className="rounded-xl border-4 border-primary-500"
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
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-30 overflow-hidden relative">
        <div className="container">
          <div className="-mr-60 md:-mr-40 lg:mr-0 absolute right-0 top-0">
            <GatsbyImage
              image={
                data.grayCrossesVerticalFull.childImageSharp.gatsbyImageData
              }
            />
          </div>
          <div className="-ml-60 md:-ml-40 lg:ml-0 absolute left-0 top-0">
            <GatsbyImage
              image={
                data.grayCrossesVerticalFull.childImageSharp.gatsbyImageData
              }
            />
          </div>

          <StyledContent className="max-w-[800px] mx-auto mb-16 md:mb-20">
            <div className="md:mb-12 mb-16">
              <p>
                John Warner was raised in St. Louis, the starting point of the
                Lewis and Clark Expedition, one of the most important journeysin
                the history of American exploration. After graduating from
                Truman State University, he started on his own historic journey
                – in the field of accounting. He began with a memorable year
                inside the IRS – an experience that later proved to be excellent
                preparation for a move into public accounting at a large
                national CPA firm. There he spent seven years growing a national
                tax real estate practice serving international real estate
                investment and management firms.
              </p>
            </div>

            <div className="md:mb-12 mb-16">
              <h2 className="heading-four">Seven-Year Itch</h2>
              <p>
                In 2018, after those seven years in the large firm tax practice,
                John decided it was time to pursue his passion – working with
                small businesses. He set up an LLC and started his own practice.
                While he found the work with small business owners and
                entrepreneurs exciting and challenging, he recognized that he
                had a long road ahead. Building a CPA practice would be a
                herculean effort, involving countless hours to establish the
                infrastructure of the firm – designing, implementing and
                maintaining a technology stack, managing IT, creating a website,
                setting up all the legal and profession-specific accounts and
                certifications required to practice, getting insured, sourcing
                competent accounting talent and the countless other
                responsibilities every business owner has to take on. And let’s
                not forget the time and energy required to build a book from
                scratch or the cost (and headaches) of buying a book of
                business.
              </p>
            </div>

            <div className="md:mb-12 mb-16">
              <h2 className="heading-four">Serendipity</h2>
              <p>
                Still in the early phase of his new practice, John pursued an
                opportunity to win some contract work with Dark Horse CPAs. He
                met with Chase Birky and Max Fritz at Dark Horse, and the
                conversation went well beyond temporary contract work. At the
                time, Dark Horse was in the early phases of developing a new
                business model focused on partnership and growth that would
                eventually become the Dark Horse Principal Accelerator Program.
                John was intrigued. He saw it as a way to jump-start growth in
                his client base, while benefiting from the support of an
                established firm and brand. He signed on in July 2019.
              </p>
            </div>
            <div className="md:mb-12 mb-16">
              <h2 className="heading-four">Five Crazy Good Months</h2>
              <p>
                “The ride with Dark Horse has been great for my business,” says
                John. “The firm shares my passion for serving the small business
                community. I knew that building a practice would take long-term
                sustained effort that would create significant sacrifices for a
                young family like ours. Dark Horse compressed what would have
                been a multiyear process into less than a year.”
              </p>
              <p>
                Dark Horse marketing efforts focus on SEO supported by relevant
                digital content, and various paid search campaigns, to drive
                inbound service inquiries. As the first and only Accelerator,
                John followed up on all the new leads coming in. “At times, it
                felt more like a ‘wild horse’,” says John. “The growth was fast
                and furious.” Five months after joining Dark Horse, John’s
                business was self-sustaining; he had more than enough revenue to
                qualify to become a Principal and, as such, was made an equity
                Principal in the firm. Over the two years since joining Dark
                Horse, his business has doubled in size, and he now has two
                employees working for him to support the client base.
              </p>
            </div>
            <div className="md:mb-12 mb-16">
              <h2 className="heading-four">
                Perspective on the Accelerator Program
              </h2>
              <p>
                “My experience as the first Dark Horse Accelerator has been a
                fulfilling time in my career,” says John. “The firm offered
                excellent operational and sales support that definitely
                contributed to my success. Beyond that, I had many opportunities
                to offer suggestions and feedback on the program, and Chase and
                Max were open to evolving and changing. The program, and the
                firm as a whole, improves with each group of accelerators.”
              </p>
            </div>
            <div className="md:mb-12 mb-16">
              <h2 className="heading-four">The Client Connection</h2>
              <p>
                John’s clients are small businesses across a number of
                industries. He works closely with business owners, often as an
                integral member of the management team. “When I worked in a
                large CPA firm, I would prepare the tax returns and have maybe a
                15-minute call with the client. With Dark Horse, I am engaging
                closely with clients in a forward-looking way, advising on
                operations and planning. I personally find the work more
                fulfilling than the typical accounting role. I get great
                satisfaction from offering insights that enable clients to
                strengthen the fundamentals of the business and make informed
                decisions.”
              </p>
              <p>
                For example, a distributor of compostable tableware, seeing
                demand drop off in the economic shutdown of 2020, was able to
                pivot its business model and shift production into PPE
                protective gear. John got involved in inventory tracking,
                commissions and forecasting to assure success of the initiative.
              </p>
            </div>
            <div className="md:mb-12 mb-16">
              <h2 className="heading-four">Disruptive Can Be Constructive</h2>
              <p>
                Dark Horse purposely created a disruptive business model to
                counteract the century-old accounting firm approach based on
                long work hours, inflexible schedules and a slow and
                unpredictable path to partnership. The Dark Horse mission is to
                empower CPAs with the resources that allow them to build their
                practice without sacrificing their personal life. Dark Horse
                Principals run their book of business where, when and how they
                want. This is made possible, in part, by leveraging innovative
                technology, including tightly integrated operational software
                supplemented by proprietary robotic process automation that
                frees up accountants to spend more time with clients.
              </p>
              <p>
                “We take an innovative approach. Each Principal has the support
                of Dark Horse in commissioning new bots, reporting suites or any
                other technology that you can’t just get out of the box. I’m
                fortunate to be part of this collegial, smart and collaborative
                group of CPAs who are really embracing technology.”
              </p>
              <p>
                Asked if he made the right decision in joining Dark Horse, John
                enthusiastically agreed. “The blend of being part of something
                bigger while retaining the autonomy needed to create a lifestyle
                that works for my family and myself has been life-changing. And
                the technology, training, marketing, staffing, exclusive revenue
                streams and collaboration with other CPAs have allowed me to
                build a half-million-dollar book of business in under two
                years.”
              </p>
            </div>
            <div className="md:mb-12 mb-16">
              <h2 className="heading-four">
                Explore the Dark Horse Accelerator Program
              </h2>
              <p>
                Visit the Dark Horse{" "}
                <a href="https://darkhorse.cpa/careers/">careers page</a> to
                learn more about our mission, story and core values. Aligned
                CPAs can inquire about both location-specific openings and
                remote openings for Accelerator and Principal positions.
              </p>
            </div>
          </StyledContent>
        </div>
      </section>

      <CallToAction />
      <ModalVideo
        video={
          <iframe
            title="John Warner Success Story"
            src="https://player.vimeo.com/video/450287260?h=4fa6fb6388"
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
    john: file(
      relativePath: { eq: "2.0 Accellerator program/john-warner.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    orangeCrosses: file(
      relativePath: { eq: "6.0 Success Stories/horseheads and crosses.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 257)
      }
    }
    grayCrossesVerticalFull: file(
      relativePath: { eq: "6.0 Success Stories/gray-crosses-vertical-full.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 197)
      }
    }
  }
`;
export default Page;
