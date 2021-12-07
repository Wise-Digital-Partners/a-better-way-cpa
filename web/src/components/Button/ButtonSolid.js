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
  icon,
  text,
}) => {
  const Tag = href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href && (link = !href.includes("tel:") && !href.includes("mailto:"));

  return (
    <Tag
      className={`group relative overflow-hidden min-w-[180px] h-[54px] px-6 rounded-5xl inline-flex items-center justify-center text-center font-body font-black no-underline whitespace-nowrap before:w-0 hover:before:w-full before:h-full before:absolute before:left-0 before:transition-all before:duration-500 before:ease-linear ${
        altStyle === 2
          ? "bg-secondary-800 text-white hover:text-secondary-800 before:bg-white"
          : altStyle === 3
          ? "bg-white text-primary-500 hover:text-white before:bg-primary-500"
          : "bg-primary-500 text-white hover:text-white before:bg-[#DA7727]"
      } ${className || ""}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
    >
      {/* {icon && (
        <i
          className={`mr-2 relative left-0 group-hover:left-2 transition-all duration-300 ease-linear z-10 ${
            altStyle ? "text-white" : "text-white"
          } ${icon}`}
        ></i>
      )} */}
      <span className="z-10">{text}</span>
    </Tag>
  );
};

export default Button;
