import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";

const MainNav = ({
  headerStyle,
  headerHasBorder,
  headerDarkMode,
  headerLinkColor,
  scrolled,
}) => {
  // determine if offcanvas is open
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const [subMenuHovering1, setSubMenuHovering1] = useState(false);
  const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
  const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

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
      logoMark: file(relativePath: { eq: "Global/Nav/logo-mark.svg" }) {
        publicURL
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
              className="w-[117px] lg:w-[147px] xl:w-[197px]"
            />
          </AniLink>
        </div>

        <div className="flex items-center justify-end lg:justify-center flex-auto">
          <ul
            id="navigation-desktop"
            className="hidden lg:flex lg:flex-row lg:space-x-4 xl:space-x-6 lg:items-center lg:justify-end lg:mx-4"
          >
            <li>
              <AniLink
                fade
                to="/accelerator-program/"
                className={`relative text-[15px] font-bold no-underline ${
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
                className={`relative text-[15px] font-bold no-underline ${
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

            <li
              role="presentation"
              className="relative"
              onMouseEnter={isHoveringSubMenu1}
              onMouseLeave={notHoveringSubMenu1}
            >
              <AniLink
                fade
                to="/about/"
                className={`relative text-[15px] font-bold no-underline pb-8 ${
                  subMenuHovering1 && "text-primary-500"
                } ${scrolled && "text-secondary-50 hover:text-primary-500"} ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-secondary-50 hover:text-primary-500"
                } ${headerDarkMode && "lg:!text-white"}`}
              >
                The Company
              </AniLink>

              <ul
                className={`absolute top-0 bg-secondary-900 shadow-7xl rounded-b-3xl flex flex-col space-y-5 w-auto transform -translate-x-8 pt-7 px-7 pb-14 z-10 transition-all duration-500 ease-in-out ${
                  subMenuHovering1
                    ? " visible translate-y-[54px] opacity-100"
                    : "invisible translate-y-18 opacity-0"
                }`}
              >
                <li className="whitespace-nowrap border-b border-gray-200">
                  <AniLink
                    fade
                    to="/about/"
                    className="relative block font-body text-secondary-50/60 hover:text-secondary-50 font-bold no-underline pb-3"
                  >
                    About Dark Horse
                  </AniLink>
                </li>

                <li className="whitespace-nowrap border-b border-gray-200">
                  <AniLink
                    fade
                    to="/our-cpas/"
                    className="relative block font-body text-secondary-50/60 hover:text-secondary-50 font-bold no-underline pb-3"
                  >
                    Our CPAs
                  </AniLink>
                </li>
              </ul>
            </li>

            <li>
              <AniLink
                fade
                to="/blog/"
                className={`relative text-[15px] font-bold no-underline ${
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
                      to="/accelerator-program/"
                      onKeyDown={clickHandler}
                      onClick={clickHandler}
                      className="text-secondary-50 hover:text-primary-500 font-bold no-underline"
                    >
                      Accelerator Program
                    </AniLink>
                  </li>

                  <li>
                    <AniLink
                      fade
                      to="/sole-practitioner/"
                      onKeyDown={clickHandler}
                      onClick={clickHandler}
                      className="text-secondary-50 hover:text-primary-500 font-bold no-underline"
                    >
                      Sole Practitioner
                    </AniLink>
                  </li>

                  <Accordion
                    allowZeroExpanded={true}
                    className="flex flex-col space-y-10"
                  >
                    <li>
                      <AccordionItem uuid={1}>
                        <AccordionItemButton className="flex items-center justify-center focus:outline-none">
                          <div className="text-secondary-50 hover:text-primary-500 font-bold no-underline transition-colors duration-300 ease-linear">
                            The Company
                          </div>
                        </AccordionItemButton>

                        <AccordionItemPanel className="pt-6 max-w-4xl">
                          <ul className="flex flex-col space-y-4">
                            <li>
                              <AniLink
                                fade
                                to="/about/"
                                onKeyDown={clickHandler}
                                onClick={clickHandler}
                                className="text-secondary-50 hover:text-primary-500 text-sm no-underline"
                              >
                                About Dark Horse
                              </AniLink>
                            </li>

                            <li>
                              <AniLink
                                fade
                                to="/our-cpas/"
                                onKeyDown={clickHandler}
                                onClick={clickHandler}
                                className="text-secondary-50 hover:text-primary-500 text-sm no-underline"
                              >
                                Our CPAs
                              </AniLink>
                            </li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </li>
                  </Accordion>

                  <li>
                    <AniLink
                      fade
                      to="/blog/"
                      onKeyDown={clickHandler}
                      onClick={clickHandler}
                      className="text-secondary-50 hover:text-primary-500 font-bold no-underline"
                    >
                      Resources
                    </AniLink>
                  </li>
                </ul>

                <img
                  src={data.logoMark.publicURL}
                  alt="Dark Horse logo mark"
                  className="mx-auto"
                />
              </div>
            </OffCanvas>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-end space-x-4">
          <ButtonGhost href="/apply/" text="Apply Now" className="min-w-0" />
          <ButtonSolid
            href="/request-info/"
            text="Request Info"
            className="min-w-0"
          />
        </div>
      </div>
    </nav>
  );
};
export default MainNav;
