import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import BackgroundImage from "../components/Background/Background";
import Fade from "react-reveal/Fade";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Hero from "../components/Hero/HeroFullWidth";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import ValueProps from "../components/Repeating/ValueProps";
import Subscribe from "../components/Repeating/Subscribe";
import About from "../components/Repeating/About";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonGhost from "../components/Button/ButtonGhost";
import ModalPickPoison1 from "../components/Modal/ModalPickPoison1";
import ModalPickPoison2 from "../components/Modal/ModalPickPoison2";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="A Better Way CPA | Dark Horse CPA"
        description="Get empowered to build and scale your own book of business within the collaborative community at Dark Horse, the CPA firm built for CPAs."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <Hero
        backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
        textAlignment="text-center"
        textMaxWidth="max-w-3xl mx-auto"
        padding="py-22 md:py-48"
      >
        <h1 className="font-heading text-mobile-7xl md:text-7xl font-semibold text-white mb-6">
          The CPA firm built for CPAs<span className="text-primary-500">.</span>
        </h1>
        <p className="text-xl tracking-wide mb-8">
          Dark Horse empowers you to build and scale your own practice within a
          collaborative community. It's truly a better way to CPA.
        </p>
        <div className="flex justify-center space-x-4">
          <ButtonSolid
            href="https://meetings.hubspot.com/justin-kurn"
            outboundLink
            text="Book a Discovery Call"
            className="w-full md:w-auto"
          />
        </div>
      </Hero>

      <section className="relative pt-14 md:pt-36 pb-20 md:pb-60">
        <div className="hidden md:block absolute right-0 -top-5">
          <GatsbyImage
            image={data.grayCrossesIntroDesktop.childImageSharp.gatsbyImageData}
          />
        </div>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-10 lg:gap-x-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="md:mb-10">Pick your poison.</h2>
              <div className="grid gap-y-4 mb-6">
                <div className="flex items-center space-x-4">
                  <button
                    data-modal-open="modal-pick-poison-1"
                    className="w-8 h-8 bg-white/20 rounded border-2 border-gray-50"
                  ></button>
                  <p className="text-lg mb-0">
                    Become a Partner in a bureaucratic, political, and/or
                    antiquated CPA firm.
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    data-modal-open="modal-pick-poison-2"
                    className="w-8 h-8 bg-white/20 rounded border-2 border-gray-50"
                  ></button>
                  <p className="text-lg mb-0">
                    Sacrifice your time, money, and relationships to build your
                    own firm.
                  </p>
                </div>
              </div>
              <p className="text-lg">
                These were your only options if you wanted to build and run your
                own practice - until Dark Horse changed the game. We've
                democratized the entire stack of what you need to either build a
                practice from scratch or scale an existing book of business. But
                don't take our word for it. Read about it from our CPAs.
              </p>
              <ButtonGhost
                href="/success-stories/"
                iconRight
                text="Success Stories"
                className="w-full md:w-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="max-w-[286px] md:max-w-[475px] min-h-[236px] md:min-h-[390px] mx-auto md:ml-auto relative">
                <div className="md:hidden absolute -right-8 top-0">
                  <GatsbyImage
                    image={
                      data.grayCrossesIntroMobile.childImageSharp
                        .gatsbyImageData
                    }
                  />
                </div>
                <Fade
                  right
                  duration="2000"
                  distance="40px"
                  delay={250}
                  fraction={0.2}
                >
                  <div className="absolute left-0 bottom-0">
                    <GatsbyImage
                      image={data.arrowLeft.childImageSharp.gatsbyImageData}
                      className="z-0 max-w-[157px] md:max-w-[261px] shadow-6xl rounded-3xl"
                    />
                  </div>
                </Fade>
                <Fade
                  left
                  duration="2000"
                  distance="40px"
                  delay={250}
                  fraction={0.7}
                >
                  <div className="absolute right-0 top-0">
                    <GatsbyImage
                      image={data.arrowRight.childImageSharp.gatsbyImageData}
                      className="z-0 max-w-[157px] md:max-w-[261px] shadow-6xl rounded-3xl"
                    />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="-mx-4 md:mx-0">
              <GatsbyImage
                image={data.intro.childImageSharp.gatsbyImageData}
                className="md:rounded-3xl"
              />
            </div>
            <div>
              <h2>Stop spending your time building the wheel.</h2>
              <p className="text-lg">
                We built Dark Horse so you don't have to spend your time, money,
                and energy building and maintaining all of the infrastructure,
                technology, marketing, branding, compliance, and everything else
                you need to have in place to be able to create a profitable
                practice that drives substantial value for clients. At Dark
                Horse, you'll spend your time serving your clients and team
                members. And all while growing your practice in a collaborative
                community of like-minded professionals who are invested in each
                other's success.
              </p>
              <ButtonSolid
                href="https://meetings.hubspot.com/justin-kurn"
                outboundLink
                text="Book a Discovery Call"
                className="w-full md:w-auto"
              />
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
              What we are (not).
            </h2>
            <p className="font-heading font-semibold text-2xl md:text-[26px] leading-[40px] mb-0">
              We are NOT a franchise, and we are much more than a back-office
              service offering. We are a modern CPA firm with a differentiated
              brand and value proposition. Our Principals are owners of the
              firm, and they run their own P&L, so they can see their paychecks
              in real-time. They even have liquidity when it comes to their
              equity vs. the unfunded chain letter of the traditional
              partnership. Dark Horse exists to serve accountants so that they
              can serve clients and build a better life.
            </p>
          </div>
        </div>
      </BgImage>

      <ValueProps />

      <BackgroundImage
        className="bg-secondary-900 lg:pt-24 lg:pb-52"
        backgroundImages={
          data.adventureBackground.childImageSharp.gatsbyImageData
        }
        tabletRemoveBackground={true}
      >
        <div className="lg:hidden -mx-4 md:mx-0 mb-6">
          <GatsbyImage
            image={data.orangeCrossesTwoRows.childImageSharp.gatsbyImageData}
          />
        </div>

        <header className="text-center mb-6 md:mb-36">
          <h2>Choose your own adventure.</h2>
        </header>

        <div className="lg:hidden -mx-4 md:mx-0 mb-10">
          <GatsbyImage
            image={data.orangeCrossesTwoRows.childImageSharp.gatsbyImageData}
          />
        </div>

        <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 justify-between">
          <div className="text-center">
            <h4 className="max-w-[390px] mx-auto">Start From Scratch</h4>
            <p className="text-lg max-w-[342px] mx-auto">
              Are you looking to grow a book of business from scratch (or
              near-scratch)? This program is for you.
            </p>
            <ButtonGhost
              href="/accelerator-program/"
              iconLeft
              text="Get Started Here"
              className="w-full md:w-auto"
            />
          </div>

          <div className="text-center">
            <h4 className="max-w-[390px] mx-auto">Scale Your Book</h4>
            <p className="text-lg max-w-[342px] mx-auto">
              Are you a solo practitioner or micro-firm looking to elevate and
              scale your practice within a collaborative community?
            </p>
            <ButtonGhost
              href="/sole-practitioner/"
              iconRight
              text="Step Right Up"
              className="w-full md:w-auto"
            />
          </div>
        </div>

        <div className="lg:hidden -mx-4 md:mx-0 mt-10">
          <GatsbyImage
            image={data.orangeCrossesTwoRows.childImageSharp.gatsbyImageData}
          />
        </div>
      </BackgroundImage>

      <About className="pt-16 md:pt-30" />
      <RecentBlogPosts />
      <Subscribe />
      <CallToAction />
      <ModalPickPoison1 />
      <ModalPickPoison2 />
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
    heroDesktop: file(
      relativePath: { eq: "1.0 Homepage/Full Width Hero.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 1440)
      }
    }
    arrowLeft: file(relativePath: { eq: "1.0 Homepage/2.1 Left arrow.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 261)
      }
    }
    arrowRight: file(relativePath: { eq: "1.0 Homepage/2.0 Right arrow.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 261)
      }
    }
    intro: file(relativePath: { eq: "1.0 Homepage/3.0 intro.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    grayCrossesBackground: file(
      relativePath: { eq: "Global/Patterns/gray-crosses-full-bakground.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    adventureBackground: file(
      relativePath: { eq: "1.0 Homepage/3.0 Adventure Module Background.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    grayCrossesIntroDesktop: file(
      relativePath: { eq: "1.0 Homepage/gray-crosses.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 543)
      }
    }
    grayCrossesIntroMobile: file(
      relativePath: { eq: "1.0 Homepage/gray-crosses-mobile.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 242)
      }
    }
    orangeCrossesTwoRows: file(
      relativePath: { eq: "Global/Patterns/orange-crosses-two-rows.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
