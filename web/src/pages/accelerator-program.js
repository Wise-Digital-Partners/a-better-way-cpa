import React from "react";
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
  const faqs = [
    {
      question:
        "I have never had to interact directly with clients, especially not on the initial phone call/consult. Is that going to be an issue?",
      answer: (
        <>
          <p className="text-secondary-800 mb-0">
            Not at all. We understand that many CPAs have not had a ton of
            experience on the client engagement side. That is why we developed
            our Customer Engagement Training. We set up 1-on-1 coaching sessions
            and review calls/meetings with you during your first couple of
            months to make sure you feel as comfortable as possible interacting
            with our incoming prospects.
          </p>
        </>
      ),
    },
    {
      question:
        "What type of industry experience do I need to qualify for the Accelerator Program?",
      answer: (
        <>
          <p className="text-secondary-800 mb-0">
            We generally look for individuals who have been working in public
            accounting for at least 6 years with an emphasis on Tax.
          </p>
        </>
      ),
    },
    {
      question:
        "Do I need to have a client base or a book of business to join the Accelerator Program?",
      answer: (
        <>
          <p className="text-secondary-800">
            No! This is a "start from scratch" type of position. No one is
            required to bring on any outside business (but you absolutely can if
            you have past relationships that love working with you).
          </p>
        </>
      ),
    },
    {
      question:
        "How long does it normally take for an Accelerator to become a Principal?",
      answer: (
        <>
          <p className="text-secondary-800 mb-0">
            This ranges based on the individual, but we estimate it should take
            6-9 Months on average to graduate to Principal. We strive to keep
            the time under 1 year.
          </p>
        </>
      ),
    },
    {
      question:
        "If I decide to take an advance on my commissions, and it doesn't work out, do I owe the company that money?",
      answer: (
        <>
          <p className="text-secondary-800 mb-0">
            No! This is our investment in you, and we have been fortunate enough
            that we have not experienced that situation. We believe you will
            look at Dark Horse as your long-term career move, and we want to do
            everything we can to make that happen. But if something doesn't work
            out, you do not owe the company anything.
          </p>
        </>
      ),
    },
  ];

  return (
    <Layout>
      <SearchEngineOptimization
        title="Dark Horse Accelerator Program | A Better Way CPA"
        description="Attention CPAs—accelerate your path to Principal with Dark Horse. Manage your own clients, own your own book, and start getting the most out of your profession."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-8 md:pt-10 pb-20 md:pb-30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 items-center">
            <div className="order-2 md:order-1">
              <h1 className="mb-0">Accelerator</h1>
              <p className="text-xl font-medium">ac·cel·er·a·tor</p>
              <p className="text-primary-50/40 text-xl font-medium italic">
                noun
              </p>
              <p className="text-primary-50 text-xl font-medium mb-10">
                1. A person or thing that causes something to happen or develop
                more quickly.
              </p>
              <p className="text-lg mb-10">
                At Dark Horse, our goal is to accelerate your path to Principal.
                Then you can manage your own clients, own your own book, and
                start getting the most out of your profession.
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
                <div className="relative bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg mb-6 after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-right-4 after:border-transparent after:border-[16px] after:border-l-secondary-50/30 after:border-r-0">
                  “What does growth look like?”
                </div>
                <div className="relative bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg mb-6 after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-right-4 after:border-transparent after:border-[16px] after:border-l-secondary-50/30 after:border-r-0">
                  “What goes into my compensation or bonus structure?”
                </div>
                <div className="relative bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg mb-6 after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-right-4 after:border-transparent after:border-[16px] after:border-l-secondary-50/30 after:border-r-0">
                  “Seems like promotions are based on unknown factors and not
                  the work I do...”
                </div>
                <div className="relative bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-right-4 after:border-transparent after:border-[16px] after:border-l-secondary-50/30 after:border-r-0">
                  Is my current firm the type of firm that I want to buy into?
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
                <div className="relative bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg mb-6 after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-left-4 after:border-transparent after:border-[16px] after:border-r-secondary-50/30 after:border-l-0">
                  “I have always wanted to go out on my own, but there are too
                  many unkowns/risks involved”
                </div>
                <div className="relative bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg mb-6 after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-left-4 after:border-transparent after:border-[16px] after:border-r-secondary-50/30 after:border-l-0">
                  “What are my metrics for success?”
                </div>
                <div className="relative bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg mb-6 after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-left-4 after:border-transparent after:border-[16px] after:border-r-secondary-50/30 after:border-l-0">
                  “This is a lot of work with not a lot of upside...”
                </div>
                <div className="relative bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-left-4 after:border-transparent after:border-[16px] after:border-r-secondary-50/30 after:border-l-0">
                  How long will it take this firm to change and keep up with the
                  times?
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
              What is an Accelerator?
            </h2>
            <p className="font-display text-xl md:text-2xl mb-0">
              Accelerators are new hires at Dark Horse who do not have an
              existing book of business and are building up their clients from
              scratch. Often these are Senior Managers, Senior Tax Managers, and
              Principals/Partners at their previous firms (who can’t bring over
              business or chose not to). We call them Accelerators because of
              how we “accelerate” them through our process to become a Principal
              of Dark Horse CPAs.
            </p>
          </div>
        </div>
      </BgImage>

      <BgImage
        className="py-36 md:py-52"
        image={data.whatIsIt.childImageSharp.gatsbyImageData}
      >
        <div className="container">
          <div className="grid md:grid-cols-2">
            <div className="md:col-start-2">
              <h2>The goal of the program.</h2>
              <p className="text-lg">
                Our goal is to turn you into a Principal of the firm by
                providing you with the structure, opportunities, and support
                needed to develop your OWN client base. This is done through
                direct ownership of your book of business and equity
                participation in the firm.
              </p>
              <ButtonGhost
                href="/success-stories/"
                iconRight
                text="Success Stories"
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </BgImage>

      <DarkHorseDifference className="pt-20 md:pt-30" />

      <section className="relative bg-secondary-900 pt-20 lg:pt-30 pb-16 lg:pb-20">
        <div className="absolute right-0 top-30">
          <GatsbyImage
            image={data.grayCrossesHorizontal.childImageSharp.gatsbyImageData}
          />
        </div>

        <div className="container">
          <header className="mb-16 md:mb-20 max-w-[837px]">
            <h2>Your pay & benefits.</h2>
            <p className="text-lg">
              The compensation structure for our Accelerators is different
              compared to anything else you may have experienced in accounting.
              Here it is in a nutshell—all benefits + base salary + 50/50 split on all billings = Your Comp Plan.
            </p>
          </header>

          <div className="relative">
            <div className="hidden md:flex justify-center w-full absolute -top-8 lg:-top-12">
              <img src={data.dottedLine.publicURL} alt="Dotted line" />
            </div>

            <Fade bottom cascade distance="120px" duration="2000">
              <div className="grid md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-12 lg:gap-x-24 items-start">
                <div className="bg-primary-50 rounded-5xl p-6 lg:p-8 z-10">
                  <h3 className="heading-four font-body text-secondary-800 mb-6">
                    We Give You A Sweet Benefits Package
                  </h3>
                  <ul className="styled-list-plus text-secondary-900">
                    <li>Medical Coverage</li>
                    <li>401K Match</li>
                    <li>Unlimited Time Off</li>
                    <li>Cell Phone</li>
                  </ul>
                  <p className="text-lg mb-0 text-secondary-900">And more!</p>
                </div>

                <div className="bg-secondary-800 rounded-5xl p-6 lg:p-8 z-10 md:mt-52 md:mb-10">
                  <h3 className="heading-four font-body mb-6">
                    You Choose Your Salary
                  </h3>
                  <p className="text-lg">
                    How much you get paid is up to you. You can take the base
                    salary only or add a draw from your future earnings to help
                    you meet your financial needs.
                  </p>
                </div>

                <div className="bg-secondary-50 rounded-5xl p-6 lg:p-8 z-10">
                  <h3 className="heading-four font-body text-secondary-900 mb-6">
                    We Pay You For Your Performance
                  </h3>
                  <p className="text-lg text-secondary-900">
                    We split billings 50/50 with Accelerators, in real time, for
                    any client you serve. If you’ve taken the optional draw for
                    your salary, your commission is used to pay that back. If
                    you don’t have a draw, you earn that commission on your next
                    paycheck.
                  </p>
                </div>

                <div className="bg-secondary-400 rounded-5xl p-6 lg:p-8 z-10 md:mt-40">
                  <h3 className="heading-four font-body mb-6">
                    You Level Up to Principal
                  </h3>
                  <p className="text-lg">
                    You Level-Up to Principal over time, as your book of
                    business grows, your compensation/payouts will start
                    becoming more substantial and completely tied to your book
                    of business. Which will bring you to the financial trigger
                    to qualify as a Principal of the firm.
                  </p>
                </div>
              </div>
            </Fade>
          </div>

          <div className="pt-16">
            <ButtonGhost
              href="/request-info/"
              iconRight
              text="Request More Info"
              className="w-full md:w-auto"
            />
          </div>
        </div>

        <div className="absolute left-0 bottom-12">
          <GatsbyImage
            image={data.grayCrossesVertical.childImageSharp.gatsbyImageData}
          />
        </div>
      </section>

      <section className="pt-20 md:pt-30 pb-20 md:pb-30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="relative">
              <GatsbyImage
                image={data.johnWarner.childImageSharp.gatsbyImageData}
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
                  The growth was fast and furious.” Five months after joining
                  Dark Horse, John’s business was self-sustaining; he had more
                  than enough revenue to qualify to become a Principal and, as
                  such, was made an equity Principal in the firm. Over the two
                  years since joining Dark Horse, his business has doubled in
                  size, and he now has two employees working for him to support
                  the client base.
                </q>
                <footer>
                  <cite className="not-italic">
                    <b>John Warner</b>
                    <br />
                    St. Louis, MO
                  </cite>
                </footer>
              </blockquote>
              <ButtonGhost
                href="/john-warner/"
                iconRight
                text="Read the Story"
                className="w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden relative pb-20 md:pb-30">
        <div className="-mr-60 md:-mr-40 lg:mr-0 absolute right-0 top-0">
          <GatsbyImage
            image={data.grayCrossesVerticalFull.childImageSharp.gatsbyImageData}
          />
        </div>
        <div className="-ml-60 md:-ml-40 lg:ml-0 absolute left-0 top-0">
          <GatsbyImage
            image={data.grayCrossesVerticalFull.childImageSharp.gatsbyImageData}
          />
        </div>

        <div className="container">
          <div className="max-w-[649px] mx-auto text-center pt-10 md:pt-16">
            <header className="mb-12 md:mb-14">
              <h2>How it all works.</h2>
            </header>

            <Fade bottom distance="120px" duration="2000">
              <div className="mb-8">
                <img
                  src={data.step1.publicURL}
                  alt="Step 1"
                  className="mx-auto mb-5"
                />
                <h3 className="heading-four text-primary-500">Evaluation</h3>
                <p className="text-lg mb-0">
                  Step 1 is identifying if you are a good fit for us and that we
                  are a good fit for you. This model is not for everyone, and we
                  get it. Our goal is to get you all the information you need to
                  feel comfortable in that decision.
                </p>
                <div className="border-l border-dashed border-gray-300 h-36 w-px mt-6 mx-auto"></div>
              </div>
            </Fade>

            <Fade bottom distance="120px" duration="2000">
              <div className="mb-8">
                <img
                  src={data.step2.publicURL}
                  alt="Step 2"
                  className="mx-auto mb-5"
                />
                <h3 className="heading-four text-primary-500">
                  Training Program
                </h3>
                <p className="text-lg mb-0">
                  We do things a little differently, and we want you to be
                  ready. The first 2 weeks are focused on training on our
                  systems, processes, and customer engagement, followed by
                  weekly coaching sessions for your first 3 months.
                </p>
                <div className="border-l border-dashed border-gray-300 h-36 w-px mt-6 mx-auto"></div>
              </div>
            </Fade>

            <Fade bottom distance="120px" duration="2000">
              <div className="mb-8">
                <img
                  src={data.step3.publicURL}
                  alt="Step 3"
                  className="mx-auto mb-5"
                />
                <h3 className="heading-four text-primary-500">
                  Build Your Book
                </h3>
                <p className="text-lg mb-0">
                  You begin taking on inbound inquiries, managing clients
                  end-to-end with a financial target of $150,000 in annual
                  recurring revenue. Once they have signed, we support you in
                  client communication, quoting/engagement, and workflow
                  management.
                </p>
                <div className="border-l border-dashed border-gray-300 h-36 w-px mt-6 mx-auto"></div>
              </div>
            </Fade>

            <Fade bottom distance="120px" duration="2000">
              <div className="mb-8">
                <img
                  src={data.step4.publicURL}
                  alt="Step 4"
                  className="mx-auto mb-5"
                />
                <h3 className="heading-four text-primary-500">
                  Graduate to Principal
                </h3>
                <p className="text-lg mb-0">
                  Once you start servicing clients, you are building your
                  book-up business to qualify you for Principal. This includes
                  financial, reputational, and awareness benchmarks.
                </p>
                <div className="border-l border-dashed border-gray-300 h-36 w-px mt-6 mx-auto"></div>
              </div>
            </Fade>

            <ButtonSolid
              href="https://meetings.hubspot.com/justin-kurn"
              outboundLink
              text="Book a Discovery Call"
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </section>

      <FAQs uniqueFaqs={faqs} />
      <About />
      <RecentBlogPosts />
      <Subscribe />
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
      relativePath: { eq: "open-graph/facebook/Accellerator.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Accellerator.jpg" }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "2.0 Accellerator program/1.0 Hero.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 548)
      }
    }
    painPoints: file(
      relativePath: { eq: "2.0 Accellerator program/2.0 PainPoints.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 440)
      }
    }
    grayCrossesBackground: file(
      relativePath: { eq: "Global/Patterns/gray-crosses-full-bakground.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    whatIsIt: file(
      relativePath: { eq: "2.0 Accellerator program/2.0 what is it.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    dottedLine: file(
      relativePath: { eq: "2.0 Accellerator program/3.0 dotted line.svg" }
    ) {
      publicURL
    }
    step1: file(
      relativePath: { eq: "2.0 Accellerator program/3.0 Step 01.svg" }
    ) {
      publicURL
    }
    step2: file(
      relativePath: { eq: "2.0 Accellerator program/3.0 Step 02.svg" }
    ) {
      publicURL
    }
    step3: file(
      relativePath: { eq: "2.0 Accellerator program/3.0 Step 03.svg" }
    ) {
      publicURL
    }
    step4: file(
      relativePath: { eq: "2.0 Accellerator program/3.0 Step 04.svg" }
    ) {
      publicURL
    }
    grayCrossesHorizontal: file(
      relativePath: {
        eq: "2.0 Accellerator program/gray-crosses-horizontal.png"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 384)
      }
    }
    grayCrossesHorizontal: file(
      relativePath: {
        eq: "2.0 Accellerator program/gray-crosses-horizontal.png"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 384)
      }
    }
    grayCrossesVertical: file(
      relativePath: { eq: "2.0 Accellerator program/gray-crosses-vertical.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 264)
      }
    }
    grayCrossesVerticalFull: file(
      relativePath: {
        eq: "2.0 Accellerator program/gray-crosses-vertical-full.png"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 323)
      }
    }
    johnWarner: file(
      relativePath: { eq: "2.0 Accellerator program/john-warner.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
