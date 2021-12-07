import BlogPostPreview from "./BlogPostPreview";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";

function BlogPostGrid(props) {
  return (
    <div className="grid md:grid-cols-3 gap-x-10 gap-y-14 md:gap-y-16">
      {props.title}
      {props.nodes &&
        props.nodes.map((node) => (
          <div key={node.id}>
            <BlogPostPreview {...node} isInList />
          </div>
        ))}
      {props.browseMoreHref && (
        <div>
          <AniLink fade to={props.browseMoreHref}>
            Browse more
          </AniLink>
        </div>
      )}
    </div>
  );
}

BlogPostGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostGrid;
