import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";

const MainNav = ({
  headerStyle,
  headerHasBorder,
  headerDarkMode,
  headerLinkColor,
  scrolled,
}) => {
  // determine if offcanvas is open
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  // const [subMenuHovering1, setSubMenuHovering1] = useState(false);
  // const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
  // const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

  // const [subMenuHovering2, setSubMenuHovering2] = useState(false);
  // const isHoveringSubMenu2 = () => setSubMenuHovering2(true);
  // const notHoveringSubMenu2 = () => setSubMenuHovering2(false);

  // const [subMenuHovering3, setSubMenuHovering3] = useState(false);
  // const isHoveringSubMenu3 = () => setSubMenuHovering3(true);
  // const notHoveringSubMenu3 = () => setSubMenuHovering3(false);

  // handle click of navigation items
  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  // close offcanvas onclick outside
  const node = useRef();
  useOnClickOutside(node, () => setOffcanvasOpen(false));

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "Global/Nav/Logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 197, placeholder: NONE)
        }
      }
    }
  `);

  // Define logos based on header style
  let // initialLogo = null,
    //   stickyLogo = null,
    className = null;

  if (headerStyle === "overlap" || headerStyle === "overlap-hero") {
    // initialLogo = data.lightLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    className = "absolute";
  } else if (headerDarkMode) {
    // initialLogo = data.lightLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.lightLogo.childImageSharp.gatsbyImageData;
  } else {
    // initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }

  if (offcanvasOpen) {
    // initialLogo = data.darkLogo.childImageSharp.gatsbyImageData;
    // stickyLogo = data.darkLogo.childImageSharp.gatsbyImageData;
  }
  return (
    <nav
      id="main-navigation"
      className={`py-3.5 md:py-4 w-full bg-secondary-900 shadow-5xl transition duration-300 ease-linear z-50 ${
        headerStyle === "overlap" ? "lg:bg-transparent" : ""
      } ${headerHasBorder && ""} ${offcanvasOpen && "z-10 relative"} ${
        headerDarkMode && ""
      } ${
        scrolled && "!fixed !bg-secondary-900 top-0 left-0 w-full !shadow-3xl"
      } ${className}`}
      role="navigation"
      aria-label="main-navigation"
      offcanvas-open={offcanvasOpen}
    >
      <div className="container flex justify-between items-center relative z-10">
        {/* <div className="flex flex-auto lg:hidden">
          <a href="tel:844-433-5626">
            <i className="fas fa-phone-alt text-lg text-secondary-50"></i>
          </a>
        </div> */}

        <div className="flex flex-auto lg:flex-none">
          <AniLink fade to="/">
            <GatsbyImage
              image={data.logo.childImageSharp.gatsbyImageData}
              alt="Dark Horse CPAs Logo"
              className="w-[117px] lg:w-[197px]"
            />
          </AniLink>
        </div>

        <div className="flex items-center justify-end flex-auto">
          <ul
            id="navigation-desktop"
            className="hidden lg:flex lg:flex-row lg:space-x-6 lg:items-center lg:justify-end lg:mr-4"
          >
            <li>
              <AniLink
                fade
                to="/accelerator-program/"
                className={`relative font-bold no-underline ${
                  scrolled && "text-secondary-50 hover:text-primary-500"
                } ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-secondary-50 hover:text-primary-500"
                } ${headerDarkMode && "lg:!text-white"}`}
              >
                Accelerator Program
              </AniLink>
            </li>

            <li>
              <AniLink
                fade
                to="/sole-practitioner/"
                className={`relative font-bold no-underline ${
                  scrolled && "text-secondary-50 hover:text-primary-500"
                } ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-secondary-50 hover:text-primary-500"
                } ${headerDarkMode && "lg:!text-white"}`}
              >
                Sole Practitioner
              </AniLink>
            </li>

            <li>
              <AniLink
                fade
                to="/about/"
                className={`relative font-bold no-underline ${
                  scrolled && "text-secondary-50 hover:text-primary-500"
                } ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-secondary-50 hover:text-primary-500"
                } ${headerDarkMode && "lg:!text-white"}`}
              >
                The Company
              </AniLink>
            </li>

            <li>
              <AniLink
                fade
                to="/blog/"
                className={`relative font-bold no-underline ${
                  scrolled && "text-secondary-50 hover:text-primary-500"
                } ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-secondary-50 hover:text-primary-500"
                } ${headerDarkMode && "lg:!text-white"}`}
              >
                Resources
              </AniLink>
            </li>
          </ul>

          <div className="lg:hidden" ref={node}>
            {/* Burger */}
            <Burger
              offcanvasOpen={offcanvasOpen}
              setOffcanvasOpen={setOffcanvasOpen}
              headerStyle={headerStyle}
              scrolled={scrolled}
              aria-controls="offcanvas-navigation"
            />

            {/* Mobile Nav */}
            <OffCanvas offcanvasOpen={offcanvasOpen} id="offcanvas-navigation">
              <div>
                <ul
                  id="navigation-mobile"
                  className="mb-20 text-center space-y-8"
                >
                  <li>
                    <AniLink
                      fade
                      to="/buy-a-house/"
                      onKeyDown={clickHandler}
                      onClick={clickHandler}
                      className="font-heading text-3xl text-secondary-50 hover:text-primary-500 font-bold no-underline"
                    >
                      Purchase
                    </AniLink>
                  </li>

                  <li>
                    <AniLink
                      fade
                      to="/refinance-home-mortgage/"
                      onKeyDown={clickHandler}
                      onClick={clickHandler}
                      className="font-heading text-3xl text-secondary-50 hover:text-primary-500 font-bold no-underline"
                    >
                      Refinance
                    </AniLink>
                  </li>

                  <li>
                    <AniLink
                      fade
                      to="/compare-mortgage-loans/"
                      onKeyDown={clickHandler}
                      onClick={clickHandler}
                      className="font-heading text-3xl text-secondary-50 hover:text-primary-500 font-bold no-underline"
                    >
                      Compare Loans
                    </AniLink>
                  </li>
                  <li>
                    <AniLink
                      fade
                      to="/about/"
                      onKeyDown={clickHandler}
                      onClick={clickHandler}
                      className="font-heading text-3xl text-secondary-50 hover:text-primary-500 font-bold no-underline"
                    >
                      About
                    </AniLink>
                  </li>

                  <li>
                    <AniLink
                      fade
                      to="/reviews/"
                      onKeyDown={clickHandler}
                      onClick={clickHandler}
                      className="font-heading text-3xl text-secondary-50 hover:text-primary-500 font-bold no-underline"
                    >
                      Reviews
                    </AniLink>
                  </li>

                  <li>
                    <AniLink
                      fade
                      to="/blog/"
                      onKeyDown={clickHandler}
                      onClick={clickHandler}
                      className="font-heading text-3xl text-secondary-50 hover:text-primary-500 font-bold no-underline"
                    >
                      Blog
                    </AniLink>
                  </li>
                </ul>

                <div className="flex items-center justify-center space-x-6 mb-20">
                  <a
                    href="https://www.facebook.com/E-3-Mortgage-Corp-1155677131112451/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500"
                  >
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500"
                  >
                    <i className="fab fa-yelp text-2xl"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/e_3_mortgage/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500"
                  >
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                  <a
                    href="https://twitter.com/E_3_Mortgage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500"
                  >
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                </div>

                <div className="grid gap-y-4 max-w-sm mx-auto">
                  <ButtonSolid
                    href="/request-rates/"
                    text="Request Rates"
                    className="w-full"
                  />
                  <ButtonGhost
                    modal="modal-contact"
                    text="Contact Us"
                    className="w-full"
                  />
                </div>
              </div>
            </OffCanvas>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-end space-x-4">
          <ButtonGhost href="/apply/" text="Apply Now" className="min-w-0" />
          <ButtonSolid href="" text="Request Info" className="min-w-0" />
        </div>
      </div>
    </nav>
  );
};
export default MainNav;
