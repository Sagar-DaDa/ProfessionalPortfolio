import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    const { theme } = this.props;

    const resumeHeading = "My Resume";
    const introText = "Even though I am a self-learner,";
    const resumeDetails = {
      education: {
        type: "Education",
        symbolicIcon: "fa-solid fa-graduation-cap",
        details: {
          bca: {
            duration: "2018 - 2023",
            courseOrPosition: "Bachelor's Degree in Computer Application",
            universityOrOrg: "Tribhuvan University",
            address: "Biratnagar, NP",
          },
          mbs: {
            duration: "2015 - 2017",
            courseOrPosition: "Master's Degree in Business Studies",
            universityOrOrg: "Tribhuvan University",
            address: "Biratnagar, NP",
          },
          bbs: {
            duration: "2008 - 2011",
            courseOrPosition: "Bachelor's Degree in Business Studies",
            universityOrOrg: "Tribhuvan University",
            address: "Biratnagar, NP",
          },
        },
      },
      experience: {
        type: "Experience",
        symbolicIcon: "fa-solid fa-briefcase",
        details: {
          javaDeveloper: {
            duration: "2023 - 2023 (3 months)",
            courseOrPosition: "Java Developer",
            universityOrOrg: "Diyalo Technologies Pvt. Ltd.",
            address: "Kathmandu, NP",
          },
          networkTechnician: {
            duration: "2018 - 2023",
            courseOrPosition: "Network Technician",
            universityOrOrg: "Core Technologies",
            address: "Biratnagar, NP",
          },
          seniorTechnician: {
            duration: "2016 - 2018",
            courseOrPosition: "Senior Technician",
            universityOrOrg: "Subisu Cablenet Pvt. Ltd.",
            address: "Biratnagar, NP",
          },
          systemTechnician: {
            duration: "2014 - 2015",
            courseOrPosition: "System and Network Technician",
            universityOrOrg: "Quadtech Technologies Pvt. Ltd.",
            address: "Biratnagar, NP",
          },
        },
      },
    };

    const resumeColSize =
      Object.keys(resumeDetails).length > 3
        ? "4"
        : 12 / Object.keys(resumeDetails).length;

    return (
      <div
        id="resume"
        className={`py-5 bg-blur-5`}
        style={{
          borderBottom: theme.borderBottomOnly.borderBottom,
          backgroundImage: theme.backgroundTransparent.backgroundImage,
        }}
      >
        <div className="container">
          <p className="fw-bold m-0 pt-3">{resumeHeading.toUpperCase()}</p>
          <p className="fs-2 fw-bold m-0 my-2 " style={theme.textColorStandard}>
            {introText}
          </p>

          <div className="row">
            {Object.keys(resumeDetails).map((key) => {
              const resume = resumeDetails[key];
              return (
                <div key={key} className={`col-md-${resumeColSize} p-1`}>
                  <div
                    className="rounded h-100 pb-2"
                    style={{
                      ...theme.borderAll,
                      ...theme.boxShadowAll,
                    }}
                  >
                    <p
                      className="p-3 fs-5 fw-bold rounded-top"
                      style={{
                        border: theme.borderAll.border,
                        backgroundImage:
                          theme.backgroundStandard.backgroundImage,
                        color: theme.textColorLight.color,
                      }}
                    >
                      {resume.type}
                    </p>
                    {Object.keys(resume.details).map((detailKey) => {
                      const detail = resume.details[detailKey];

                      return (
                        <div
                          key={detailKey}
                          className="rounded d-flex align-items-center mx-2 my-1 p-4"
                          style={{
                            boxShadow: theme.boxShadowAll.boxShadow,
                          }}
                        >
                          <div className="px-2">
                            <span
                              className={`${resume.symbolicIcon} circle-50 d-flex align-items-center justify-content-center mx-auto`}
                              style={{
                                border: theme.borderAll.border,
                                backgroundImage:
                                  theme.backgroundStandard.backgroundImage,
                                color: theme.textColorLight.color,
                              }}
                            ></span>
                          </div>
                          <div className="px-2">
                            <p className="fw-bold m-0 mb-2">
                              {detail.duration}
                            </p>
                            <p
                              className="fs-5 fw-bold m-0 mb-1"
                              style={{ color: theme.textColorStandard.color }}
                            >
                              {detail.courseOrPosition}
                            </p>
                            <p className="fw-bold font-size-18 m-0 mb-2">
                              {detail.universityOrOrg}
                            </p>
                            <p className="m-0">{detail.address}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
