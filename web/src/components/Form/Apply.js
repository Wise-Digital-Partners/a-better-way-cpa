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
  [multiple],
  [type="date"],
  [type="datetime-local"],
  [type="email"],
  [type="month"],
  [type="number"],
  [type="password"],
  [type="search"],
  [type="tel"],
  [type="text"],
  [type="time"],
  [type="url"],
  [type="week"],
  select,
  textarea {
    ${tw`text-lg w-full px-4 py-2.5 border border-solid border-primary-50 bg-[#5B6E7D] rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-secondary-400 transition-colors duration-300 ease-linear`}
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

  handleAttachment = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
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
          (document.getElementById("apply-form-ajax-response").innerHTML =
            "Thank you for applying! We will get in touch with you shortly."),
        form.remove(),
        (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "applyFormSubmission",
        })
      )
      .catch((error) => alert(error));
  };

  render() {
    return (
      <StyledForm>
        <div id="apply-form-ajax-response"></div>
        <form
          name="Apply"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Apply" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 w-full">
            <div className="mb-6">
              <label
                className="font-body text-sm font-semibold text-white block mb-1.5"
                htmlFor="linkedin-profile-link"
              >
                Linkedin Profile Link
              </label>
              <input
                type="text"
                name="linkedin-profile-link"
                onChange={this.handleChange}
                required={true}
              />
            </div>
            <div className="mb-6">
              <label
                className="font-body text-sm font-semibold text-white block mb-1.5"
                htmlFor="cpa-license-number"
              >
                CPA License Number
              </label>
              <input
                type="text"
                name="cpa-license-number"
                onChange={this.handleChange}
                required={true}
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="font-body text-sm font-semibold text-white block mb-1.5"
              htmlFor="number-of-years-working-in-public-accounting"
            >
              Number of Years Working in Public Accounting
            </label>
            <input
              type="number"
              min="0"
              name="number-of-years-working-in-public-accounting"
              onChange={this.handleChange}
              required={true}
            />
          </div>

          <div className="mb-6">
            <fieldset>
              <legend className="font-body text-sm font-semibold text-white block mb-1.5">
                Areas of Expertise
              </legend>
              <div className="grid md:grid-cols-2 gap-y-4 gap-x-6 mt-2">
                <label className="relative pl-7 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    name="areas-of-expertise"
                    value="Tax Preparation Individual"
                    onChange={this.handleChange}
                  />
                  Tax Preparation Individual
                  <span className="checkbox-custom"></span>
                </label>
                <label className="relative pl-7 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    name="areas-of-expertise"
                    onChange={this.handleChange}
                    value="Tax Preparation Businesses"
                  />
                  Tax Preparation Businesses
                  <span className="checkbox-custom"></span>
                </label>
                <label className="relative pl-7 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    name="areas-of-expertise"
                    value="Tax Planning"
                    onChange={this.handleChange}
                  />
                  Tax Planning
                  <span className="checkbox-custom"></span>
                </label>
                <label className="relative pl-7 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    name="areas-of-expertise"
                    onChange={this.handleChange}
                    value="Bookkeeping"
                  />
                  Bookkeeping
                  <span className="checkbox-custom"></span>
                </label>
                <label className="relative pl-7 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    name="areas-of-expertise"
                    value="Fractional CFO / Accounting Services"
                    onChange={this.handleChange}
                  />
                  Fractional CFO / Accounting Services
                  <span className="checkbox-custom"></span>
                </label>
                <label className="relative pl-7 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    name="areas-of-expertise"
                    onChange={this.handleChange}
                    value="Financial Reporting"
                  />
                  Financial Reporting
                  <span className="checkbox-custom"></span>
                </label>
                <label className="relative pl-7 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    name="areas-of-expertise"
                    value="Estate/Trusts"
                    onChange={this.handleChange}
                  />
                  Estate/Trusts
                  <span className="checkbox-custom"></span>
                </label>
              </div>
            </fieldset>
          </div>

          <div className="mb-8">
            <label
              className="font-body text-sm font-semibold text-white block mb-1.5"
              htmlFor="resume"
            >
              Upload Resume
            </label>
            <input
              type="file"
              name="resume"
              onChange={this.handleAttachment}
              required={false}
            />
          </div>

          <ButtonSolid type="submit" text="Apply" />
        </form>
      </StyledForm>
    );
  }
}
