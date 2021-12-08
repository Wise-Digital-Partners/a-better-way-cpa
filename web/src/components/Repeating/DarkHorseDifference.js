import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const DHDifference = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      flexibility: file(
        relativePath: {
          eq: "0.0 Repeated Modules/DHDifference/Flexibility.png"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 457)
        }
      }
      marketing: file(
        relativePath: { eq: "0.0 Repeated Modules/DHDifference/Marketing.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 457)
        }
      }
      money: file(
        relativePath: { eq: "0.0 Repeated Modules/DHDifference/Money.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 457)
        }
      }
      other: file(
        relativePath: { eq: "0.0 Repeated Modules/DHDifference/Other.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 457)
        }
      }
      support: file(
        relativePath: { eq: "0.0 Repeated Modules/DHDifference/Support.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 457)
        }
      }
      tech: file(
        relativePath: { eq: "0.0 Repeated Modules/DHDifference/Tech.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 457)
        }
      }
    }
  `);

  const content = [
    {
      tabTitle: "Support",
      heading: "Support On All Sides",
      description: (
        <>
          <p className="text-lg mb-1.5 text-secondary-50">
            <b>Hands-off compliance</b>
          </p>
          <p className="text-lg">
            You’ll be covered by the Peer Reviews we do at a firm-level, and you
            won’t have to worry about administering your own corporation,
            payroll, professional liability insurance, etc.
          </p>

          <p className="text-lg mb-1.5 text-secondary-50">
            <b>On-demand fractional and full-time staffing</b>
          </p>
          <p className="text-lg">
            We have both domestic and overseas staff that can handle everything
            from administrative work to accounting and tax work. You can hire
            your own support as well.
          </p>

          <p className="text-lg mb-1.5 text-secondary-50">
            <b>A supportive peer group that will help you GROW!</b>
          </p>
          <p className="text-lg">
            Dark Horse CPAs stick together. We help each other grow in all areas
            of accounting and tax and emerging issues (think COVID-relief
            legislation, changing tax guidance, etc.)
          </p>
        </>
      ),
      icon: data.support.childImageSharp.gatsbyImageData,
    },
    {
      tabTitle: "Flexibility",
      heading: "Freedom & Flexibility",
      description: (
        <>
          <p className="text-lg mb-1.5 text-secondary-50">
            <b>Work autonomously</b>
          </p>
          <p className="text-lg">
            As a Dark Horse Principal, you’ll continue to be able to work where,
            when and how you want with your clients. As long as you and your
            clients are happy, so are we.
          </p>

          <p className="text-lg mb-1.5 text-secondary-50">
            <b>Enjoy the benefits of remote work</b>
          </p>
          <p className="text-lg">
            Our Accelerators work remotely, and service their clients by
            connecting with them via Zoom or on the phone. We find this is more
            efficient in two ways:
          </p>
          <ol className="list-decimal pl-6 text-lg mb-6 space-y-1.5">
            <li>
              We get access to an increased talent pool of CPAs all over the
              USA.
            </li>
            <li>
              It provides BETTER service to our clients. That’s because
              availability is more frequent and time isn’t wasted reserving
              conference rooms or traveling to meetings.
            </li>
          </ol>
        </>
      ),
      icon: data.flexibility.childImageSharp.gatsbyImageData,
    },
    {
      tabTitle: "Marketing",
      heading: "Marketing & Branding",
      description: (
        <>
          <p className="text-lg mb-1.5 text-secondary-50">
            <b>Digital exposure</b>
          </p>
          <p className="text-lg">
            We provide opportunities for exposure on our blog, vlog (This Week
            This Morning), and podcast (Taxes Made Simple). You’ll have your own
            page on our best-in-class website. You’ll have access to our social
            media content that you can blast out on Instagram/Facebook to help
            build your personal brand. And you’ll have plenty of Dark Horse swag
            for friends, family, and clients.
          </p>

          <p className="text-lg mb-1.5 text-secondary-50">
            <b>Leads GALORE</b>
          </p>
          <p className="text-lg">
            Dark Horse boasts excellent brand recognition, digital content, SEO,
            and Google AdWords optimization. With these elements in place,
            you’ll be able to attract as many new leads as you can handle in the
            verticals most important to you.
          </p>
        </>
      ),
      icon: data.marketing.childImageSharp.gatsbyImageData,
    },
    {
      tabTitle: "Tech",
      heading: "Optimal Tech",
      description: (
        <>
          <p className="text-lg mb-1.5 text-secondary-50">
            <b>An evolving technology stack</b>
          </p>
          <p className="text-lg">
            We’ve built a technology stack that will allow you to work at peak
            efficiency that is constantly evolving so that you don’t have to
            spend time searching for and testing out solutions.
          </p>

          <p className="text-lg mb-1.5 text-secondary-50">
            <b>Tech stack details</b>
          </p>
          <p className="text-lg">
            At Dark Horse, we enjoy creating and sharing technology solutions
            that keep firm Principals ahead of the curve. These include a great
            website, a price calculator, and a bot that helps automate client
            communications.
          </p>

          <p className="text-lg mb-1.5 text-secondary-50">
            <b>Digital exposure</b>
          </p>
          <p className="text-lg">
            We provide opportunities for exposure on our blog, vlog (This Week
            This Morning), and podcast (Taxes Made Simple). You’ll also have
            access to our social media content that you can blast out on
            Instagram/Facebook to help build your personal brand.
          </p>
        </>
      ),
      icon: data.tech.childImageSharp.gatsbyImageData,
    },
    {
      tabTitle: "Money",
      heading: "Financial Incentives",
      description: (
        <>
          <p className="text-lg mb-1.5 text-secondary-50">
            <b>Unique revenue streams</b>
          </p>
          <p className="text-lg">
            You can earn ongoing revenue streams by referring clients to another
            Dark Horse CPA or by referring an outside CPA to become a Dark Horse
            CPA. You will also participate in revenue sharing from your clients
            using preferred payroll providers, R&D credit firms, and wealth
            management firms.
          </p>

          <p className="text-lg mb-1.5 text-secondary-50">
            <b>Obtain ownership in a fast-growing firm</b>
          </p>
          <p className="text-lg">
            You’ll get an initial stock option grant and will earn additional
            options annually based on the profitability of your book of business
          </p>

          <p className="text-lg mb-1.5 text-secondary-50">
            <b>Take a draw while growing your book of business</b>
          </p>
          <p className="text-lg">
            If you need to steady out your income outside of tax season, we
            offer the ability to take a draw against future compensation.
          </p>
        </>
      ),
      icon: data.money.childImageSharp.gatsbyImageData,
    },
    {
      tabTitle: "Other",
      heading: "More Benefits",
      description: (
        <>
          <p className="text-lg mb-1.5 text-secondary-50">
            <b>Stellar training and onboarding</b>
          </p>
          <p className="text-lg">
            ​​When Accelerators start, they go through 2 weeks of structured
            training to get up to speed on our Customer Engagement Process,
            Systems, Operational Standards and our Tech Stack. This is done
            through our Learning Management System, combined with 1-on-1
            coaching from our COO and VP of Principal Development.
          </p>

          <p className="text-lg mb-1.5 text-secondary-50">
            <b>401K matching and health benefits</b>
          </p>
          <p className="text-lg">
            We match 100% of the first 3% and 50% of the next 2% of your comp
            and pay up to $500/mo toward your health insurance or Universal
            Benefit Account.
          </p>

          <p className="text-lg mb-1.5 text-secondary-50">
            <b>Eventually, sell your book of business</b>
          </p>
          <p className="text-lg">
            When it’s time to sell, you’ll be paid out at 1.25X your Annual
            Recurring Revenue.
          </p>
        </>
      ),
      icon: data.other.childImageSharp.gatsbyImageData,
    },
  ];

  const [tabIndex, setTabIndex] = useState(0);
  const [setActive, setActiveState] = useState(false);
  const [setActiveText, setActiveTextState] = useState("");

  const clickHandler = (index) => {
    setActiveState(!setActive);

    return index === 0
      ? setActiveTextState("Support")
      : index === 1
      ? setActiveTextState("Flexibility")
      : index === 2
      ? setActiveTextState("Marketing")
      : index === 3
      ? setActiveTextState("Tech")
      : index === 4
      ? setActiveTextState("Money")
      : index === 5
      ? setActiveTextState("Other")
      : null;
  };

  const HeadingTag = headingLevel || "h2";

  const StyledTabs = styled.div`
    .react-tabs__tab-list {
      ${tw`bg-secondary-900 md:bg-transparent rounded-b-3xl md:rounded-none absolute md:relative top-14 md:top-0 left-0 w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 md:mb-16 px-8 pb-4 md:p-0 border-none md:after:w-full z-10 md:after:h-px md:after:bg-gray-200 md:after:absolute md:after:bottom-0 md:after:left-0`}
      ${setActive ? tw`flex` : tw`hidden md:flex`}
    }
    .react-tabs__tab {
      ${tw`text-primary-50/40 font-bold border-none pt-0 px-0 pb-0 md:pb-5 transition-colors duration-300 ease-linear md:after:w-0 md:after:h-2 md:after:bg-primary-500 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:transition-all md:after:duration-300 md:after:ease-linear`}
    }
    .react-tabs__tab--selected {
      ${tw`hidden md:block text-primary-500 md:after:w-full bg-transparent`}
    }
  `;

  return (
    <section className={`pb-20 md:pb-30 ${className}`}>
      <div className="container">
        <header className="mb-10 md:mb-12">
          <HeadingTag>The Dark Horse difference.</HeadingTag>
        </header>

        <StyledTabs>
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => {
              setTabIndex(index);
              clickHandler(index);
            }}
          >
            <div className="relative">
              <button
                onClick={clickHandler}
                onKeyDown={clickHandler}
                className={`flex justify-between md:hidden bg-secondary-900 px-8 py-4 text-primary-50 hover:text-primary-50 font-bold no-underline w-full text-left ${
                  setActive ? "rounded-t-3xl" : "rounded-3xl"
                }`}
              >
                {setActiveText || "Support"}{" "}
                <i
                  className={`far fa-chevron-down text-xl transform ${
                    setActive ? "rotate-180" : "rotate-0"
                  }`}
                ></i>
              </button>

              <div className={`${setActive}`}>
                <TabList>
                  {content.map((content, i) => {
                    return <Tab key={i}>{content.tabTitle}</Tab>;
                  })}
                </TabList>
              </div>
            </div>

            {content.map((content, i) => {
              return (
                <TabPanel key={i}>
                  <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20">
                    <div className="order-2 md:order-1 md:col-start-1 md:col-span-7">
                      <p className="heading-three">{content.heading}</p>
                      {content.description}
                    </div>
                    <div className="order-1 md:order-2 md:col-end-13 md:col-span-5">
                      <GatsbyImage image={content.icon} alt={content.heading} />
                    </div>
                  </div>
                </TabPanel>
              );
            })}
          </Tabs>
        </StyledTabs>
      </div>
    </section>
  );
};

export default DHDifference;
