import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Colors from "./modules/Colors.mjs";
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
      // backgroundColor: this.isDarkMode ? "bg-dark" : "bg-light",
      // color: this.isDarkMode ? "text-light" : "text-dark",
      theme: Themes.greenTheme,
    };
  }

  toggleDarkMode = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode }, () => {
      this.state.isDarkMode
        ? this.setState({ backgroundColor: "bg-dark" })
        : this.setState({ backgroundColor: "bg-light" });
      this.state.isDarkMode
        ? this.setState({ color: "text-light" })
        : this.setState({ color: "text-dark" });
    });
  };
  componentDidMount() {
    this.delay = setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.delay);
  }

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
        <div
          className=""
          id="hexa-bg"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: "-1",
            overflow: "hidden",
          }}
        >
          <HexagonalBg color={this.state.isDarkMode ? "black" : "white"} />
        </div>
        <div
          id="mainBody"
          className="font-outfit "
          style={
            this.state.isDarkMode
              ? this.state.theme.textColorLight
              : this.state.theme.textColorDark
          }
        >
          <Navbar
            siteName={this.siteName}
            isDarkMode={this.state.isDarkMode}
            theme={this.state.theme}
            toggleDarkMode={() => {
              this.toggleDarkMode();
            }}
          />
          <Home theme={this.state.theme} />

          <About theme={this.state.theme} />
          <Resume theme={this.state.theme} />
          <Service theme={this.state.theme} />
          <Portfolio theme={this.state.theme} />
          <Contact theme={this.state.theme}/>
        </div>
        <Footer theme={this.state.theme}/>
      </>
    );
  }
}
