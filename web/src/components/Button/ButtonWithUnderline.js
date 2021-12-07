import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Button = ({
  className,
  href,
  outboundLink,
  modal,
  onClick,
  type,
  altStyle,
  text,
}) => {
  const Tag = href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href && (link = !href.includes("tel:") && !href.includes("mailto:"));

  return (
    <Tag
      className={`group relative inline-flex font-body text-primary-500 hover:text-primary-500 font-bold no-underline ${className}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
    >
      <div className="relative">
        {text}
        <span className="absolute h-0.5 w-8 group-hover:w-full -bottom-1 left-0 bg-primary-500 transition-all duration-500 ease-in-out"></span>
      </div>
    </Tag>
  );
};

export default Button;
