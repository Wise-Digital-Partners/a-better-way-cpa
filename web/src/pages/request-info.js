import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Accelerator from "../components/Form/Accelerator";
import Principal from "../components/Form/Principal";

const Page = ({ data }) => {
  const [setChoices, setChoicesState] = useState("block");
  const [setAccelerator, setAcceleratorState] = useState("hidden");
  const [setPrincipal, setPrincipalState] = useState("hidden");

  function showAccelerator() {
    setAcceleratorState("block");
    setChoicesState("hidden");
  }

  function showPrincipal() {
    setPrincipalState("block");
    setChoicesState("hidden");
  }

  function goBack() {
    setPrincipalState("hidden");
    setAcceleratorState("hidden");
    setChoicesState("block");
  }

  return (
    <Layout>
      <SearchEngineOptimization
        title="Apply Now | A Better Way | Dark Horse CPA"
        description="There's a better way to CPA, and it starts by becoming a Dark Horse. Apply now to become a member of our dream team."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <section className="pt-14 md:pt-18 pb-20 md:pb-30">
        <div className="container">
          <div className={`${setChoices}`}>
            <header className="text-center mb-12 max-w-[720px] mx-auto">
              <h1>A Better Way Isn’t Far Away.</h1>
              <p>
                Want more information on Dark Horse opportunities? Select one of
                the below options and we’ll send you some helpful materials,
                pronto!
              </p>
            </header>

            <div className="max-w-[720px] mx-auto grid md:grid-cols-2 gap-x-10 gap-y-8">
              <button
                onClick={showAccelerator}
                onKeyDown={showAccelerator}
                className="bg-secondary-400 rounded-xl border-4 border-white pt-6 px-6 pb-10 md:px-10 text-center no-underline hover:shadow-7xl"
              >
                <img
                  src={data.rocket.publicURL}
                  alt="Accelerator"
                  className="mx-auto mb-2.5"
                />
                <div className="heading-three text-white mb-4">Accelerator</div>
                <p className="text-sm text-white mb-0">
                  Choose me if you’re looking to grow a book of business from
                  scratch (or near-scratch)
                </p>
              </button>

              <button
                onClick={showPrincipal}
                onKeyDown={showPrincipal}
                className="bg-secondary-400 rounded-xl border-4 border-white pt-6 px-6 pb-10 md:px-10 text-center no-underline hover:shadow-7xl"
              >
                <img
                  src={data.logo.publicURL}
                  alt="Principal"
                  className="mx-auto mb-2.5"
                />
                <div className="heading-three text-white mb-4">Principal</div>
                <p className="text-sm text-white mb-0">
                  Choose me if you’re a solo practitioner or micro-firm looking
                  to elevate and scale.
                </p>
              </button>
            </div>
          </div>

          <div className={`max-w-[560px] mx-auto ${setAccelerator}`}>
            <button
              className="group text-white group-hover:text-white flex items-center space-x-2 no-underline mb-3"
              type="button"
              onClick={goBack}
              onKeyDown={goBack}
            >
              <i className="far fa-arrow-left"></i>
              <span className="font-bold">back</span>
            </button>
            <header className="text-center mb-8 max-w-[720px] mx-auto">
              <p className="heading-three">Accelerator</p>
            </header>
            <Accelerator />
          </div>

          <div className={`max-w-[560px] mx-auto ${setPrincipal}`}>
            <button
              className="group text-white group-hover:text-white flex items-center space-x-2 no-underline mb-3"
              type="button"
              onClick={goBack}
              onKeyDown={goBack}
            >
              <i className="far fa-arrow-left"></i>
              <span className="font-bold">back</span>
            </button>
            <header className="text-center mb-8 max-w-[720px] mx-auto">
              <p className="heading-three">Principal</p>
            </header>
            <Principal />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    rocket: file(relativePath: { eq: "request info/rocket.svg" }) {
      publicURL
    }
    logo: file(relativePath: { eq: "request info/logo.svg" }) {
      publicURL
    }
  }
`;

export default Page;
