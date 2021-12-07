import React, { Component } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  /* .slick-list {
    ${tw`overflow-visible p-0!`}
  } */
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`bg-white border-2 border-black px-5 py-6 text-center relative`}
    height: inherit !important;
  }
  .slick-dots {
    ${tw`relative flex! justify-center items-center space-x-2.5 mt-8`}
    li {
      ${tw`h-2.5 w-2.5 border border-primary-500 rounded-full mr-0 transition-all duration-300 ease-linear`}
      &.slick-active {
        ${tw`bg-primary-500`}
      }
    }
  }
`;
export default class Slider extends Component {
  componentDidMount() {
    var self = this;
    setTimeout(function () {
      self.forceUpdate();
    }, 100);
  }

  render() {
    const { children } = this.props;

    // Previous Arrow
    // function PrevArrow(props) {
    //   const { onClick } = props;
    //   return (
    //     <button
    //       onClick={onClick}
    //       className="slick-prev"
    //       aria-label="Previous Slide"
    //     >
    //       <i className="far fa-chevron-left"></i>
    //     </button>
    //   );
    // }

    // Next Arrow
    // function NextArrow(props) {
    //   const { onClick } = props;
    //   return (
    //     <button
    //       onClick={onClick}
    //       className="slick-next"
    //       aria-label="Next Slide"
    //     >
    //       <i className="far fa-chevron-right"></i>
    //     </button>
    //   );
    // }

    const sliderSettings = {
      responsive: [
        {
          breakpoint: 10000,
          settings: "unslick",
        },
        {
          breakpoint: 1023,
          settings: {
            dots: true,
            arrows: false,
            infinite: false,
            speed: 750,
            autoplay: true,
            autoplaySpeed: 7500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            // prevArrow: <PrevArrow />,
            // nextArrow: <NextArrow />,
          },
        },
      ],
    };

    return (
      <StyledSlider>
        <Slick
          {...sliderSettings}
          className="grid md:grid-cols-3 gap-y-8 md:gap-x-5 lg:gap-x-10"
        >
          {children}
        </Slick>
      </StyledSlider>
    );
  }
}
