import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

interface SignInState {
  name?: string;
  password?: string;
}

class SignIn extends React.Component<{}, SignInState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.setState({ name: "", password: "" });
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and Password</span>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <FormInput
            name="name"
            type="email"
            handleChange={(e) => this.handleChange(e)}
            value={this.state.name!}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={(e) => this.handleChange(e)}
            value={this.state.password!}
            label="password"
            required
          />
          <CustomButton type="submit">SIGN IN</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
