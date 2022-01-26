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
    this.state = {
      // otherServices: false,
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    if (name.includes("what-is-the-primary-service-your-firm-offers")) {
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

  // otherServicesToggle = () => {
  //   this.setState({ otherServices: !this.state.otherServices });
  //   document.getElementById("other-service").required =
  //     this.state.otherServices;
  // };

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
        () => (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "applyPrincipalFormSubmission",
        }),
        (document.getElementById(
          "apply-principal-form-ajax-response"
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
          id="apply-principal-form-ajax-response"
          className="text-center"
        ></div>
        <form
          name="Apply - Principal"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Apply - Principal" />
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
              htmlFor="how-many-staff-members-do-you-currently-have"
            >
              How many staff members do you currently have?
            </label>
            <select
              name="how-many-staff-members-do-you-currently-have"
              onBlur={this.handleChange}
              required={true}
              className="bg-blend-color-dodge"
            >
              <option value="">Select one...</option>
              <option value="Just Me">Just Me</option>
              <option value="1-3">1-3</option>
              <option value="4+">4+</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              className="font-body text-sm font-semibold text-white block mb-1.5"
              htmlFor="annual-revenue"
            >
              Annual Revenue
            </label>
            <select
              name="annual-revenue"
              onBlur={this.handleChange}
              required={true}
              className="bg-blend-color-dodge"
            >
              <option value="">Select one...</option>
              <option value="$0 - $50k">$0 - $50k</option>
              <option value="$51k - $149k">$51k - $149k</option>
              <option value="$150k - $399k">$150k - $399k</option>
              <option value="$400k+">$400k+</option>
            </select>
          </div>

          <div className="mb-6">
            <fieldset>
              <legend className="font-body text-sm font-semibold text-white block mb-1.5">
                What is the primary service your firm offers?
              </legend>
              <div className="grid grid-cols-1 gap-y-4 gap-x-6 mt-2">
                <label className="relative pl-7 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    name="what-is-the-primary-service-your-firm-offers"
                    value="Tax Related Services"
                    onChange={this.handleChange}
                  />
                  Tax Related Services
                  <span className="checkbox-custom"></span>
                </label>
                <label className="relative pl-7 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    name="what-is-the-primary-service-your-firm-offers"
                    onChange={this.handleChange}
                    value="Audit Services"
                  />
                  Audit Services
                  <span className="checkbox-custom"></span>
                </label>
                <label className="relative pl-7 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    name="what-is-the-primary-service-your-firm-offers"
                    value="Outsourced Accounting (bookkeeping, controller, CFO)"
                    onChange={this.handleChange}
                  />
                  Outsourced Accounting (bookkeeping, controller, CFO)
                  <span className="checkbox-custom"></span>
                </label>
                <label className="relative pl-7 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    name="what-is-the-primary-service-your-firm-offers"
                    onChange={this.handleChange}
                    // onClick={this.otherServicesToggle}
                    value="Other"
                  />
                  Other
                  <span className="checkbox-custom"></span>
                </label>
              </div>
            </fieldset>
          </div>

          {/* <div className="mb-6">
            <input
              type="text"
              name="other-service"
              onChange={this.handleChange}
              required={this.state.otherServices}
              id="other-service"
              className={`${this.state.otherServices ? "block" : "hidden"}`}
            />
          </div> */}

          <div className="mt-8">
            <ButtonSolid type="submit" text="Apply" />
          </div>
        </form>
      </StyledForm>
    );
  }
}
