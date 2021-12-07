import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Button = ({
  className,
  href,
  outboundLink,
  onClick,
  type,
  altStyle,
  text,
}) => {
  const Tag = href.includes("#") ? AnchorLink : href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href &&
    (link =
      !href.includes("tel:") &&
      !href.includes("mailto:") &&
      !href.includes("#"));

  return (
    <Tag
      className={`group no-underline font-body font-medium inline-flex items-center justify-center space-x-2 ${
        altStyle
          ? `text-white`
          : `text-primary-500 hover:text-primary-500 group-hover:text-primary-500`
      } ${className}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      offset="100"
      target={target}
      rel={rel}
      onClick={onClick}
      type={type}
    >
      <div>{text}</div>
      <svg
        width="32"
        height="12"
        viewBox="0 0 32 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative left-0 group-hover:left-2 transition-all duration-300 ease-linear"
      >
        <path
          d="M32 6L22 0.226497V11.7735L32 6ZM0 7H23V5H0V7Z"
          fill="#91BD14"
        />
      </svg>
    </Tag>
  );
};

export default Button;
