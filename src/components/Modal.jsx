// Modal.js
import React, { useEffect } from "react";

export default function Modal(props) {
  function closeModal() {
    props.closeModal();
    document.body.style.overflow = "unset";
  }
  document.body.style.overflow = "hidden";

  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modal_show" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        <div className="modal_body">
          <h3>{props.title}</h3>
          <div className="project_info">
            <div className="project_description">
              <ul>
                <li>
                  <strong> Site view </strong>
                </li>
                <li>
                  <a href={`${props.url}`}>Visit link</a>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>My Role</strong>
                </li>
                <li>Web Developer</li>
              </ul>
              <ul>
                <li>
                  <strong> Technology used </strong>
                </li>
                <li>
                  <li>{props.technology}</li>
                </li>
              </ul>
            </div>
            <div className="project_overview">
              <ul>
                <li>
                  <strong>Type</strong>
                </li>
                <li>
                  <p>{props.type}</p>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Overview</strong>
                </li>
                <li>
                  <p>{props.overview}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
