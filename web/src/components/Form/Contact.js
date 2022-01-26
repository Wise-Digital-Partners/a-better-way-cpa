import React, { Component } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const StyledForm = styled.div`
  [type="email"],
  [type="number"],
  [type="tel"],
  [type="text"],
  [type="file"],
  select,
  textarea {
    ${tw`text-lg w-full px-4 py-2.5 border border-solid border-primary-50 bg-[#5B6E7D] rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-secondary-400 transition-colors duration-300 ease-linear`}
  }
  select {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
    background-position: right 1rem center;
    background-size: 2rem;
  }
`;

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(
        () =>
          (document.getElementById("contact-form-ajax-response").innerHTML =
            "Thank you for contacting us! We will get in touch with you shortly."),
        form.remove(),
        (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "contactFormSubmission",
        })
      )
      .catch((error) => alert(error));
  };

  render() {
    return (
      <StyledForm>
        <div id="contact-form-ajax-response"></div>
        <form
          name="Contact"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Contact" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 w-full">
            <div className="mb-6">
              <label
                className="font-body text-sm font-semibold text-white block mb-1.5"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                onChange={this.handleChange}
                required={true}
              />
            </div>

            <div className="mb-6">
              <label
                className="font-body text-sm font-semibold text-white block mb-1.5"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                onChange={this.handleChange}
                required={true}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 w-full">
            <div className="mb-6">
              <label
                className="font-body text-sm font-semibold text-white block mb-1.5"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                onChange={this.handleChange}
                required={true}
              />
            </div>
            <div className="mb-6">
              <label
                className="font-body text-sm font-semibold text-white block mb-1.5"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                required={true}
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="font-body text-sm font-semibold text-white block mb-1.5"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="textarea"
              name="message"
              onChange={this.handleChange}
              rows="4"
              required={true}
            />
          </div>

          <ButtonSolid type="submit" text="Submit" />
        </form>
      </StyledForm>
    );
  }
}
