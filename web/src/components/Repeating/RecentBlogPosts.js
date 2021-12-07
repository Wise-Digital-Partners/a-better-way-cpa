import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import GraphQLErrorList from "../Blog/graphql-error-list";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  includeFeaturedPosts,
  excludeFeaturedPosts,
  mapEdgesToNodes,
  toPlainText,
  getBlogUrl,
} from "../../lib/helpers";

const RecentBlogPosts = ({ props, className }) => {
  const truncate = (str) => {
    return str.length > 120 ? str.substring(0, 120) + "..." : str;
  };

  const data = useStaticQuery(graphql`
    {
      posts: allSanityPost(
        sort: { fields: [publishedAt], order: DESC }
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            featured
            publishedAt
            featuredImage {
              asset {
                gatsbyImageData
              }
            }
            categories {
              _id
              title
            }
            _rawBody(resolveReferences: { maxDepth: 5 })
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const errors = props;

  if (errors) {
    return <GraphQLErrorList errors={errors} />;
  }

  const featuredPostNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
        .filter(includeFeaturedPosts)
    : [];

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
        .filter(excludeFeaturedPosts)
    : [];

  return (
    <section className={` ${className || "pb-20 md:pb-30"}`}>
      <div className="container">
        <header className="mb-10 md:mb-12">
          <h2>The Better Way Blog.</h2>
        </header>

        {featuredPostNodes && featuredPostNodes.length > 0 && (
          <div className="grid md:grid-cols-2 md:gap-x-8 gap-y-6">
            <div>
              {featuredPostNodes.slice(0, 1).map((node) => (
                <div key={node.id}>
                  <AniLink
                    fade
                    to={getBlogUrl(node.slug.current)}
                    className="group no-underline hover:text-primary-50"
                  >
                    {node.featuredImage && node.featuredImage.asset && (
                      <div className="overflow-hidden rounded-3xl relative">
                        <GatsbyImage
                          image={node.featuredImage.asset.gatsbyImageData}
                          className="w-full min-h-[454px] md:min-h-[544px] rounded-3xl z-0 transform scale-100 md:group-hover:scale-105 filter blur-none transition-all duration-500 ease-linear"
                        />

                        <div className="absolute bottom-4 px-6 md:px-10 lg:px-14">
                          <div className="border border-secondary-400 text-sm font-semibold text-gray-300 uppercase rounded inline-flex justify-center items-center px-2.5 py-2 mb-4">
                            Featured
                          </div>
                          <p className="font-body text-lg font-bold text-primary-50 mb-4">
                            {node.title}
                          </p>
                          {node._rawBody && (
                            <p className="text-lg">
                              {truncate(toPlainText(node._rawBody))}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </AniLink>
                </div>
              ))}
            </div>

            <div className="grid gap-y-16 md:gap-y-8">
              {postNodes.slice(0, 3).map((node) => (
                <div key={node.id}>
                  <AniLink
                    fade
                    to={getBlogUrl(node.slug.current)}
                    className="no-underline"
                  >
                    <div className="group grid md:grid-cols-12 md:gap-x-5 items-center">
                      <div className="md:col-start-1 md:col-span-4">
                        {node.featuredImage && node.featuredImage.asset && (
                          <div className="overflow-hidden rounded-2xl mb-6 md:mb-0">
                            <GatsbyImage
                              image={node.featuredImage.asset.gatsbyImageData}
                              className="w-full min-h-[298px] md:min-h-[160px] rounded-2xl z-0 transform scale-100 md:group-hover:scale-105 filter blur-none transition-all duration-500 ease-linear"
                            />
                          </div>
                        )}
                      </div>
                      <div className="md:col-end-13 md:col-span-8">
                        {node.categories && (
                          <>
                            {node.categories.slice(0, 1).map((category, i) => (
                              <div
                                className="border border-secondary-400 text-sm font-semibold text-gray-300 uppercase rounded inline-flex justify-center items-center px-2.5 py-2 mb-4"
                                key={i}
                              >
                                {category.title}
                              </div>
                            ))}
                          </>
                        )}
                        <p className="font-body text-lg font-bold text-primary-50 mb-0">
                          {node.title}
                        </p>
                      </div>
                    </div>
                  </AniLink>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentBlogPosts;
