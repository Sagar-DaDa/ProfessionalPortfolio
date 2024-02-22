import React from "react";
import PropTypes from "prop-types";

export default function Card(props) {
  const image = process.env.PUBLIC_URL + "/images/me.jpg";
  const descColor = props.theme.textColorLight.color;
  return (
    <div
      id="card"
      className="rounded bg-blur-5"
      style={{
        maxWidth: "350px",
        border: `${props.theme.borderAll.border}`,
        boxShadow: `${props.theme.boxShadowAll.boxShadow}`,
        backgroundImage: `${props.theme.backgroundTransparent.backgroundImage}`,
      }}
    >
      <div className="rounded-top px-3 p-3">
        <img
          className="owner-image rounded-top w-100 h-100"
          src={process.env.PUBLIC_URL + (props.cardInfo.image)}
          alt=""
        />
      </div>
      <span
        className="text-center fs-4 fw-bold d-block px-1 py-3"
        style={{
          border: `${props.theme.borderAll.border}`,
          color: descColor,
          backgroundImage: `${props.theme.backgroundStandard.backgroundImage}`,
        }}
      >
        {props.cardInfo.title.toUpperCase()}
      </span>
      <div className="rounded-bottom px-3 p-3 ">
        <div className="rounded-bottom text-center">
          <div
            className="d-flex justify-content-center align-items-center text-center rounded fw-bold px-2 py-2"
            style={{
              border: `${props.theme.borderAll.border}`,
              backgroundImage: `${props.theme.backgroundExtra.backgroundImage}`,
              color: descColor,
            }}
          >
            <div>
              <i className="fa-solid fa-circle-plus me-2 font-size-13"></i>
            </div>
            <div>{props.cardInfo.desc.toUpperCase()}</div>
            <div>
              <i className="fa-solid fa-circle-plus ms-2 font-size-13"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

Card.defaultProps = {
  cardInfo: {
    title: "SagarDaDa",
    desc: "Java Developer",
    image: "/user.svg",
  },
};
