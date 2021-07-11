import s from "./TextArea.module.scss";
import React from "react";

const TextArea = ({ value, onKeyPress, onChange, label }) => {
  return (
    <div className={`${s.textArea} input-field`}>
      <textarea
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        id="textarea"
        className="materialize-textarea validate"
      />
      <label className="active" htmlFor="textarea">
        {label}
      </label>
    </div>
  );
};

export default TextArea;
