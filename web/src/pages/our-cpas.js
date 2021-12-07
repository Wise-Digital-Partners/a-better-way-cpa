import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import GraphQLErrorList from "../components/Blog/graphql-error-list";
import { mapEdgesToNodes } from "../lib/helpers";
import CallToAction from "../components/Repeating/CTA";

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage-Reviews.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage-Reviews.jpg" }
    ) {
      publicURL
    }
    team: allSanityTeamMember(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          image {
            asset {
              gatsbyImageData
            }
          }
          name
          title
          location
        }
      }
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = (data || {}).team ? mapEdgesToNodes(data.team) : [];

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Our Dark Horse CPAs | A Better Way CPA"
        description="Discover and join the ranks of those who have found a better way to CPA. Become the newest member of the Dark Horse dream team."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-10 md:pt-12 pb-20 md:pb-32">
        <div className="container">
          <header className="mb-12 md:mb-26 max-w-[720px]">
            <h1>Our CPAs</h1>
            <p className="text-lg">
              Our Dark Horse dream team keeps on growing. Discover and join the
              ranks of those who have found a better way to CPA.
            </p>
          </header>
          {postNodes && postNodes.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 md:gap-x-7 gap-y-8 md:gap-y-10">
              {postNodes.map((node, i) => (
                <div key={i}>
                  {node.image && node.image.asset && (
                    <div className="mb-4">
                      <GatsbyImage
                        image={node.image.asset.gatsbyImageData}
                        className="rounded-xl z-0"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-body text-lg font-bold text-primary-50 mb-0">
                      {node.name}
                    </div>
                    <div className="font-body md:text-lg text-secondary-50 mb-0">
                      {node.title} {node.location && `| ${node.location}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export default ArchivePage;
