import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Fade from "react-reveal/Fade";

const ValueProps = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      founders: file(
        relativePath: { eq: "0.0 Repeated Modules/About/founders.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 560)
        }
      }
      ourCPAs: file(
        relativePath: { eq: "0.0 Repeated Modules/About/ourcpas.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 560)
        }
      }
    }
  `);

  return (
    <section className={`pb-20 md:pb-30 ${className}`}>
      <div className="container">
        <header className="mb-7 text-center">
          <h2>See what makes us tick.</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20">
          <AniLink fade to="/about/" className="group relative no-underline">
            <Fade bottom distance="120px" duration="2000" delay={500}>
              <div>
                <div className="overflow-hidden md:border-4 md:border-white md:rounded-3xl">
                  <GatsbyImage
                    image={data.founders.childImageSharp.gatsbyImageData}
                    className="mb-6 md:mb-0 rounded-3xl md:rounded-none z-0 w-full transform scale-100 md:group-hover:scale-105 filter blur-none transition-all duration-500 ease-linear"
                  />
                </div>
                <div className="md:absolute md:bottom-7 text-center inset-x-0">
                  <p className="heading-four mb-1.5">Our Founders</p>
                  <p className="mb-0 text-secondary-50 text-lg">
                    Max and Chase spill the beans.
                  </p>
                </div>
              </div>
            </Fade>
          </AniLink>

          <AniLink fade to="/our-cpas/" className="group relative no-underline">
            <Fade bottom distance="120px" duration="2000" delay={500}>
              <div>
                <div className="overflow-hidden md:border-4 md:border-white md:rounded-3xl">
                  <GatsbyImage
                    image={data.ourCPAs.childImageSharp.gatsbyImageData}
                    className="mb-6 md:mb-0 rounded-3xl md:rounded-none z-0 w-full transform scale-100 md:group-hover:scale-105 filter blur-none transition-all duration-500 ease-linear"
                  />
                </div>
                <div className="md:absolute md:bottom-7 text-center inset-x-0">
                  <p className="heading-four mb-1.5">Our CPAs</p>
                  <p className="mb-0 text-secondary-50 text-lg">
                    Our nationwide team is growing.
                  </p>
                </div>
              </div>
            </Fade>
          </AniLink>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
