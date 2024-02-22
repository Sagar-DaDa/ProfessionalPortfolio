import React, { Component } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/navbar.css";

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
    toggleDarkMode: PropTypes.func.isRequired
  }

  static defaultProps = {
    siteName: "SiteName",
    isDarkMode: false,
  }

  toggleNavbar = () => {
    this.setState({ isNavbarToggled: !this.state.isNavbarToggled });
  };

  render() {
    const { siteName, isDarkMode, theme, toggleDarkMode } = this.props;
    
    return (
      <div className="mb-5 pb-5" id="navBar">
        <nav
          className={` zindex-100 ${
            isDarkMode ? "navbar-dark bg-dark" : "bg-light"
          } navbar navbar-expand-lg font-outfit py-1 position-fixed bg-opacity-75 bg-blur-5 w-100 top-0`}
        >
          <div className="container-fluid">
            <a className="navbar-brand fw-bold fs-3 site-name" href="#navBar">
              {siteName}
            </a>
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
                <a
                  className="nav-link active py-1"
                  style={theme.textColorStandard}
                  aria-current="page"
                  href="#about"
                >
                  About
                </a>
                <a className="nav-link py-1" href="#resume">
                  Resume
                </a>
                <a className="nav-link py-1" href="#service">
                  Service
                </a>
                <a className="nav-link py-1" href="#portfolio">
                  Portfolio
                </a>
                <a className="nav-link py-1" href="/">
                  Blog
                </a>
                <a className="nav-link py-1" href="#contact">
                  Contact
                </a>
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
                  } text-light`}
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
