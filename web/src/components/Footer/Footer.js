import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import nestLogo from "../../images/Global/Footer/Nest Logo.svg";

const Footer = ({ hideFooter }) => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "Global/Footer/Logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 238)
        }
      }
    }
  `);

  return (
    <footer
      className={`bg-secondary-900 pt-20 lg:pt-20 pb-6 ${
        hideFooter && "hidden"
      }`}
    >
      <div className="container">
        <div className="grid lg:grid-cols-12 lg:justify-between space-y-10 lg:space-y-0 lg:space-x-8 mb-14 lg:mb-20">
          <div className="lg:col-start-1 lg:col-span-3">
            <AniLink fade to="#">
              <GatsbyImage
                image={data.logo.childImageSharp.gatsbyImageData}
                alt="Dark Horse CPAs Logo"
                className="mb-12 mx-auto lg:mx-0"
              />
            </AniLink>

            <div className="flex items-center space-x-6">
              <a
                href="https://www.instagram.com/darkhorsecpa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-500"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://www.facebook.com/DarkHorseCPA/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-500"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/darkhorsecpa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-500"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>

          <div className="lg:col-end-13 lg:col-span-9">
            <div className="grid md:grid-cols-2 lg:flex lg:justify-end lg:gap-x-12 xl:gap-x-24 gap-y-12 lg:gap-y-0">
              <div>
                <div className="font-display text-lg font-bold text-white mb-5">
                  Get Started
                </div>
                <ul className="flex flex-col space-y-3">
                  <li>
                    <AniLink
                      fade
                      to="/accelerator-program/"
                      className="font-display text-primary-50/90 hover:text-white no-underline whitespace-nowrap"
                    >
                      Accelerator Program
                    </AniLink>
                  </li>
                  <li>
                    <AniLink
                      fade
                      to="/sole-practitioner/"
                      className="font-display text-primary-50/90 hover:text-white no-underline whitespace-nowrap"
                    >
                      Sole Practitioners
                    </AniLink>
                  </li>
                  <li>
                    <AniLink
                      fade
                      to="/blog/"
                      className="font-display text-primary-50/90 hover:text-white no-underline whitespace-nowrap"
                    >
                      Resources
                    </AniLink>
                  </li>
                </ul>
              </div>

              <div>
                <div className="font-display text-lg font-bold text-white mb-5">
                  The Company
                </div>
                <ul className="flex flex-col space-y-3">
                  <li>
                    <AniLink
                      fade
                      to="/about/"
                      className="font-display text-primary-50/90 hover:text-white no-underline whitespace-nowrap"
                    >
                      About Dark Horse
                    </AniLink>
                  </li>
                  <li>
                    <AniLink
                      fade
                      to="/our-cpas/"
                      className="font-display text-primary-50/90 hover:text-white no-underline whitespace-nowrap"
                    >
                      Our CPAs
                    </AniLink>
                  </li>
                  <li>
                    <AniLink
                      fade
                      to="#"
                      className="font-display text-primary-50/90 hover:text-white no-underline whitespace-nowrap"
                    >
                      Success Stories
                    </AniLink>
                  </li>
                </ul>
              </div>

              <div>
                <div className="font-display text-lg font-bold text-white mb-5">
                  Get in Touch
                </div>

                <ul className="flex flex-col space-y-3">
                  <li>
                    <a
                      href="https://meetings.hubspot.com/justin-kurn"
                      target="_blank"
                      rel="noreferrer"
                      className="font-display text-primary-50/90 hover:text-white no-underline whitespace-nowrap"
                    >
                      Book a Meeting
                    </a>
                  </li>
                  <li>
                    <AniLink
                      fade
                      to="/request-info/"
                      className="font-display text-primary-50/90 hover:text-white no-underline whitespace-nowrap"
                    >
                      Request More Info
                    </AniLink>
                  </li>
                  <li>
                    <a
                      href="/apply/"
                      className="font-display text-primary-50/90 hover:text-white no-underline whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </li>
                  <li>
                    <button
                      data-modal-open="modal-contact"
                      className="font-display text-primary-50/90 hover:text-white no-underline whitespace-nowrap"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-items-center md:justify-between md:items-center text-center md:text-left">
          <div className="md:flex md:items-center">
            <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 justify-center md:justify-start">
              <li className="text-sm text-primary-50/70">
                © {getYear()} Dark Horse CPAs
              </li>

              <li className="text-sm flex items-center mb-3 md:mb-0">
                <AniLink
                  fade
                  to="#"
                  className="text-primary-50/70 hover:text-white no-underline"
                >
                  Privacy Policy
                </AniLink>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm w-full md:w-auto mt-3.5 md:mt-0">
              <a
                className="group text-primary-50/90 hover:text-white no-underline flex items-center justify-center md:justify-start space-x-1"
                href="https://www.wisedigitalpartners.com/nest-by-wise/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Powered by</span>{" "}
                <img
                  src={nestLogo}
                  alt="NEST logo"
                  className="opacity-70 group-hover:opacity-100 transition-all duration-300 ease-linear"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
