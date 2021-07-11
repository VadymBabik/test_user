import React from "react";
import s from "./Modal.module.scss";

const Modal = ({ onClick, title, text1, fn1, text2, fn2 }) => {
  return (
    <div onClick={onClick} className={s.modal}>
      <div
        onClick={() => (event) => event.stopPropagation()}
        className={`${s.modal__content} z-depth-4`}
      >
        <h5 className={s.modal__title}>{title}</h5>
        <div className={s.modal__body}>
          <span onClick={fn1} className="waves-effect waves-light btn">
            {text1}
          </span>
          <span onClick={fn2} className="waves-effect waves-light btn">
            {text2}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Modal;
