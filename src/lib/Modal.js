import React from 'react';
import './modal.css';

export const Modal = ({ show, setShow, title, text }) => {
  return (
    show && (
      <div className="modal">
        <div className="modal_container">
          <div className="modal-container_content">
            <h2 className="modal-container-content_title">{title}</h2>
            <p className="modal-container-content_text">{text}</p>
          </div>
          <button
            className="modal-container_close-button"
            onClick={() => setShow(false)}>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#38393b">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};