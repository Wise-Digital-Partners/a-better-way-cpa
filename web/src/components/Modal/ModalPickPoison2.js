import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";

const StyledModal = styled.div`
  .modal {
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmpopUp 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmpopOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
`;

const Modal = () => {
  if (typeof window !== `undefined`) {
    MicroModal.init({
      openTrigger: "data-modal-open",
      closeTrigger: "data-modal-close",
      disableFocus: true,
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
    });
  }

  return (
    <div>
      <StyledModal>
        <div
          className="modal relative hidden z-50"
          id="modal-pick-poison-2"
          aria-hidden="false"
        >
          <div
            className="overlay fixed flex justify-center items-center h-full top-0 right-0 left-0 bottom-0 bg-secondary-800/60 outline-none"
            tabIndex="-1"
            data-modal-close
          >
            <div className="content-wrapper" role="dialog" aria-modal="true">
              <div className="max-w-[783px] mx-auto bg-primary-50/90 rounded-3xl shadow-7xl text-secondary-800 text-xl text-center py-10 px-6 md:px-8">
                Going out on your own has a lot of moving parts.
                <br /> We are always happy to share our experiences to help you
                along the way, but we did build Dark Horse to alleviate a lot of
                the hurdles/pitfalls!
              </div>
              <i
                className="fal fa-times absolute -top-8 -right-6 text-primary-50 hover:text-primary-500 text-4xl cursor-pointer transition-colors duration-300 ease-linear"
                data-modal-close
              ></i>
            </div>
          </div>
        </div>
      </StyledModal>
    </div>
  );
};

export default Modal;
