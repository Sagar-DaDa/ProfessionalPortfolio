import React, { Component } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/navbar.css";
import { Link } from "react-scroll";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isNavbarToggled: false,
      isThemeTogglerHovered: false,
    };
  }

  static propTypes = {
    siteName: PropTypes.string.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
    theme: PropTypes.object.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
  };

  static defaultProps = {
    siteName: "SiteName",
    isDarkMode: false,
  };

  toggleNavbar = () => {
    this.setState({ isNavbarToggled: !this.state.isNavbarToggled });
  };

  render() {
    const { siteName, isDarkMode, theme, toggleDarkMode, renderNotification } =
      this.props;
    const commonLinkProps = {
      spy: true,
      smooth: true,
      offset: -50,
      duration: 500,
      className: "nav-link py-1"
    }

    return (
      <div className="mb-5 pb-5" id="navBar">
        <nav
          className={` zindex-100 ${
            isDarkMode ? "navbar-dark bg-dark" : "bg-light"
          } navbar navbar-expand-lg font-outfit py-1 position-fixed bg-opacity-75 bg-blur-5 w-100 top-0`}
        >
          <div className="container-fluid">
            <Link
              to="homeSection"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="navbar-brand fw-bold fs-3 site-name cursor-pointer"
            >
              {siteName}
            </Link>
            <div className="p-1 d-flex border-radius-50">
              <span
                className={`navbar-toggler m-0 p-0 cursor-pointer border-0 fs-1 ${
                  this.state.isNavbarToggled
                    ? "fa-solid fa-xmark"
                    : "fa-solid fa-bars"
                }`}
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={this.toggleNavbar}
                style={theme.textColorStandard}
              ></span>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto me-0 font-size-18 me-3">
                <Link
                  to="aboutSection"
                  {...commonLinkProps}
                >
                  About
                </Link>
                <Link
                  to="resumeSection"
                  {...commonLinkProps}
                >
                  Resume
                </Link>
                <Link
                  to="serviceSection"
                  {...commonLinkProps}
                >
                  Service
                </Link>
                <Link
                  to="portfolioSection"
                  {...commonLinkProps}
                >
                  Portfolio
                </Link>
                <Link
                  to="blogSection"
                  {...commonLinkProps}
                >
                  Blog
                </Link>
                <Link
                  to="contactSection"
                  {...commonLinkProps}
                >
                  Contact
                </Link>
              </div>
              <div
                onClick={toggleDarkMode}
                className="theme-toggler circle-45 fs-4 my-1 d-flex justify-content-center align-items-center"
                style={
                  this.state.isThemeTogglerHovered
                    ? theme.buttonStandardHovered
                    : theme.buttonStandard
                }
                onMouseOver={() =>
                  this.setState({ isThemeTogglerHovered: true })
                }
                onMouseOut={() =>
                  this.setState({ isThemeTogglerHovered: false })
                }
              >
                <span
                  className={`${
                    isDarkMode ? "fa-solid fa-moon " : "fa-solid fa-sun"
                  } text-light cursor-pointer`}
                  onMouseOver={() =>
                    this.setState({ isThemeTogglerHovered: true })
                  }
                  onMouseOut={() =>
                    this.setState({ isThemeTogglerHovered: false })
                  }
                ></span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
