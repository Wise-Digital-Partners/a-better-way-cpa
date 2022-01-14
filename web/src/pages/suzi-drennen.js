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
        title="Suzi Drennen | Success Stories | A Better Way CPA"
        description="Meet Suzi Drennen, a Principal at Dark Horse CPAs. Her favorite part of the job is working directly with clients and building long-term relationships."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
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
                    SOLE PRACTITIONER
                  </div>

                  <h1>25 Years of Running a Successful CPA Practice</h1>

                  <div>
                    <span className="text-primary-50">
                      <b>Suzi Drenner</b>
                    </span>
                    <br />
                    <span className="text-secondary-50">
                      North County, San Diego
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:col-end-13 md:col-span-5 md:row-start-1 relative md:mt-14 relative">
                <GatsbyImage
                  image={data.suzi.childImageSharp.gatsbyImageData}
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
                Suzi Drennen ran a successful practice in tax preparation and
                planning for years. Drennen’s firm provided tax planning and
                preparation and financial projections to small and medium-size
                businesses across the U.S. and abroad.
              </p>
              <p>
                For most of that time, she was a solo entrepreneur, occasionally
                contracting part-time bookkeepers to help with the workload.
              </p>
              <p>
                “My business grew organically, mostly by referrals from existing
                clients to their family and friends. I enjoyed the wide variety
                of clients, from developers of iPhone apps to small
                manufacturers and service providers,” says Suzi. “I didn’t have
                a website, because I didn’t need one.”
              </p>
            </div>

            <div className="md:mb-12 mb-16">
              <h2 className="heading-four">
                The TCJA and COVID-19 Tax Season Changed My Outlook
              </h2>
              <p>
                In 2018 the Tax Cuts and Jobs Act took effect, introducing some
                of the most dramatic changes to the tax code in years. With such
                a far-reaching adjustment to tax laws focused so heavily on
                businesses and corporations, all CPAs and accounting firms had
                an uphill climb to get familiar with new tax rates and rules
                surrounding business deductions. Drennen spent countless hours
                researching and learning about TCJA and how it applies to her
                clients. The experience brought change management into sharp
                relief. “I realized that times of great change put me as a solo
                behind the eight ball on researching industry changes and
                developing and communicating recommendations to clients.” The
                further adjustments around COVID-19 just confirmed her
                realization.
              </p>
            </div>

            <div className="md:mb-12 mb-16">
              <h2 className="heading-four">
                The Appeal of the Dark Horse Model
              </h2>
              <p>
                Drennen met the Dark Horse founders Chase Birky and Max Fritz in
                2020. The collaborative team held great appeal for her. She had
                had a successful run as a solo practitioner, but not without a
                price. Few vacations and the lack of a partner or successor for
                her practice had her thinking about longterm support for her
                clients.
              </p>
            </div>
            <div className="md:mb-12 mb-16">
              <h2 className="heading-four">
                My Personal Values: Time with Clients
              </h2>
              <p>
                “I soon found that I was wearing more hats than ever: working as
                a tax researcher, software tester, security manager and
                marketing copywriter. I found it difficult and time-consuming to
                stay on top of everything. I didn’t make the best ‘Jaqueline of
                trades’,” says Drennen. “It occurred to me that I can’t do it
                all – or in any case, I didn’t want to do it all. I wanted to
                spend my time working with clients, many of whom are valued
                friends.”
              </p>
            </div>
            <div className="md:mb-12 mb-16">
              <h2 className="heading-four">
                My Personal Values: Time with Clients
              </h2>
              <p>
                “I soon found that I was wearing more hats than ever: working as
                a tax researcher, software tester, security manager and
                marketing copywriter. I found it difficult and time-consuming to
                stay on top of everything. I didn’t make the best ‘Jaqueline of
                trades’,” says Drennen. “It occurred to me that I can’t do it
                all – or in any case, I didn’t want to do it all. I wanted to
                spend my time working with clients, many of whom are valued
                friends.”
              </p>
            </div>
            <div className="md:mb-12 mb-16">
              <h2 className="heading-four">
                Reservations about Moving from Solo Practitioner to a Team
              </h2>
              <p>
                After 25 years in her own practice, Drennen knew that she
                preferred to run her business in her own way. “Concerns about
                ‘having a boss’ almost held me back,” she reports. “But I soon
                realized that Chase is more of a support system than a manager.
                He and his co-founder Max help Principals with review of tax
                returns, for example.” The firm also hired a bookkeeper at the
                beginning of tax season. “Having the support of a person who
                ‘gets it’ is amazing – life-changing! I actually took my first
                spring break vacation in 20 years,” Drennen says.
              </p>
            </div>
            <div className="md:mb-12 mb-16">
              <h2 className="heading-four">
                Dark Horse: The Best of Both Worlds
              </h2>
              <p>
                “Chase and Max convinced me that Dark Horse is a business
                organization that supports each of its Principals, while
                preserving their independence to build and manage their own book
                of business.” Dark Horse provides a team of pooled resources to
                assist with administrative tasks, marketing and sales support.
                The firm has a great track record in retaining support staff who
                happen to enjoy the culture and tend stay for the long haul.
                “Navigating the COVID-19 tax season would have been intolerable
                without this amazing team! With Dark Horse, I found best of both
                worlds. The collaboration and comradery are amazing. Working
                with a team of smart professionals gives us all an opportunity
                to trade ideas and information that help each of us provide
                greater value to our clients.”
              </p>
            </div>
            <div className="md:mb-12 mb-16">
              <h2 className="heading-four">
                Thrilled with the Decision to Become a Dark Horse Principal
              </h2>
              <p>
                In a time of change, Drennen has found that a key benefit of
                joining Dark Horse as a Principal was the collaboration and
                shared knowledge among a group of talented peers. The team stays
                in close touch, sharing experiences, tips and resources for
                programs like the SBA Paycheck Protection Program. The Dark
                Horse organization also creates and shares technology solutions
                that keep firm Principals ahead of the curve – a great website,
                a price calculator and a bot that helps automate client
                communications are among the tech stack advances the firm has
                introduced. In addition to the team collaboration and business
                operations support, Drennen feels that Dark Horse offers her a
                continuity plan for support of her clients. “CPAs and lawyers
                work intensely to build a practice and prepare for sale, and the
                transition can be difficult when the next phase involves a
                relatively unknown replacement. With Dark Horse, I know that
                when the time comes, I have a transition plan within the firm
                and my clients will be taken care of by the Dark Horse team of
                smart, collaborative and caring CPAs and staff.”
              </p>
            </div>
          </StyledContent>
        </div>
      </section>

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
    suzi: file(relativePath: { eq: "3.0 Sole Practitioner/suzi.jpg" }) {
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
