import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Fade from "react-reveal/Fade";

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
      heading: "Support On All Sides",
      text: "From on-demand fractional and full-time staffing to our big-brained CPA community, get all the help you need.",
    },
    {
      icon: data.icon2.publicURL,
      heading: "Freedom & Flexibility",
      text: "Work where, when, and how you want with your clients. It’s independent, remote work on your terms",
    },
    {
      icon: data.icon3.publicURL,
      heading: "Marketing & Branding",
      text: "Opportunities for exposure abound on our blog, vlog, podcast, and social media outlets. Leverage our brand for yours.",
    },
    {
      icon: data.icon4.publicURL,
      heading: "Optimal Tech Stack",
      text: "Our ever-evolving tech stack allows you to work at peak efficiency. No more time wasted, save time for what matters most.",
    },
    {
      icon: data.icon5.publicURL,
      heading: "Financial Incentives",
      text: "Enjoy ongoing revenue streams, revenue sharing opportunities, an initial stock option grant, and leads galore.",
    },
    {
      icon: data.icon6.publicURL,
      heading: "Other Benefits Abound",
      text: "We have only scratched the surface. And when it’s time to sell, get paid out at 1.25X your Annual Recurring Revenue.",
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-10">
            {content.map((content, i) => {
              return (
                <div
                  key={i}
                  className={`shadow-3xl rounded-3xl px-5 py-6 border-4 ${
                    i % 2
                      ? "border-secondary-400 bg-secondary-50"
                      : "border-primary-500 bg-primary-50"
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
                        i % 2 ? "text-secondary-800" : "text-secondary-400"
                      }`}
                    >
                      {content.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default ValueProps;
