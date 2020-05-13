import React from "react";
import "./custom-button.styles.scss";

interface CustomButtonProps {
  type: "submit";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
