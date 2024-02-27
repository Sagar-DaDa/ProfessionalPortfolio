import React, { useState } from "react";
import { useRef } from "react";

const modalHeading = "Feel free to contact me, I'll get back to you as soon as possible.";

export default function HireMeModal(props) {
  const [isHovered, setIsHovered] = useState("");
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      props.onCloseModal();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className={`border-red position-fixed top-50 start-50 translate-middle w-100 h-100 zindex-100 text-light d-flex justify-content-center align-items-center overflow-auto bg-blur-5`}
      style={{ ...props.theme.borderAll, ...props.theme.backgroundTransparent }}
    >
      <div
        className="rounded m-1"
        style={{ ...props.theme.backgroundStandard }}
      >
        <i
          className={`fa-regular fa-circle-xmark fs-4 float-end ${isHovered} m-3`}
          onMouseOver={() => setIsHovered("font-muted-grey")}
          onMouseOut={() => setIsHovered(null)}
          onClick={props.onCloseModal}
        ></i>
        <form className="mt-5 mb-2 mx-2 py-2 px-4">
          <p className="fs-4 fw-bold">{modalHeading}</p>
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">
              Name *
            </label>
            <input
              type="text"
              className="form-control bg-secondary bg-opacity-50"
              style={{ ...props.theme.textColorLight }}
              id="inputName"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email address *
            </label>
            <input
              type="email"
              className="form-control bg-secondary bg-opacity-50"
              style={props.theme.textColorLight}
              id="inputEmail"
              aria-describedby="emailHelp"
            />
            <span className="font-size-15 p-0">
              We'll never share your email with anyone else.
            </span>
          </div>
          <div className="mb-3">
            <label htmlFor="inputMessage" className="form-label">
              Describe your project *
            </label>
            <textarea
              className="form-control bg-secondary bg-opacity-50"
              style={props.theme.textColorLight}
              id="inputMessage"
              rows="5"
            ></textarea>
          </div>
          <center>
            <button
              type="submit"
              className="btn btn-light px-5 py-2 mx-auto"
              style={{ ...props.theme.textColorStandard }}
            >
              Send Message
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}
