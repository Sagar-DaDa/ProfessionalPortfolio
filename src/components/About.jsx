import React, { Component } from "react";
import ProgrammingSvg from "../imges/svgs/programmer.svg";
import Resume from "./Resume";

export default class About extends Component {
  render() {
    const aboutHeading = "About Me";
    const introText = "I'm Sagar Shrestha.";
    const aboutDesc1 =
      "Passionate about leveraging technology to drive innovation, I embark on my professional journey with a solid foundation in various IT domains. Throughout my academic endeavors, I have honed my skills in web development, programming, and problem-solving. My enthusiasm for staying abreast of the latest technological trends fuels my commitment to delivering solutions that meet the dynamic needs of the digital landscape.";
    const aboutDesc2 =
      "As I embark on this exciting chapter, I invite you to explore my portfolio, showcasing my projects and achievements.";

    const { theme } = this.props;

    return (
      <div
        id="about"
        className={`py-5 bg-blur-5`}
        style={{
          borderTop: theme.borderTopOnly.borderTop,
          backgroundImage: theme.backgroundTransparent.backgroundImage,
        }}
      >
        <div className="container">
          <div className="row rounded" id="aboutMe">
            <div className="col-md-7 pt-3">
              <span className="fw-bold">{aboutHeading.toUpperCase()}</span>
              <p
                className="fs-2 fw-bold m-0 my-2"
                style={theme.textColorStandard}
              >
                {introText}
              </p>
              <p className="font-size-18">{aboutDesc1}</p>
              <p className="font-size-18">{aboutDesc2}</p>
            </div>
            <div className="col-md-5 pt-3">
              <img src={ProgrammingSvg} alt="" className="w-100 h-100" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
