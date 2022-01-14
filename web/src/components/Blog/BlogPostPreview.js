import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { getBlogUrl } from "../../lib/helpers";
// import PortableText from "./portableText";
// import { format } from "date-fns";

function BlogPostPreview(props) {
  return (
    <AniLink fade to={getBlogUrl(props.slug.current)} className="no-underline">
      <div className="group">
        {props.featuredImage && props.featuredImage.asset && (
          <div className="overflow-hidden mb-6">
            <GatsbyImage
              image={props.featuredImage.asset.gatsbyImageData}
              // className="w-full transform scale-100 md:group-hover:scale-105 filter blur-none transition-all duration-500 ease-linear"
            />
          </div>
        )}
        <div>
          {props.categories && (
            <ul className="flex">
              {props.categories.map((category, i) => (
                <li
                  className="font-body text-gray-300 font-bold tracking-wide text-sm uppercase mb-2"
                  key={i}
                >
                  {i > 0 ? `, ${category.title}` : category.title}
                </li>
              ))}
            </ul>
          )}
          <p className="font-body text-xl font-bold text-secondary-50 mb-0">
            {props.title}
          </p>
          {/* {props._rawExcerpt && (
          <div>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )} */}
          {/* <div>{format(new Date(props.publishedAt), "MMMM d, yyyy")}</div> */}
        </div>
      </div>
    </AniLink>
  );
}

export default BlogPostPreview;
