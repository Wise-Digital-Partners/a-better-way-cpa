import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Newsletter from "../Form/Newsletter";

const ValueProps = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      subscribe: file(
        relativePath: { eq: "0.0 Repeated Modules/Subscribe/subscribe.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 560)
        }
      }
    }
  `);

  return (
    <section className={`pb-0 md:pb-30 ${className}`}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-y-14 md:gap-x-10 lg:gap-x-20 items-center">
          <div>
            <h2>Subscribe here.</h2>
            <p className="mb-10">
              Whether a Dark Horse CPA or just a CPA, there’s a better way to
              work. Learn more in the form of free weekly videos covering topics
              that nobody is talking about but everybody is curious about.
              Subscribe now to have these career-elevating videos delivered to
              your inbox.
            </p>

            <Newsletter />
          </div>
          <div className="relative -mx-4 md:mx-0">
            <GatsbyImage
              image={data.subscribe.childImageSharp.gatsbyImageData}
              className="md:rounded-3xl z-0 w-full"
            />
            {/* <button className="absolute flex justify-center items-center inset-0 w-full">
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
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
