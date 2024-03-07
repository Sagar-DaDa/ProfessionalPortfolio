import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Themes from "./modules/Themes.mjs";
import Home from "./components/Home";
import HexagonalBg from "./components/HexagonalBg";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Notification, { NotificationType } from "./components/Notification";
import { Element } from "react-scroll";
import Blog from "./components/Blog";

export default class App extends Component {
  constructor() {
    super();
    this.siteName = "SagarDaDa";
    const darkModeStatus =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // const darkModeStatus = false;

    this.state = {
      isDarkMode: darkModeStatus,
      loading: true,
      theme: Themes.greenTheme,
      blogMode: false,
      notification: {
        type: null,
        message: null,
      },
    };
  }

  componentDidMount() {
    this.delay = setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.delay);
  }

  toggleDarkMode = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode }, () => {
      this.state.isDarkMode
        ? this.setState({ backgroundColor: "bg-dark" })
        : this.setState({ backgroundColor: "bg-light" });
      this.state.isDarkMode
        ? this.setState({ color: "text-light" })
        : this.setState({ color: "text-dark" });
      this.state.isDarkMode
        ? this.setState({
            notification: {
              type: NotificationType.TOAST,
              message: "Dark mode enabled.",
            },
          })
        : this.setState({
            notification: {
              type: NotificationType.TOAST,
              message: "Light mode enabled.",
            },
          });
      setTimeout(() => {
        this.setState({ notification: { type: null, message: null } });
      }, 3000);
    });
  };

  renderNotification = (notificationType, message) => {
    this.setState({
      notification: { type: notificationType, message: message },
    });
    setTimeout(() => {
      this.setState({ notification: { type: null, message: null } });
    }, 3000);
  };

  toggleBlogMode = () => {
    this.setState({ blogMode: !this.state.blogMode });
  };

  render() {
    const { loading } = this.state;

    if (this.state.isDarkMode) {
      document.body.style.backgroundColor = "rgb(33, 37, 41)";
    } else {
      document.body.style.backgroundColor = "rgb(248, 249, 250)";
    }

    return (
      <>
        {loading ? <Loader color={this.state.theme.textColorStandard} /> : null}
        <HexagonalBg color={this.state.isDarkMode ? "black" : "white"} />
        {this.state.notification && (
          <Notification notification={this.state.notification} />
        )}

        {!this.state.blogMode && (
          <div
            id="singlePageView"
            className={`font-outfit`}
            style={
              this.state.isDarkMode
                ? this.state.theme.textColorLight
                : this.state.theme.textColorDark
            }
          >
            <Element name="homeSection">
              <Navbar
                siteName={this.siteName}
                isDarkMode={this.state.isDarkMode}
                theme={this.state.theme}
                toggleDarkMode={() => {
                  this.toggleDarkMode();
                }}
                toggleBlogMode={() => {
                  this.toggleBlogMode();
                }}
              />
              <Home theme={this.state.theme} />
            </Element>
            <Element name="aboutSection">
              <About theme={this.state.theme} />
            </Element>
            <Element name="resumeSection">
              <Resume theme={this.state.theme} />
            </Element>
            <Element name="serviceSection">
              <Service theme={this.state.theme} />
            </Element>
            <Element name="portfolioSection">
              <Portfolio theme={this.state.theme} />
            </Element>
            <Element name="contactSection">
              <Contact theme={this.state.theme} />
            </Element>
            <Footer theme={this.state.theme} />
          </div>
        )}
        {this.state.blogMode && (
            <Blog
              id="blogSection"
              className={`font-outfit bg-blur-5`}
              style={
                this.state.isDarkMode
                  ? this.state.theme.textColorLight
                  : this.state.theme.textColorDark
              }
              isDarkMode={this.state.isDarkMode}
              theme={this.state.theme}
              toggleDarkMode={() => {
                this.toggleDarkMode();
              }}
              toggleBlogMode={() => {
                this.toggleBlogMode();
              }}
            />
        )}
      </>
    );
  }
}
