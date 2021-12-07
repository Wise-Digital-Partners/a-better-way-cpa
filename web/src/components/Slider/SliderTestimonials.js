import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-list {
    /* ${tw`overflow-visible`} */
  }
  .slick-track {
    ${tw`grid md:grid-cols-3 gap-y-8 md:gap-x-5 lg:gap-x-10 items-center before:hidden`}
  }
  .slick-dots {
    ${tw`relative md:absolute md:bottom-[-82px]! flex! justify-center items-center space-x-2.5`}
    li {
      ${tw`relative h-2 w-2 bg-primary-500/60 md:bg-white/40 rounded-full mr-0 transition-all duration-300 ease-linear before:content before:h-4 before:w-4 before:border before:border-transparent before:rounded-full before:absolute before:-left-1 before:-top-1`}
      &.slick-active {
        ${tw`bg-primary-500 md:bg-white before:border-primary-500 md:before:border-white`}
      }
    }
  }
`;
const Slider = ({ slides }) => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // infinite: false,
    fade: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  // Previous Arrow
  // function PrevArrow(props) {
  //   const { onClick } = props;
  //   return (
  //     <button
  //       onClick={onClick}
  //       className="slick-prev"
  //       aria-label="Previous Slide"
  //     >
  //       <svg
  //         width="24"
  //         height="64"
  //         viewBox="0 0 24 64"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M-1.57361e-06 32L24 0.823089L24 63.1769L-1.57361e-06 32Z"
  //           fill="#91BD14"
  //         />
  //       </svg>
  //     </button>
  //   );
  // }

  // Next Arrow
  // function NextArrow(props) {
  //   const { onClick } = props;
  //   return (
  //     <button onClick={onClick} className="slick-next" aria-label="Next Slide">
  //       <svg
  //         width="24"
  //         height="64"
  //         viewBox="0 0 24 64"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M24 32L2.9364e-06 0.823089L2.10824e-07 63.1769L24 32Z"
  //           fill="#91BD14"
  //         />
  //       </svg>
  //     </button>
  //   );
  // }

  return (
    <StyledSlider>
      <Slick {...sliderSettings}>
        {slides.map((testimonial, i) => {
          return (
            <div
              key={i}
              className="bg-white border-2 border-black px-5 py-6 text-center h-full relative"
            >
              {/* <img
              src={data.quote.publicURL}
              alt="Quote"
              className="mx-auto mb-2.5"
            /> */}
              <blockquote>
                <footer className="mb-6">
                  <cite className="not-italic">
                    <div className="text-gray-900 font-bold mb-1">
                      {testimonial.name}
                    </div>
                  </cite>
                </footer>
                <q className="before:hidden block text-sm mb-6">
                  {testimonial.quote}
                </q>
                <GatsbyImage image={testimonial.platform} className="mx-auto" />
              </blockquote>
            </div>
          );
        })}
      </Slick>
    </StyledSlider>
  );
};

export default Slider;
