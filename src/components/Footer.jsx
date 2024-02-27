import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const { theme } = this.props;
    const footerHeading = "SagarDaDa";
    const introText =
      "Navigating existence, acquiring wisdom, and immersing myself in the realm of coding";
    const facebookLink = "https://www.facebook.com/SaagaarDaDa";
    const linkedinLink = "https://www.linkedin.com/in/saagaardada";
    const instagramLink = "https://https://www.instagram.com/saagaardada";
    const whatsappLink = "https://wa.me/+9779842333154";
    return (
      <div
        id="footer"
        className="text-center p-5"
        style={{
          ...theme.backgroundStandard,
          ...theme.borderTopOnly,
          ...theme.borderBottomOnly,
          ...theme.textColorLight,
        }}
      >
        <p className="fs-2 fw-bold m-0">{footerHeading.toUpperCase()}</p>
        <p className="font-size-18 m-0">{introText}</p>
        <div className="my-2 d-flex gap-2 align-items-center justify-content-center justify-content-center">
          <a
            className="text-decoration-none"
            href={facebookLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={`social-btn-circle fa-brands fa-facebook-f square-30 d-flex justify-content-center align-items-center`}
              style={{...theme.textColorStandard, ...theme.borderAll}}
            ></i>
          </a>
          <a
            className="text-decoration-none"
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={`social-btn-circle fa-brands fa-instagram square-30 d-flex justify-content-center align-items-center`}
              style={{...theme.textColorStandard, ...theme.borderAll}}
            ></i>
          </a>
          <a
            className="text-decoration-none"
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={`social-btn-circle fa-brands fa-linkedin-in square-30 d-flex justify-content-center align-items-center`}
              style={{...theme.textColorStandard, ...theme.borderAll}}
            ></i>
          </a>
          <a
            className="text-decoration-none"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={`social-btn-circle fa-brands fa-whatsapp square-30 d-flex justify-content-center align-items-center`}
              style={{...theme.textColorStandard, ...theme.borderAll}}
            ></i>
          </a>
        </div>
        <p className="m-0">created by me &#169; 2024</p>
      </div>
    );
  }
}
