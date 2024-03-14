import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Fade from "react-reveal/Fade";
import styled from "@emotion/styled";

const StyledContent = styled.div`
  @media (min-width: 768px) {
    .flip-card-inner {
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }

    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }

    .flip-card-front,
    .flip-card-back {
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .flip-card-back {
      transform: rotateY(180deg);
      &.even {
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.2)
          ),
          #86acb2;
      }
      &.odd {
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.2)
          ),
          #fd9a4a;
      }
    }
  }
`;

const ValueProps = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      icon1: file(
        relativePath: { eq: "0.0 Repeated Modules/ValueProps/01.svg" }
      ) {
        publicURL
      }
      icon2: file(
        relativePath: { eq: "0.0 Repeated Modules/ValueProps/02.svg" }
      ) {
        publicURL
      }
      icon3: file(
        relativePath: { eq: "0.0 Repeated Modules/ValueProps/03.svg" }
      ) {
        publicURL
      }
      icon4: file(
        relativePath: { eq: "0.0 Repeated Modules/ValueProps/04.svg" }
      ) {
        publicURL
      }
      icon5: file(
        relativePath: { eq: "0.0 Repeated Modules/ValueProps/05.svg" }
      ) {
        publicURL
      }
      icon6: file(
        relativePath: { eq: "0.0 Repeated Modules/ValueProps/06.svg" }
      ) {
        publicURL
      }
      grayCrosses: file(
        relativePath: { eq: "Global/Patterns/gray-crosses-single-row.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1183)
        }
      }
      grayCrossesTwoRows: file(
        relativePath: { eq: "Global/Patterns/gray-crosses-two-rows.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const content = [
    {
      icon: data.icon1.publicURL,
      heading: "Support In All Areas",
      text: "There is almost no limit to what Dark Horse leadership and your peers will support you on anywhere along the journey from scratch to sale.",
      flipContent: (
        <>
          <div className="text-xl text-primary-500 md:text-white font-medium mb-2">
            You’ll benefit from:
          </div>
          <ul className="styled-list-plus-alt">
            <li>Coaching in sales, operations, team development, etc.</li>
            <li>Robust learning management system</li>
            <li>Recruitment & hiring</li>
            <li>Succession planning assistance</li>
          </ul>
        </>
      ),
    },
    {
      icon: data.icon2.publicURL,
      heading: "Freedom & Flexibility",
      text: "Work where, when, and how you want with your clients. It’s independent, remote work on your terms.",
      flipContent: (
        <>
          <div className="text-xl text-secondary-400 md:text-white font-medium mb-2">
            You’ll benefit from:
          </div>
          <ul className="styled-list-plus-alt">
            <li>100% Trust In Managing your own schedule</li>
            <li>Build your Book with clients YOU want</li>
            <li>100% Remote</li>
            <li>Take time off when you need</li>
          </ul>
        </>
      ),
    },
    {
      icon: data.icon3.publicURL,
      heading: "Marketing & Branding",
      text: "Opportunities for exposure abound on our blog, vlog, podcast, and social media outlets. Leverage our brand for yours.",
      flipContent: (
        <>
          <div className="text-xl text-primary-500 md:text-white font-medium mb-2">
            What you’ll get:
          </div>
          <ul className="styled-list-plus-alt">
            <li>Dedicated marketing resources</li>
            <li>Best practices</li>
            <li>
              Consistent and effective ad spend monitored and managed by our
              marketing team
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: data.icon4.publicURL,
      heading: "Robust Tech Stack",
      text: "We have a team of technologists whose sole mission is to ensure our tech serves our accountants in the present and future.",
      flipContent: (
        <>
          <div className="text-xl text-secondary-400 md:text-white font-medium mb-2">
            You’ll benefit from:
          </div>
          <ul className="styled-list-plus-alt">
            <li>Best-in-class apps connected seamlessly</li>
            <li>SOC-2 security compliance</li>
            <li>Hyper-responsive IT team</li>
            <li>Customized automations for your practice</li>
          </ul>
        </>
      ),
    },
    {
      icon: data.icon5.publicURL,
      heading: "Beyond Fees for Services",
      text: "Create passive & low-effort revenue streams. Earn equity annually. ",
      flipContent: (
        <>
          <div className="text-xl text-primary-500 md:text-white font-medium mb-2">
            You’ll benefit from:
          </div>
          <ul className="styled-list-plus-alt">
            <li>Internal & external revenue sharing agreements</li>
            <li>Annual liquidity window to sell company shares</li>
            <li>Multiple service lines to keep clients sticky</li>
          </ul>
        </>
      ),
    },
    {
      icon: data.icon6.publicURL,
      heading: "Community",
      text: "Our CPAs are constantly up-leveling each other, collaborating, and sharing expertise while building long-lasting, mutually beneficial relationships.",
      flipContent: (
        <>
          <div className="text-xl text-secondary-400 md:text-white font-medium mb-2">
            You’ll participate in:
          </div>
          <ul className="styled-list-plus-alt">
            <li>The collective knowledge & experience within The firm</li>
            <li>Continually improving tech, processes & best practices</li>
            <li>Unparalleled remote-first culture</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className={`${className || "pt-14 md:pt-32 pb-20 md:pb-30"}`}>
      <div className="container">
        <header className="mb-12 text-center md:text-left">
          <h2 className="mb-12 md:mb-1">The Dark Horse difference.</h2>
          <div className="hidden md:block">
            <GatsbyImage
              image={data.grayCrosses.childImageSharp.gatsbyImageData}
            />
          </div>

          <div className="md:hidden">
            <GatsbyImage
              image={data.grayCrossesTwoRows.childImageSharp.gatsbyImageData}
            />
          </div>
        </header>
        <Fade bottom cascade distance="120px" duration="2000">
          <StyledContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-10">
              {content.map((content, i) => {
                return (
                  <div key={i} className="flip-card h-full">
                    <div
                      className={`flip-card-inner relative px-6 md:px-0 h-full pt-5 pb-8 md:py-0 rounded-3xl md:rounded-none shadow-3xl md:shadow-none border-4 md:border-0 ${
                        i % 2
                          ? "border-secondary-400 bg-secondary-50 md:bg-transparent"
                          : "border-primary-500 bg-primary-50 md:bg-transparent"
                      }`}
                    >
                      <div
                        className={`flip-card-front md:w-full md:h-full pb-6 md:px-6 md:py-5 md:rounded-3xl md:shadow-3xl md:border-4 ${
                          i % 2
                            ? "md:border-secondary-400 md:bg-secondary-50"
                            : "md:border-primary-500 md:bg-primary-50"
                        }`}
                      >
                        <img
                          src={content.icon}
                          alt={content.heading}
                          className="mb-2.5"
                        />
                        <div>
                          <h3
                            className={`heading-six ${
                              i % 2 ? "text-primary-500" : "text-secondary-800"
                            }`}
                          >
                            {content.heading}
                          </h3>
                          <p
                            className={`text-lg mb-0 ${
                              i % 2
                                ? "text-secondary-800"
                                : "text-secondary-400"
                            }`}
                          >
                            {content.text}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flip-card-back md:flex md:items-center md:absolute top-0 md:w-full md:h-full md:px-6 md:py-5 md:rounded-3xl md:shadow-3xl md:border-4 ${
                          i % 2
                            ? "md:border-secondary-50 even"
                            : "md:border-primary-50 odd"
                        }`}
                      >
                        <div>{content.flipContent}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </StyledContent>
        </Fade>
      </div>
    </section>
  );
};

export default ValueProps;
