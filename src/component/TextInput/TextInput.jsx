import React from "react";
import s from "./TextInput.module.scss";

const TextInput = ({ value, onKeyPress, onChange, label }) => {
  return (
    <div className={`${s.InputWrapper} input-field`}>
      <input
        className="validate"
        id="textInput"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        type="text"
      />
      <label className="active" htmlFor="textInput">
        {label}
      </label>
    </div>
  );
};
export default TextInput;
