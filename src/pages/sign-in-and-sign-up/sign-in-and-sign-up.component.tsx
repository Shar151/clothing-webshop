import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.comonent";

const signInAndSignUpPage: React.FC = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn></SignIn>
    </div>
  );
};

export default signInAndSignUpPage;
