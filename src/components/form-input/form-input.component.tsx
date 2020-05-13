import React from "react";
import "./form-input.styles.scss";

type FormInputProps = {
  label: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  value: string;
  required: boolean;
};
const FormInput: React.FC<FormInputProps> = ({
  label,
  handleChange,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
