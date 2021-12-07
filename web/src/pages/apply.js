import React from "react";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Apply from "../components/Form/Apply";

const Page = () => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Apply Now | A Better Way | Dark Horse CPA"
        description="There's a better way to CPA, and it starts by becoming a Dark Horse. Apply now to become a member of our dream team."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <section className="pt-10 pb-20 md:pb-30">
        <div className="container">
          <header className="text-center mb-8">
            <h1>Application Header</h1>
          </header>

          <div className="max-w-[560px] mx-auto">
            <Apply />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Page;
