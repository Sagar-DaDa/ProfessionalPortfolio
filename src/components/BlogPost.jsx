import React, { useEffect, useState } from "react";
import dateIsoToDMY from "../modules/DateFormat";
import ShareButton from "./ShareButton";
import DivAnchor from "./DivAnchor";
import Utils from "../modules/Utils.mjs";

export default function BlogPost(props) {
  const [post, setPost] = useState(props.post);
  const {theme, latestPosts, className, scrollPosition} = props;

  const footerHeading = "SagarDaDa";
  const introText =
    "Navigating existence, acquiring wisdom, and immersing myself in the realm of coding";
  const facebookLink = "https://www.facebook.com/SaagaarDaDa";
  const linkedinLink = "https://www.linkedin.com/in/saagaardada";
  const instagramLink = "https://https://www.instagram.com/saagaardada";
  const whatsappLink = "https://wa.me/+9779842333154";

  useEffect(() => {
    Utils.scrollToTop();
  })

  return (
    <div
      id="blogPost"
      className={`position-absolute w-100 top-0 left-0 ${
        props.isDarkMode ? "bg-dark" : "bg-light"
      } ${className}`}
    >
      <div
        id="blogPostHeader"
        className="position-sticky top-0 zindex-100"
        style={{
          backgroundColor: props.theme.textColorStandard.color,
          ...props.theme.borderBottomOnly,
        }}
      >
        <div className="pt-3 container">
          <i
            className="fa-solid fa-arrow-left-long fs-4 cursor-pointer hover-style-sm"
            onClick={() => {props.closeBlogPost(); Utils.scrollTo(scrollPosition)}}
          ></i>
        </div>
        <div className="d-flex gap-1 justify-content-center align-items-center pb-3">
          <p className="fs-4 fw-bold m-0">SagarDaDa's</p>
          <span
            className="px-2 fw-bold rounded fs-5"
            style={{
              backgroundColor: props.theme.textColorLight.color,
              ...props.theme.textColorStandard,
              ...theme.borderAll,
            }}
          >
            Blog
          </span>
        </div>
      </div>

      <div id="post">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 py-5">
              <p className="fs-3 fw-bold">{post.title}</p>
              <div className="d-flex align-items-center">
                <div className="font-size-15">
                  <p className="m-0">
                    <span className="fw-bold">By </span>
                    <span
                      className="fw-bold"
                      style={props.theme.textColorStandard}
                    >
                      {post.author}
                    </span>
                  </p>
                  <span className="">{dateIsoToDMY(post.publishedAt)}</span>
                </div>
              </div>
              <ShareButton />
              <div
                className="d-flex bg-secondary p-2 rounded"
                style={{ maxHeight: "25rem", ...theme.borderAll }}
              >
                <img
                  src={post.urlToImage}
                  alt=""
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "5px",
                    ...theme.borderAll,
                  }}
                />
              </div>
              <p className="font-size-15 fw-lighter fst-italic">
                Source: {post.source.name}
              </p>
              <p className="">{post.description}</p>
              <a href={post.url} target="_tab">
                Read More...
              </a>
            </div>
            <div className="col-lg-5 py-5">
              <div
                className="rounded bg-secondary p-4"
                style={{ ...theme.borderAll, ...theme.textColorLight }}
              >
                <p className="fs-5 fw-bold m-0">Latest Posts</p>
                <hr />
                {latestPosts.map((latest, index) => (
                  <DivAnchor key={index} onClick={() => {setPost(latest); Utils.scrollToTop();}}>
                    <div
                      key={index}
                      className={`row m-0 mb-2 overflow-hidden d-flex rounded`}
                      style={{ ...theme.borderAll }}
                    >
                      <div className="col-md-6 p-0">
                        <img
                          className="d-inline-block"
                          src={latest.urlToImage}
                          alt=""
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="col-md-6 d-inline-block py-2">
                        <span className="fw-bold font-size-15">
                          {Utils.truncateSentence(latest.title, 20)}
                        </span>
                        <span className="d-block font-size-14">
                          {Utils.truncateSentence(latest.description, 100)}
                        </span>
                      </div>
                    </div>
                  </DivAnchor>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="blogFooter"
        style={{ backgroundColor: theme.textColorStandard.color }}
      >
        <div className="container text-center py-3">
          <p className="fs-4 fw-bold m-0">{footerHeading.toUpperCase()}</p>
          <p className="m-0">{introText}</p>
          <div className="my-2 d-flex gap-2 align-items-center justify-content-center justify-content-center">
            <a
              className="text-decoration-none"
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className={`social-btn-circle fa-brands fa-facebook-f square-30 d-flex justify-content-center align-items-center`}
                style={{ ...theme.textColorStandard, ...theme.borderAll }}
              ></i>
            </a>
            <a
              className="text-decoration-none"
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className={`social-btn-circle fa-brands fa-instagram square-30 d-flex justify-content-center align-items-center`}
                style={{ ...theme.textColorStandard, ...theme.borderAll }}
              ></i>
            </a>
            <a
              className="text-decoration-none"
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className={`social-btn-circle fa-brands fa-linkedin-in square-30 d-flex justify-content-center align-items-center`}
                style={{ ...theme.textColorStandard, ...theme.borderAll }}
              ></i>
            </a>
            <a
              className="text-decoration-none"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className={`social-btn-circle fa-brands fa-whatsapp square-30 d-flex justify-content-center align-items-center`}
                style={{ ...theme.textColorStandard, ...theme.borderAll }}
              ></i>
            </a>
          </div>
          <p className="m-0">created by me &#169; 2024</p>
        </div>
      </div>
    </div>
  );
}
