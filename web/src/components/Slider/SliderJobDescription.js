import React, { useRef, useEffect } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";
import MicroModal from "micromodal";

import ButtonSolid from "../Button/ButtonSolid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-slide {
    &.slick-active {
      ${tw`z-10`}
    }
  }
  .slick-list,
  .slick-slider {
    ${tw`md:overflow-visible`}
  }
`;
const Slider = ({ slideIndex, slides }) => {
  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    fade: true,
    speed: 750,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // Previous Arrow
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="slick-prev"
        aria-label="Previous Slide"
      >
        <i className="far fa-chevron-left"></i>
      </button>
    );
  }

  // Next Arrow
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="slick-next" aria-label="Next Slide">
        <i className="far fa-chevron-right"></i>
      </button>
    );
  }

  const closeClickHandler = () => {
    MicroModal.close("modal-job-description");
  };

  return (
    <StyledSlider>
      <Slick {...sliderSettings} ref={slider} className="h-full">
        {slides.map((content, i) => {
          return (
            <div key={i}>
              <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8 pl-4 md:pl-12 pr-10 md:pr-14">
                <p className="font-heading text-primary-500 text-2xl md:text-3xl font-bold mb-0">
                  {content.position}
                </p>
                <button onClick={closeClickHandler} className="hidden md:block">
                  <ButtonSolid modal="modal-apply" text="Apply Today" />
                </button>
              </div>
              <div className="px-6 md:px-12">
                <button onClick={closeClickHandler} className="md:hidden mb-5">
                  <ButtonSolid modal="modal-apply" text="Apply Today" />
                </button>

                <div className="mb-8">{content.description}</div>
                <button onClick={closeClickHandler}>
                  <ButtonSolid modal="modal-apply" text="Apply Today" />
                </button>
              </div>
            </div>
          );
        })}
      </Slick>
    </StyledSlider>
  );
};

export default Slider;
