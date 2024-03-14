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
            For those with a tax focus, generally, you need seven or more tax
            seasons in public accounting under your belt. For those with a
            CAS/Fractional CFO focus, you will generally need seven or more
            years of experience in public accounting, with the majority of
            experience providing client accounting services OR substantial
            experience as a controller or CFO outside of public accounting.
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
        "If I don't graduate from the Accelerator Program, do I owe Dark Horse for money invested in me?",
      answer: (
        <>
          <p className="text-secondary-800 mb-0">
            Nope. We know we won't graduate 100% of those who enter the
            Accelerator Program to Principal. Our business model allows us to
            sustain these losses within reasonable parameters, and we don't want
            to have an adversarial relationship with any accountant we serve,
            nor do we want to create a barrier to becoming an Accelerator.
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
                The mission of our Principal Accelerator Program is exactly what
                the name implies…accelerating your{" "}
                <a
                  className="no-underline text-primary-500"
                  href="https://www.prweb.com/releases/dark-horse-cpas-announces-promotion-of-two-accelerators-to-principals-845100589.html"
                >
                  path to Principal
                </a>
                . You'll have all of the resources and coaching you need to
                quickly build a six-figure practice and the confidence to know
                that many have come before you and experienced much better than
                expected success.
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
            <h2>So many questions, so few answers</h2>
            <p className="text-lg">
              Most firms lack clarity on how to become a partner and what
              becoming one means. Most CPAs lack clarity on what's involved in
              creating a successful firm of their own.
            </p>
          </header>
          <div className="grid md:grid-cols-3 gap-y-8 md:gap-x-6 lg:gap-x-10 items-center">
            <Fade right cascade mirror distance="100px" duration="1000">
              <div>
                <div className="relative bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg mb-6 after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-right-4 after:border-transparent after:border-[16px] after:border-l-secondary-50/30 after:border-r-0">
                  "When will a partnership position open up? What is required to
                  be considered?"
                </div>
                <div className="relative bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg mb-6 after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-right-4 after:border-transparent after:border-[16px] after:border-l-secondary-50/30 after:border-r-0">
                  "Do I really want to be a partner in this firm? Are they
                  future-ready?"
                </div>
                <div className="relative bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg mb-6 after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-right-4 after:border-transparent after:border-[16px] after:border-l-secondary-50/30 after:border-r-0">
                  "How much money will I make if/when I become partner? Is it
                  within my control?"
                </div>
                <div className="relative bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-right-4 after:border-transparent after:border-[16px] after:border-l-secondary-50/30 after:border-r-0">
                  "Am I going to be expected to continue to work crazy hours?"
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
                  "How long will it take me to build a book of business and pay
                  off startup expenses and my missed salary?"
                </div>
                <div className="relative bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg mb-6 after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-left-4 after:border-transparent after:border-[16px] after:border-r-secondary-50/30 after:border-l-0">
                  "How do I create a brand that will attract clients and
                  talent?"
                </div>
                <div className="relative bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg mb-6 after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-left-4 after:border-transparent after:border-[16px] after:border-r-secondary-50/30 after:border-l-0">
                  "How do I go about building and maintaining a secure, scalable
                  tech stack?"
                </div>
                <div className="relative bg-secondary-50/30 rounded-xl p-4 lg:p-6 text-secondary-50 lg:text-lg after:hidden md:after:block after:absolute after:w-0 after:h-0 after:top-1/2 after:-translate-y-1/2 after:-left-4 after:border-transparent after:border-[16px] after:border-r-secondary-50/30 after:border-l-0">
                  "How do I find people and build the processes and systems that
                  will allow me to do high-value work for clients?"
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
              Who is an Accelerator?
            </h2>
            <p className="font-display text-xl md:text-2xl mb-0">
              Accelerators are CPAs who have joined Dark Horse to build a
              practice from scratch (or nearly scratch). Oftentimes, they come
              from another CPA firm where they were previously a manager, senior
              manager, director, or partner. They are not content with the
              status quo and seek a better way to CPA. They build six-figure
              books within months while being coached, mentored, and trained to
              create profitable and sustainable practices as a Principal of the
              firm.
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
              <h2>Our goal for you.</h2>
              <p className="text-lg">
                Our goal is to help you seed an accounting practice that serves
                you, your clients, and your loved ones. The Accelerator Program
                is just the beginning of your Dark Horse journey, and we are
                dedicated to your long-term professional and personal growth. We
                hope you'll help us build an incredible firm and help your
                supporting team build a purpose-driven career.
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
            <h2>Making ends meet..</h2>
            <p className="text-lg">
              The Accelerator Program pays you while you're building your book
              of business. No one else does that. There's a buy-in to become a
              Principal that's internally financed. We take the financial risk
              across the board because of our track record of success. We're
              beyond confident those we hire will succeed.
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
                    <li>Health Insurance</li>
                    <li>401K Match</li>
                    <li>Company-Paid Staff Accountant</li>
                    <li>Cell Phone</li>
                  </ul>
                  <p className="text-lg mb-0 text-secondary-900">And more!</p>
                </div>

                <div className="bg-secondary-800 rounded-5xl p-6 lg:p-8 z-10 md:mt-52 md:mb-10">
                  <h3 className="heading-four font-body mb-6">
                    You Choose Your Salary
                  </h3>
                  <p className="text-lg">
                    How much you get paid is your decision. You'll balance your
                    salary needs, your revenue as an Accelerator, and your
                    buy-in amount upon promotion to Principal to create a comp
                    package that serves your current and future needs.
                  </p>
                </div>

                <div className="bg-secondary-50 rounded-5xl p-6 lg:p-8 z-10">
                  <h3 className="heading-four font-body text-secondary-900 mb-6">
                    Promotion to Principal
                  </h3>
                  <p className="text-lg text-secondary-900">
                    You begin running your own P&L and retaining 2/3rds of your
                    net profit. You can take a draw against future earnings
                    while your practice grows and you pay off your buy-in. The
                    sky is the limit at this point of the journey. You also get
                    a stock option grant to give you skin in the game and a say
                    at the table.
                  </p>
                </div>

                <div className="bg-secondary-400 rounded-5xl p-6 lg:p-8 z-10 md:mt-40">
                  <h3 className="heading-four font-body mb-6">
                    Building Wealth
                  </h3>
                  <p className="text-lg">
                    As a Principal, you'll build a book of business that you own
                    and can sell internally or externally. You'll build passive
                    and near-passive revenue streams. And you'll also be
                    eligible for annual stock option grants that represent an
                    asset separate from your book.
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
                  end-to-end with a financial target of $200,000 in annual
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
                  Once you start servicing clients, you are building your book
                  of business to qualify you for Principal. This includes
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
