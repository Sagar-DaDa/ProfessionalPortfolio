import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/cardSliderLazy.css";
import DivAnchor from "./DivAnchor";
import Utils from "../modules/Utils.mjs";



function NextArrow({ className, style, onClick }) {
  return (
    <DivAnchor
      className={`${className} d-flex justify-content-center align-items-center rounded-start bg-opacity-75 bg-blur-5`}
      style={{
        ...style,
        display: "block",
        marginRight: "25px",
        height: "100px",
        color: "grey",
        zIndex: "1"
      }}
      onClick={onClick}
    >
      <span className="fs-6 fw-bold fa-solid fa-angles-right hover-style-sm"></span>
    </DivAnchor>
  );
}

function PrevArrow({ className, style, onClick }) {
  return (
    <DivAnchor
      className={`${className} d-flex justify-content-center align-items-center rounded-end bg-opacity-75 bg-blur-5`}
      style={{
        ...style,
        display: "block",
        marginLeft: "25px",
        height: "100px",
        color: "grey",
        zIndex: "1"
      }}
      onClick={onClick}
    >
      <span className="fs-6 fw-bold fa-solid fa-angles-left hover-style-sm"></span>
    </DivAnchor>
  );
}

export default function CardSliderLazy(props) {
  const [blogPosts, setBlogPosts] = useState(null);
  const className = props.className;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const apiKey = props.apiKey;
        // const apiUrl = props.apiUrl;

        // const fetchedData = await fetch(apiUrl + apiKey);
        // const data = await fetchedData.json();

        setBlogPosts(props.blogData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [props.blogData]);

  // const HoveredElement = ({ children, styleClass }) => {
  //   const [isHovered, setIsHovered] = useState(false);
  //   const handleMouseEnter = () => {
  //     setIsHovered(true);
  //   };
  //   const handleMouseLeave = () => {
  //     setIsHovered(false);
  //   };
  //   const hoverStyle = {
  //     backgroundColor: isHovered ? "rgba(0,0,0,0.80)" : "rgba(0,0,0,0.55)",
  //   };

  //   return (
  //     <div
  //       className={`${styleClass} `}
  //       onMouseOver={handleMouseEnter}
  //       onMouseLeave={handleMouseLeave}
  //       style={{ ...hoverStyle, transition: "all 0.50s" }}
  //     >
  //       {children}
  //     </div>
  //   );
  // };

  const showClickedPost = (clickedPost) => {
    props.showBlogPost(clickedPost);
  };

  var settings = {
    rows: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    lazyLoad: true, //ondemand
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // initialSlide: inititalSlide
  };
  return (
    <div id="cardSlider" className={`${className}`}>
      {blogPosts && (
        <Slider {...settings}>
          {blogPosts.map((post, index) => (
            <div className="" key={index}>
              <div
                id="sliderImage"
                className="d-flex"
                style={{
                  backgroundImage: `url(${post.urlToImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                }}
              >
                <DivAnchor
                  className="p-2 mt-auto w-100"
                  onClick={() => {showClickedPost(post)}}
                >
                  <p className="m-0 fw-bold">
                    {Utils.truncateSentence(post.title, 40)}...
                  </p>
                  <span className="font-size-15">
                    {Utils.truncateSentence(post.description, 80)}...
                  </span>
                </DivAnchor>
              </div>
            </div>
          ))}
        </Slider>
      )}
      {!blogPosts && <p>Nothing found here.</p>}
    </div>
  );
}
