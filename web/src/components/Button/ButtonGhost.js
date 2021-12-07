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
      className={`group relative overflow-hidden bg-transparent border-2 border-solid min-w-[180px] h-[52px] px-6 rounded-5xl inline-flex items-center justify-center text-center font-body font-black no-underline whitespace-nowrap before:w-0 hover:before:w-full before:h-full before:absolute before:left-0 before:transition-all before:duration-500 before:ease-linear
      ${
        altStyle === 2
          ? "border-secondary-800 text-secondary-800 bg-white/40 hover:text-white before:bg-secondary-800"
          : altStyle === 3
          ? "border-white text-white bg-secondary-900/50 hover:text-primary-500 before:bg-white"
          : "border-primary-500 text-primary-500 bg-secondary-900/50 hover:text-white before:bg-primary-500"
      } ${className || ""}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
    >
      <span className="z-10">{text}</span>
      {icon && (
        <i
          className={`ml-2 text-lg relative left-0 group-hover:left-2 transition-all duration-300 ease-linear z-10 ${
            altStyle ? "text-white" : "text-gray-900"
          } ${icon}`}
        ></i>
      )}
    </Tag>
  );
};

export default Button;
