import React,{ Component } from "react";
import HorizontalSlider from "./HorizontalSlider";

const clientsDetail = [
  {
    img: `/images/clients/burkettandco.png`,
    desc: `Accounting and tax services characterized by quality, reliability and trust.`,
    url: `https://www.burkettandco.ca/`,
  },
  {
    img: `/images/clients/coupal.png`,
    desc: `Vancouver's tower crane rental service and support leader since 1974.`,
    url: `http://coupalcranes.com/`,
  },
  {
    img: `/images/clients/wfdesignbuild.png`,
    desc: `High-end, custom residential renovaters serving Fraser Valley homeowners.`,
    url: `https://wfdesignbuild.com/`,
  },
  {
    img: `/images/clients/chronicled.png`,
    desc: `Blockchain pioneers bringing transparency, trust, and security to supply.`,
    url: `https://www.chronicled.com/`,
  },
  {
    img: `/images/clients/glcsolutions.png`,
    desc: `Business savvy tech experts helping forward thinking companies get things done.`,
    url: `http://glcsolutions.ca/`,
  },
  {
    img: `/images/clients/wedlerengineering.png`,
    desc: `Results-oriented, responsive and flexible full service civil engineering firm.`,
    url: `http://wedler.com/`,
  },
  {
    img: `/images/clients/chronicled.png`,
    desc: `Blockchain pioneers bringing transparency, trust, and security to supply.`,
    url: `https://www.chronicled.com/`,
  },
  {
    img: `/images/clients/glcsolutions.png`,
    desc: `Business savvy tech experts helping forward thinking companies get things done.`,
    url: `http://glcsolutions.ca/`,
  },
  {
    img: `/images/clients/coupal.png`,
    desc: `Vancouver's tower crane rental service and support leader since 1974.`,
    url: `http://coupalcranes.com/`,
  },
  {
    img: `/images/clients/wfdesignbuild.png`,
    desc: `High-end, custom residential renovaters serving Fraser Valley homeowners.`,
    url: `https://wfdesignbuild.com/`,
  },
  {
    img: `/images/clients/burkettandco.png`,
    desc: `Accounting and tax services characterized by quality, reliability and trust.`,
    url: `https://www.burkettandco.ca/`,
  },
  {
    img: `/images/clients/coupal.png`,
    desc: `Vancouver's tower crane rental service and support leader since 1974.`,
    url: `http://coupalcranes.com/`,
  },
  {
    img: `/images/clients/wfdesignbuild.png`,
    desc: `High-end, custom residential renovaters serving Fraser Valley homeowners.`,
    url: `https://wfdesignbuild.com/`,
  },
  {
    img: `/images/clients/chronicled.png`,
    desc: `Blockchain pioneers bringing transparency, trust, and security to supply.`,
    url: `https://www.chronicled.com/`,
  },
  {
    img: `/images/clients/glcsolutions.png`,
    desc: `Business savvy tech experts helping forward thinking companies get things done.`,
    url: `http://glcsolutions.ca/`,
  },
  {
    img: `/images/clients/wedlerengineering.png`,
    desc: `Results-oriented, responsive and flexible full service civil engineering firm.`,
    url: `http://wedler.com/`,
  },
  {
    img: `/images/clients/chronicled.png`,
    desc: `Blockchain pioneers bringing transparency, trust, and security to supply.`,
    url: `https://www.chronicled.com/`,
  },
  {
    img: `/images/clients/coupal.png`,
    desc: `Vancouver's tower crane rental service and support leader since 1974.`,
    url: `http://coupalcranes.com/`,
  },
  {
    img: `/images/clients/wfdesignbuild.png`,
    desc: `High-end, custom residential renovaters serving Fraser Valley homeowners.`,
    url: `https://wfdesignbuild.com/`,
  },
  {
    img: `/images/clients/burkettandco.png`,
    desc: `Accounting and tax services characterized by quality, reliability and trust.`,
    url: `https://www.burkettandco.ca/`,
  },
  {
    img: `/images/clients/coupal.png`,
    desc: `Vancouver's tower crane rental service and support leader since 1974.`,
    url: `http://coupalcranes.com/`,
  },
  {
    img: `/images/clients/wfdesignbuild.png`,
    desc: `High-end, custom residential renovaters serving Fraser Valley homeowners.`,
    url: `https://wfdesignbuild.com/`,
  },
  {
    img: `/images/clients/chronicled.png`,
    desc: `Blockchain pioneers bringing transparency, trust, and security to supply.`,
    url: `https://www.chronicled.com/`,
  },
  {
    img: `/images/clients/glcsolutions.png`,
    desc: `Business savvy tech experts helping forward thinking companies get things done.`,
    url: `http://glcsolutions.ca/`,
  },
  {
    img: `/images/clients/wedlerengineering.png`,
    desc: `Results-oriented, responsive and flexible full service civil engineering firm.`,
    url: `http://wedler.com/`,
  },
];

export default class Portfolio extends Component {
  render() {
    const {theme} = this.props;
    const portfolioHeading = "MY PORTFOLIO";
    const introText = "Projects I've worked on.";
    return (
      <div
        id="portfolio"
        className={"border-radius-10 bg-blur-5 py-5"}
        style={{
          borderTop: theme.borderTopOnly.borderTop,
          borderBottom: theme.borderBottomOnly.borderBottom,
          backgroundImage: theme.backgroundTransparent.backgroundImage,
        }}
      >
        <div className="container">
          <p className="fw-bold m-0 pt-3">{portfolioHeading}</p>
          <p className="fs-2 fw-bold m-0 my-2 " style={theme.textColorStandard}>{introText}</p>
          <div className="mx-3">
            <HorizontalSlider clients={clientsDetail} />
          </div>
        </div>
      </div>
    );
  }
}
