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
  iconLeft,
  iconRight,
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
          ? "border-secondary-800 text-secondary-800 hover:text-white before:bg-secondary-800"
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
      {iconLeft && (
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1.5 z-10"
        >
          <path
            d="M3 9L17 9"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`stroke-current transition-colors duration-300 ease-linear ${
              altStyle === 2
                ? ""
                : altStyle === 3
                ? "text-white group-hover:primary-500 transition-colors duration-300 ease-linear"
                : "text-primary-500 group-hover:text-white"
            }`}
          />
          <path
            d="M9.5 16.5L2 9L9.5 1.5L9.5 16.5Z"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`fill-current stroke-current transition-colors duration-300 ease-linear ${
              altStyle === 2
                ? ""
                : altStyle === 3
                ? ""
                : "text-primary-500 group-hover:text-white"
            }`}
          />
        </svg>
      )}

      <span className="z-10">{text}</span>

      {iconRight && (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1.5 z-10"
        >
          <path
            d="M16 9.5L2 9.5"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`stroke-current transition-colors duration-300 ease-linear ${
              altStyle === 2
                ? ""
                : altStyle === 3
                ? ""
                : "text-primary-500 group-hover:text-white"
            }`}
          />
          <path
            d="M9.5 2L17 9.5L9.5 17V2Z"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`fill-current stroke-current transition-colors duration-300 ease-linear ${
              altStyle === 2
                ? ""
                : altStyle === 3
                ? ""
                : "text-primary-500 group-hover:text-white"
            }`}
          />
        </svg>
      )}
    </Tag>
  );
};

export default Button;
