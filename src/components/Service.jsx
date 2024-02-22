import React, { Component } from "react";

export default class Service extends Component {
  render() {
    const specialityDetails = {
      detailsOne: {
        symbolicIcon: "fa-solid fa-code",
        heading: "Frontend Development",
        desc: "I have a passion for building things from the ground up and find joy in translating ideas into reality on the web through coding.",
        additionalDescOne: {
          heading: "Languages I use",
          desc: "HTML, CSS, JavaScript",
        },
        additionalDescTwo: {
          heading: "Dev Tools",
          desc: "React JS, Bootstrap, Github, VSCode, Font Awesome",
        },
      },
      detailsTwo: {
        symbolicIcon: "fa-solid fa-layer-group",
        heading: "Backend Development",
        desc: "I have a fervor for constructing robust systems, finding satisfaction in turning abstract concepts into tangible backend solutions through coding.",
        additionalDescOne: { heading: "Languages I use", desc: "Java, MySQL" },
        additionalDescTwo: {
          heading: "Languages I use",
          desc: "Spring Boot, Spring Tools, Maven, Github, IntelliJ",
        },
      },
      // detailsThree: {
      //   symbolicIcon: "fa-solid fa-layer-group",
      //   heading: "Backend Development",
      //   desc: "I have a fervor for constructing robust systems, finding satisfaction in turning abstract concepts into tangible backend solutions through coding.",
      //   additionalDescOne: { heading: "Languages I use", desc: "Java, MySQL" },
      //   additionalDescTwo: {
      //     heading: "Languages I use",
      //     desc: "Spring Boot, Spring Tools, Maven, Github, IntelliJ",
      //   },
      // },
      // detailsFour: {
      //   symbolicIcon: "",
      //   heading: "Backend Development",
      //   desc: "I have a fervor for constructing robust systems, finding satisfaction in turning abstract concepts into tangible backend solutions through coding.",
      //   additionalDescOne: { heading: "Languages I use", desc: "Java, MySQL" },
      //   additionalDescTwo: {
      //     heading: "Languages I use",
      //     desc: "Spring Boot, Spring Tools, Maven, Github IntelliJ",
      //   },
      // },
      // detailsFive: {
      //   symbolicIcon: "",
      //   heading: "Backend Development",
      //   desc: "I have a fervor for constructing robust systems, finding satisfaction in turning abstract concepts into tangible backend solutions through coding.",
      //   additionalDescOne: { heading: "Languages I use", desc: "Java, MySQL" },
      //   additionalDescTwo: {
      //     heading: "Languages I use",
      //     desc: "Spring Boot, Spring Tools, Maven, Github IntelliJ",
      //   },
      // },
      // detailsSix: {
      //   symbolicIcon: "",
      //   heading: "Backend Development",
      //   desc: "I have a fervor for constructing robust systems, finding satisfaction in turning abstract concepts into tangible backend solutions through coding.",
      //   additionalDescOne: { heading: "Languages I use", desc: "Java, MySQL" },
      //   additionalDescTwo: {
      //     heading: "Languages I use",
      //     desc: "Spring Boot, Spring Tools, Maven, Github IntelliJ",
      //   },
      // },
    };
    const specialityColSize =
      Object.keys(specialityDetails).length > 3
        ? "4"
        : 12 / Object.keys(specialityDetails).length;
    const { theme } = this.props;
    const serviceHeading = "MY SERVICES";
    const introText = "I code for both frontend and backend, and I love it.";
    return (
      <div
      id="service"
        className="container py-5"
      >
        <p className="fw-bold m-0 pt-3">{serviceHeading}</p>
        <p className="fs-2 fw-bold m-0 my-2 " style={theme.textColorStandard}>
          {introText}
        </p>
        <div className="row" id="speciality">
          {Object.keys(specialityDetails).map((key) => {
            const details = specialityDetails[key];
            return (
              <div key={key} className={`p-1 col-md-${specialityColSize}`}>
                <div
                  className={`h-100 text-center px-3 py-5 rounded bg-blur-5`}
                  style={{
                    border: theme.borderAll.border,
                    boxShadow: theme.boxShadowAll.boxShadow,
                    backgroundImage: theme.backgroundTransparent.backgroundImage
                  }}
                >
                  <span
                    className={`${details.symbolicIcon} circle-50 d-flex align-items-center justify-content-center mx-auto mt-2`}
                    style={{
                      border: theme.borderAll.border,
                      backgroundImage: theme.backgroundStandard.backgroundImage,
                      color: theme.textColorLight.color,
                    }}
                  ></span>
                  <p className="fs-3 fw-bold m-0 mt-4">{details.heading}</p>
                  <p className="font-size-18">{details.desc}</p>
                  <p className="fw-bold m-0 mt-4 font-size-18">
                    {details.additionalDescOne.heading}:
                  </p>
                  <p className="font-size-18">{details.additionalDescOne.desc}</p>
                  <p className="fw-bold m-0 mt-4 font-size-18">
                    {details.additionalDescTwo.heading}:
                  </p>
                  {details.additionalDescTwo.desc
                    .split(",")
                    .map((desc, index) => (
                      <p key={index} className="m-0 font-size-18">
                        {desc}
                      </p>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
