import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { differenceInDays, formatDistance, format } from "date-fns";
import PortableText from "./portableText";
import styled from "@emotion/styled";
import tw from "twin.macro";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";

import Newsletter from "../Form/Newsletter";
import About from "../Repeating/About";
import CallToAction from "../Repeating/CTA";

const StyledContent = styled.div`
  p,
  span,
  li {
    ${tw`md:text-xl`}
  }
  ul {
    ${tw`list-disc pl-7 mb-6 flex flex-col space-y-0.5`}
  }
`;

function BlogPost(props) {
  const {
    siteMetadata,
    slug,
    _rawBody,
    author,
    // categories,
    title,
    featuredImage,
    publishedAt,
  } = props;
  return (
    <>
      <article className="pt-8 md:pt-12">
        <div className="container">
          <div className="max-w-[800px] mx-auto mb-8 md:mb-10">
            <header className="md:mb-8">
              <h1>{title}</h1>
            </header>

            <div className="flex justify-between items-end">
              <div className="flex">
                {author.image && (
                  <div className="mr-3">
                    <GatsbyImage
                      image={author.image.asset.gatsbyImageData}
                      className="w-12 h-12 rounded-full z-0"
                    />
                  </div>
                )}

                <div>
                  <div className="text-secondary-50 font-body font-bold text-sm flex items-center space-x-1 mb-1">
                    <span>By</span>
                    {author && (
                      <div>
                        <ul>
                          <li>{author.name}</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {publishedAt && (
                    <div className="text-sm">
                      {differenceInDays(new Date(publishedAt), new Date()) > 3
                        ? formatDistance(new Date(publishedAt), new Date())
                        : format(new Date(publishedAt), "MMMM Mo, yyyy")}
                    </div>
                  )}
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-7">
                <FacebookShareButton
                  url={`${siteMetadata.siteUrl}/${slug.current}/`}
                  quote={title}
                >
                  <i className="fab fa-facebook-f text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
                </FacebookShareButton>

                <LinkedinShareButton
                  url={`${siteMetadata.siteUrl}/${slug.current}/`}
                  title={title}
                >
                  <i className="fab fa-linkedin-in text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
                </LinkedinShareButton>

                <TwitterShareButton
                  url={`${siteMetadata.siteUrl}/${slug.current}/`}
                  title={title}
                >
                  <i className="fab fa-twitter text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
                </TwitterShareButton>

                <EmailShareButton
                  url={`${siteMetadata.siteUrl}/${slug.current}/`}
                  subject={title}
                >
                  <i className="fas fa-envelope text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
                </EmailShareButton>
              </div>
            </div>

            {/* {props.categories && (
            <ul className="flex">
              {props.categories.map((category, i) => (
                <li
                  className="font-body text-gray-300 font-bold tracking-wide text-sm uppercase mb-2"
                  key={i}
                >
                  {i > 0 ? `, ${category.title}` : category.title}
                </li>
              ))}
            </ul>
          )} */}
          </div>

          {featuredImage && featuredImage.asset && (
            <div className="mb-12 md:mb-20">
              <GatsbyImage image={props.featuredImage.asset.gatsbyImageData} />
            </div>
          )}

          <StyledContent className="max-w-[800px] mx-auto mb-16 md:mb-20">
            {_rawBody && <PortableText blocks={_rawBody} />}
          </StyledContent>

          <div className="flex items-center justify-center space-x-7 mb-20 md:mb-30">
            <FacebookShareButton
              url={`${siteMetadata.siteUrl}/${slug.current}/`}
              quote={title}
            >
              <i className="fab fa-facebook-f text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
            </FacebookShareButton>

            <LinkedinShareButton
              url={`${siteMetadata.siteUrl}/${slug.current}/`}
              title={title}
            >
              <i className="fab fa-linkedin-in text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
            </LinkedinShareButton>

            <TwitterShareButton
              url={`${siteMetadata.siteUrl}/${slug.current}/`}
              title={title}
            >
              <i className="fab fa-twitter text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
            </TwitterShareButton>

            <EmailShareButton
              url={`${siteMetadata.siteUrl}/${slug.current}/`}
              subject={title}
            >
              <i className="fas fa-envelope text-primary-500 hover:text-gray-900 text-xl transition-colors duration-300 ease-linear"></i>
            </EmailShareButton>
          </div>
        </div>
      </article>

      <section className="pb-20 md:pb-30">
        <div className="container">
          <div className="border border-gray-300 px-6 py-12 md:py-16 text-center max-w-[600px] mx-auto">
            <p className="heading-two">Subscribe</p>
            <p>
              Whether a Dark Horse CPA or just a CPA, there’s a better way to
              work. Subscribe now to have career-elevating videos delivered to
              your inbox.
            </p>
            <Newsletter />
          </div>
        </div>
      </section>

      <About />
      <CallToAction />
    </>
  );
}

export default BlogPost;
