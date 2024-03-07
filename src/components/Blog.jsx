import React, { Component } from "react";
import CardSliderLazy from "./CardSliderLazy";
import BlogPost from "./BlogPost";
import DivAnchor from "./DivAnchor";
import Utils from "../modules/Utils.mjs";
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "./Footer";
import fetchAllBlogData from "../modules/FetchData";

export default class Blog extends Component {
  maxVisiblePages = 34;
  constructor() {
    super();
    this.state = {
      isThemeTogglerHovered: false,
      isBlogPost: false,
      clickedPost: null,
      isScreenMd: false,
      initialPages: this.maxVisiblePages,
      visibleBlogPosts: fetchAllBlogData(14, this.maxVisiblePages),
      hasMore: true,
      hasLess: false,
      page: 1,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.handleResize(); // Initial call to set styles based on the initial window size
    window.addEventListener("resize", this.handleResize);
    Utils.scrollToTop();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const isMediumScreen = window.matchMedia(
      "(min-width: 768px) and (max-width: 1200px)"
    ).matches;
    this.setState({ isScreenMd: isMediumScreen });
  };

  showBlogPost = (post) => {
    this.setState({ clickedPost: post });
  };

  fetchMoreData = () => {
    this.setState({ isLoading: true });
    const { page, visibleBlogPosts } = this.state;
    const nextPage = page + 1;
    const newBlogPosts = fetchAllBlogData(
      this.state.initialPages,
      this.state.initialPages + 20
    );

    this.setState({
      initialPages: this.state.initialPages + 20,
      visibleBlogPosts: [...visibleBlogPosts, ...newBlogPosts],
      page: nextPage,
      hasMore: newBlogPosts.length > 0,
      hasLess: true
    });
    this.setState({ isLoading: false });
  };

  reloadData = () => {
    this.setState({visibleBlogPosts: fetchAllBlogData(14, this.maxVisiblePages), hasLess: false});
    Utils.scrollToTop();
  }

  render() {
    const {
      id,
      isDarkMode,
      theme,
      toggleDarkMode,
      toggleBlogMode,
      className,
      style,
    } = this.props;
    const { visibleBlogPosts, hasMore, hasLess, isLoading } = this.state;
    const isScreenMdAbove = window.innerWidth >= 768;
    return (
      <div id={id} className={className} style={{ ...style }}>
        <div
          id="header"
          className={`px-3 pt-3 text-center`}
          style={{
            backgroundColor: theme.textColorStandard.color,
            ...theme.borderBottomOnly,
          }}
        >
          <div id="blogNav" className="d-flex gap-1 align-items-center">
            <p className="fs-3 fw-bold m-0" style={{ ...theme.textColorLight }}>
              SagarDaDa's{" "}
            </p>
            <span
              className="px-2 fw-bold rounded fs-4"
              style={{
                ...theme.textColorStandard,
                backgroundColor: theme.textColorLight.color,
                ...theme.borderAll,
              }}
            >
              Blog
            </span>
            <div className="d-flex gap-2 align-items-center ms-auto me-0">
              <i
                onClick={toggleBlogMode}
                className="fa-solid fa-house cursor-pointer hover-style-sm"
                style={{ ...theme.textColorLight }}
              ></i>
              <div
                onClick={toggleDarkMode}
                className="circle-40 fs-4 d-flex justify-content-center align-items-center btn-primary cursor-pointer"
                onMouseOver={() =>
                  this.setState({ isThemeTogglerHovered: true })
                }
                onMouseOut={() =>
                  this.setState({ isThemeTogglerHovered: false })
                }
                style={{
                  ...(this.state.isThemeTogglerHovered
                    ? {
                        backgroundColor: "#4e555cd7",
                      }
                    : { backgroundColor: theme.textColorLight.color }),
                  ...theme.borderAll,
                }}
              >
                <span
                  className={`${
                    isDarkMode ? "fa-solid fa-moon" : "fa-solid fa-sun"
                  } cursor-pointer`}
                  style={{ ...theme.textColorStandard }}
                ></span>
              </div>
            </div>
          </div>
          <div
            className="d-flex align-items-center flex-column"
            style={theme.textColorLight}
          >
            <p className="fs-1 fw-bold m-0 py-2">Welcome to my blog.</p>
            <p className="mx-2">
              Dive into my research-driven blog posts, crafted from hands-on
              experience, as we navigate the ever-evolving world of tech
              together. Stay informed, stay inspired.
            </p>
            <div
              className="input-group mb-3 container"
              style={isScreenMdAbove ? { width: "50rem" } : null}
            >
              <span className="input-group-text" id="searchBox">
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={theme.textColorStandard}
                ></i>
              </span>
              <input
                type="text"
                className="form-control outline-none"
                placeholder="Search blog post..."
                aria-describedby="searchBox"
                style={{ ...theme.textColorStandard }}
              />
            </div>
          </div>
        </div>

        {!this.state.clickedPost && (
          <div id="blogBody" className="container my-5">
            <p className="fs-3 fw-bold">Latest Posts</p>
            <hr />
            <div
              className="row w-100 ms-auto me-0 bg-secondary rounded"
              style={{ ...theme.borderAll, ...theme.textColorLight }}
            >
              <div className="p-0 col-md-6">
                <CardSliderLazy
                  className="p-1"
                  showBlogPost={this.showBlogPost}
                  blogData={fetchAllBlogData(0, 10)}
                />
              </div>
              <div className="col-md-6">
                <div className="row p-1">
                  {fetchAllBlogData(10, 14).map((rightPanelPost, index) => (
                      <div
                        key={index}
                        id="sliderImage"
                        className="border border-secondary border-2 d-flex col-md-6 p-0"
                        style={{
                          backgroundImage: `url(${rightPanelPost.urlToImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: "200px",
                        }}
                      >
                        <DivAnchor
                          to="blogPostSection"
                          className="p-2 mt-auto w-100"
                          onClick={() => {
                            this.setState({ clickedPost: rightPanelPost });
                          }}
                        >
                          <p className="m-0 fw-bold">
                            {Utils.truncateSentence(rightPanelPost.title, 20)}
                            ...
                          </p>
                          <span className="font-size-15">
                            {Utils.truncateSentence(
                              rightPanelPost.description,
                              35
                            )}
                            ...
                          </span>
                        </DivAnchor>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div id="allPost" className={`mt-5`}>
              <p className="fs-3 fw-bold">All Posts</p>
              <hr />
              <div
                className="row w-100 m-0 p-2 bg-secondary rounded"
                style={theme.borderAll}
              >
                <InfiniteScroll
                  dataLength={visibleBlogPosts.length}
                  next={() => this.fetchMoreData}
                  hasMore={hasMore}
                  hasLess={hasLess}
                  // loader= {alert("Please wait while loading...")}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-around",
                    }}
                  >
                    {visibleBlogPosts.map((individualPost, index) => (
                      <div
                        key={index}
                        className={`col-md-6 col-lg-${
                          this.state.isScreenMd ? "4" : "3"
                        } p-2`}
                      >
                        <div className="rounded-top" style={theme.borderAll}>
                          <img
                            className="rounded-top"
                            src={individualPost.urlToImage}
                            alt=""
                            style={{ width: "100%", height: "200px" }}
                          />
                        </div>
                        <DivAnchor
                          className={`p-2 rounded-bottom overflow-hidden`}
                          style={{
                            height: "100px",
                            ...theme.borderBottomOnly,
                            ...theme.borderLeftOnly,
                            ...theme.borderRightOnly,
                            ...theme.textColorLight,
                          }}
                          onClick={() => {
                            this.setState({ clickedPost: individualPost });
                          }}
                        >
                          <p className="m-0 mb-1 fw-bold">
                            {Utils.truncateSentence(individualPost.title, 25)}
                          </p>
                          <p className="m-0 font-size-15 text-break">
                            {Utils.truncateSentence(individualPost.title, 55)}
                          </p>
                        </DivAnchor>
                      </div>
                    ))}
                  </div>
                  {hasMore && (
                    <div
                      className="d-flex justify-content-center gap-2 "
                      style={{ textAlign: "center", margin: "20px" }}
                    >
                      <button
                        type="button"
                        className="btn btn-outline-light"
                        onClick={() => {
                          this.fetchMoreData();
                        }}
                        style={{ width: "130px" }}
                      >
                        {isLoading ? (
                          "Loading..."
                        ) : (
                          <span>
                            Load more
                            <i className="fa-solid fa-chevron-down ms-2"></i>
                          </span>
                        )}
                      </button>
                      {hasLess && (
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => {
                            this.reloadData();
                          }}
                          style={{ width: "130px" }}
                        >
                          {isLoading ? (
                            "Loading..."
                          ) : (
                            <span>
                              Reload<i className="fa-solid fa-rotate ms-2"></i>
                            </span>
                          )}
                        </button>
                      )}
                    </div>
                  )}
                </InfiniteScroll>
              </div>
            </div>
          </div>
        )}

        {/* Blog Post */}
        <div name="blogPostSection">
          {this.state.clickedPost && (
            <BlogPost
              theme={theme}
              isDarkMode={isDarkMode}
              post={this.state.clickedPost}
              latestPosts={fetchAllBlogData(0, 10)}
              closeBlogPost={() => this.showBlogPost(null)}
              scrollPosition={window.scrollY}
            />
          )}
        </div>
        <Footer theme={theme} />
      </div>
    );
  }
}
Blog.propTypes = {};
Blog.defaultProps = {};
