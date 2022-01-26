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
    ${tw`w-full px-4 py-2.5 border border-solid border-primary-50 bg-[#5B6E7D] rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-secondary-400 transition-colors duration-300 ease-linear`}
  }
`;

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    const name = e.target.name;
    if (name.includes("areas-of-expertise")) {
      this.setState((state) => {
        let array = state[name] || [];
        array =
          e.target.checked === true
            ? [...array, e.target.value]
            : array.filter((element) => element !== e.target.value);
        return {
          ...state,
          [name]: array,
        };
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleAttachment = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(this.state);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(
        () => (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "applyAcceleratorFormSubmission",
        }),
        (document.getElementById(
          "apply-accelerator-form-ajax-response"
        ).innerHTML =
          "Thank you for applying! We will get in touch with you shortly."),
        form.remove()
      )
      .catch((error) => alert(error));
  };

  render() {
    return (
      <StyledForm>
        <div
          id="apply-accelerator-form-ajax-response"
          className="text-center"
        ></div>
        <form
          name="Apply - Accelerator"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Apply - Accelerator" />
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
                htmlFor="linkedin-profile"
              >
                Linkedin Profile
              </label>
              <input
                type="text"
                name="linkedin-profile"
                onChange={this.handleChange}
                required={false}
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
                required={false}
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="font-body text-sm font-semibold text-white block mb-1.5"
              htmlFor="how-many-years-have-you-been-working-in-public-accounting"
            >
              How many years have you been working in public accounting?
            </label>
            <select
              name="how-many-years-have-you-been-working-in-public-accounting"
              onBlur={this.handleChange}
              required={true}
              className="bg-blend-color-dodge"
            >
              <option value="">Select one...</option>
              <option value="< 5">{"< "}5</option>
              <option value="6-10">6-10</option>
              <option value="> 10">{"> "}10 </option>
            </select>
          </div>

          <div className="mb-6">
            <label
              className="font-body text-sm font-semibold text-white block mb-1.5"
              htmlFor="when-are-you-looking-to-make-a-change"
            >
              When are you looking to make a change?
            </label>
            <select
              name="when-are-you-looking-to-make-a-change"
              onBlur={this.handleChange}
              required={true}
              className="bg-blend-color-dodge"
            >
              <option value="">Select one...</option>
              <option value="ASAP">ASAP</option>
              <option value="I’m flexible">I’m flexible</option>
              <option value="As soon as things slow down after tax season…..">
                As soon as things slow down after tax season…..
              </option>
            </select>
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
              Attach Resume
            </label>
            <input
              className="w-full px-4 py-2.5 text-white border border-solid border-primary-50 bg-[#5B6E7D] rounded-sm m-0 focus:outline-none"
              type="file"
              name="resume"
              onChange={this.handleAttachment}
              required={true}
            />
          </div>

          <div className="mt-8">
            <ButtonSolid type="submit" text="Apply" />
          </div>
        </form>
      </StyledForm>
    );
  }
}
