import React from "react";
import { graphql } from "gatsby";
import BlogPost from "../components/Blog/BlogPost";
import GraphQLErrorList from "../components/Blog/graphql-error-list";
// import { toPlainText } from "../lib/helpers";
import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      featuredImage {
        asset {
          gatsbyImageData
        }
      }
      title
      slug {
        current
      }
      seoTitle
      metaDescription
      _rawBody(resolveReferences: { maxDepth: 5 })
      author {
        image {
          asset {
            gatsbyImageData
          }
        }
        name
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

const BlogPostTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  const site = data && data.site;
  return (
    <Layout>
      {errors && <SearchEngineOptimization title="GraphQL Error" />}
      {post && (
        <SearchEngineOptimization
          title={post.seoTitle}
          description={post.metaDescription}
          openGraphImage={post.featuredImage}
          twitterOpenGraphImage={post.featuredImage}
        />
      )}

      {errors && (
        <div className="container">
          <GraphQLErrorList errors={errors} />
        </div>
      )}

      {post && <BlogPost {...post} {...site} />}
    </Layout>
  );
};

export default BlogPostTemplate;
