import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";

import Contact from "../Form/Contact";

const StyledModal = styled.div`
  .modal {
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmslideIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmslideOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
`;

const Modal = () => {
  if (typeof window !== "undefined") {
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
    <StyledModal>
      <div
        className="modal relative hidden z-50"
        id="modal-contact"
        aria-hidden="false"
      >
        <div
          className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black/40 outline-none"
          tabIndex="-1"
          data-modal-close
        >
          <div
            className="content-wrapper bg-white w-full h-screen overflow-auto max-w-[720px] ml-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="group flex justify-between items-center pt-12 pb-4 md:py-4 px-6 border-b border-gray-400/20">
              <div className="flex space-x-6 md:space-x-8">
                <a
                  href="tel:844-433-5626"
                  className="font-body font-bold text-primary-500 hover:text-primary-500 no-underline"
                >
                  <i className="fas fa-phone-alt mr-2"></i>
                  <span>(844) 4E3-LOANS (5626)</span>
                </a>
              </div>

              <i
                className="close fal fa-times text-xl text-black hover:text-primary-500 cursor-pointer transition-all duration-300 ease-linear"
                data-modal-close
              ></i>
            </div>

            <div className="pt-8 px-6 md:px-18 pb-24">
              <header className="mb-8">
                <p className="heading-three mb-3">How To Reach Us</p>
                <p>
                  Have questions about loan programs? Need help getting started?
                  Let’s connect!
                </p>
              </header>

              <Contact />
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default Modal;
