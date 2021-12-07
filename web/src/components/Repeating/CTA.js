import React from "react";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";

const CTA = ({ ctaHeading, headingLevel, ctaText, className }) => {
  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`bg-primary-500 py-14 md:py-16 ${className || ""}`}>
      <div className="container">
        <div className="relative flex flex-col md:flex-row items-end md:space-x-10 lg:space-x-20">
          <div className="md:max-w-[700px]">
            <HeadingTag className="text-mobile-7xl md:text-7xl">
              {ctaHeading || "Want a better way to CPA?"}
            </HeadingTag>
            <p className="text-secondary-800 text-xl mb-10 md:mb-0">
              {ctaText ||
                "Stop spinning on the carousel and go off to the races. Book a meeting with Dark Horse to discover what we can do for you."}
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
            <ButtonGhost
              href="/apply/"
              text="Apply Now"
              altStyle={2}
              className="w-full md:w-auto"
            />
            <ButtonSolid
              modal="modal-contact"
              text="Book a Meeting"
              altStyle={2}
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
