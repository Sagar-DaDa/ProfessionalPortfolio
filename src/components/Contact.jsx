import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    const { theme } = this.props;
    const contactHeading = "My Contact";
    const introText = "Connect with me with confidence.";
    return (
      <div id="contact" className="container py-5">
        <div className="py-3">
          <p className="m-0 fw-bold">{contactHeading.toUpperCase()}</p>
          <p className="m-0 my-2 fw-bold fs-2" style={theme.textColorStandard}>
            {introText}
          </p>
          <div className="p-1">
            <div
              className="row rounded bg-blur-5"
              style={{
                  ...theme.borderAll,
                ...theme.backgroundTransparent,
                ...theme.textColorLight,
                ...theme.boxShadowAll,
              }}
            >
              <div className="font-size-18 col-md-5 d-flex justify-content-center align-items-center py-3">
                <div className="">
                  <div
                    className="text-center fs-1 fw-bold mb-3"
                    style={theme.textColorStandard}
                  >
                    <span>SAGAR SHRESTHA</span>
                  </div>
                  <div
                    className="d-flex rounded p-3 mt-1"
                    style={{
                      ...theme.boxShadowAll,
                      ...theme.backgroundStandard,
                    }}
                  >
                    <div className="text-center px-2" style={{ width: "15%" }}>
                      <span className="fa-solid fa-phone"></span>
                    </div>
                    <div className="" style={{ width: "85%" }}>
                      <span className="fw-bold">Phone:</span>
                      <p className="m-0 my-1">+977-9842333154</p>
                      <p className="m-0 my-1">+977-9820729391</p>
                    </div>
                  </div>
                  <div
                    className="d-flex rounded p-3 mt-1"
                    style={{
                      ...theme.boxShadowAll,
                      ...theme.backgroundStandard,
                    }}
                  >
                    <div className="text-center px-2" style={{ width: "15%" }}>
                      <span className="fa-solid fa-envelope"></span>
                    </div>
                    <div className="" style={{ width: "85%" }}>
                      <span className="fw-bold">E-mail:</span>
                      <p className="m-0 my-1">sagar.stha.brt@gmail.com</p>
                      <p className="m-0 my-1">saagaar.dada@gmail.com</p>
                    </div>
                  </div>
                  <div
                    className="d-flex rounded p-3 mt-1"
                    style={{
                      ...theme.boxShadowAll,
                      ...theme.backgroundStandard,
                    }}
                  >
                    <div className="text-center px-2" style={{ width: "15%" }}>
                      <span className="fa-solid fa-location-dot"></span>
                    </div>
                    <div className="" style={{ width: "85%" }}>
                      <span className="fw-bold">Address:</span>
                      <p className="m-0 my-1" id="city">
                        Biratnagar,
                      </p>
                      <p className="m-0 my-1" id="province">
                        Koshi Province,
                      </p>
                      <p className="m-0 my-1" id="country">
                        Nepal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="font-size-18 col-md-7 p-0 d-flex justify-content-center"
                style={{ ...theme.boxShadowAll, ...theme.backgroundStandard }}
              >
                <form className="p-5 w-95">
                  <p className="fs-4 fw-bold">
                    Feel free to contact me, I'll get back to you as soon as
                    possible.
                  </p>
                  <div className="mb-3">
                    <label for="inputName" className="form-label">
                      Name *
                    </label>
                    <input
                      type="text"
                      className="form-control bg-secondary bg-opacity-50"
                      style={theme.textColorLight}
                      id="inputName"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label for="inputEmail" className="form-label">
                      Email address *
                    </label>
                    <input
                      type="email"
                      className="form-control bg-secondary bg-opacity-50"
                      style={theme.textColorLight}
                      id="inputEmail"
                      aria-describedby="emailHelp"
                    />
                    <span className="font-size-15 p-0">
                      We'll never share your email with anyone else.
                    </span>
                  </div>
                  <div className="mb-3">
                    <label for="inputMessage" className="form-label">
                      Message *
                    </label>
                    <textarea
                      className="form-control bg-secondary bg-opacity-50"
                      style={theme.textColorLight}
                      id="inputMessage"
                      rows="3"
                    ></textarea>
                  </div>
                  <center>
                    <button
                      type="submit"
                      className="btn btn-light px-5 mx-auto"
                      style={{ ...theme.textColorStandard }}
                    >
                      Send Message
                    </button>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
