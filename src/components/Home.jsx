import React, { Component } from "react";
import Card from "./Card";
import HelloAnimation from "./HelloAnimation";
import HireMeModal from "./HireMeModal";
import { Link } from "react-scroll";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      showHireMeModal: false,
    };
  }
  render() {
    const { theme } = this.props;
    const introText =
      "I'm a full-stack web developer based on planet earth. I code for both frontend and backend, and I love it.";
    const facebookLink = "https://www.facebook.com/SaagaarDaDa";
    const linkedinLink = "https://www.linkedin.com/in/saagaardada";
    const instagramLink = "https://https://www.instagram.com/saagaardada";
    const whatsappLink = "https://wa.me/+9779842333154";
    const cardInfo = {
      image: "/images/me.jpg",
      title: "Sagar Shrestha",
      desc: "Full-Stack Developer",
    };

    return (
      <div id="home" className="container w-100 h-100 p-4 mb-4">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 p-0 d-flex justify-content-center p-2">
            <Card cardInfo={cardInfo} theme={theme} />
          </div>
          <div className="col-md-6 text-center pb-2 text-md-start">
            <HelloAnimation />
            <p className="fs-4 mb-4">{introText}</p>
            <div className="d-flex gap-2 align-items-center justify-content-center justify-content-md-start mb-4">
              <span className="font-size-12 fw-bold">CONNECT WITH ME:</span>
              <a
                className="text-decoration-none"
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={`cool-gradient-btn fa-brands fa-facebook-f square-30 rounded d-flex justify-content-center align-items-center`}
                ></i>
              </a>
              <a
                className="text-decoration-none"
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={`cool-gradient-btn fa-brands fa-instagram square-30 rounded d-flex justify-content-center align-items-center`}
                ></i>
              </a>
              <a
                className="text-decoration-none"
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={`cool-gradient-btn fa-brands fa-linkedin-in square-30 rounded d-flex justify-content-center align-items-center`}
                ></i>
              </a>
              <a
                className="text-decoration-none"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={`cool-gradient-btn fa-brands fa-whatsapp square-30 rounded d-flex justify-content-center align-items-center`}
                ></i>
              </a>
            </div>
            <div className="mt-3 d-flex gap-2 justify-content-center justify-content-md-start">
              <div className="">
                <Link
                  to="contactSection"
                  smooth={true}
                  duration={300}
                  className={`btn r-green-gradient-btn font-size-15 fw-bold `}
                >
                  SEND MESSAGE
                </Link>
              </div>
              <div className="">
                <button
                  onClick={() => {
                    this.setState({ showHireMeModal: true });
                    document.body.classList.add("modal-open");
                  }}
                  className={`btn fw-bold cool-gradient-btn`}
                >
                  HIRE ME NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        {this.state.showHireMeModal && (
          <HireMeModal
            theme={theme}
            onCloseModal={() => {
              this.setState({ showHireMeModal: false });
              document.body.classList.remove("modal-open");
            }}
          />
        )}
      </div>
    );
  }
}
