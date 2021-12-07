import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";

const ReviewCards = ({ gridLayout }) => {
  const StyledReviewCards = styled.div`
    .masonry-item {
      @media (min-width: 768px) {
        width: calc(50% - 1.5rem);
      }
      @media (min-width: 1024px) {
        width: calc(50% - 2.5rem);
      }
    }
  `;
  const data = useStaticQuery(graphql`
    {
      google: file(relativePath: { eq: "6.0 Reviews/Google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 85)
        }
      }
      yelp: file(relativePath: { eq: "6.0 Reviews/Yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 74)
        }
      }
      facebook: file(relativePath: { eq: "6.0 Reviews/Facebook.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 123)
        }
      }
      headshot: file(relativePath: { eq: "6.0 Reviews/avatar.svg" }) {
        publicURL
      }
    }
  `);

  let gridItemClass = null;

  if (gridLayout === "masonry") {
    gridItemClass = "masonry-item";
  } else {
    gridItemClass = "grid-item";
  }

  const reviews = [
    {
      name: "User Name",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis mentum facilisis fringilla.",
    },
    {
      name: "User Name",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio",
    },
    {
      name: "User Name",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio",
    },
    {
      name: "User Name",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
    },
    {
      name: "User Name",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
    },
    {
      name: "User Name",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare",
    },
  ];

  return (
    <StyledReviewCards>
      {reviews.map((review, i) => {
        return (
          <div
            className={`w-full bg-white border border-gray-200 rounded-lg mb-8 md:mb-10 p-6 md:py-8 md:px-7 md:mx-3 lg:mx-5 ${gridItemClass}`}
            key={i}
          >
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                {/* <img
                  className="rounded-full"
                  src={review.headshot || data.headshot.publicURL}
                  alt="User Headshot"
                  width="40"
                /> */}
                <div className="">
                  <span className="text-gray-900 font-heading font-semibold">
                    {review.name}
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <GatsbyImage
                  image={review.platform}
                  alt="Social platform logo"
                />
              </div>
            </div>
            <blockquote>
              <q className="block mb-6 md:mb-0 before:hidden">{review.quote}</q>
            </blockquote>
            <div className="block md:hidden">
              <GatsbyImage image={review.platform} alt="Social platform logo" />
            </div>
          </div>
        );
      })}
    </StyledReviewCards>
  );
};

export default ReviewCards;
