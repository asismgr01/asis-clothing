import React from "react";
import "./sign-up.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      passwordConfirmed: "",
    };
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState(
      {
        [name]: value,
      }
      //,() => console.log(this.state)
    );
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, passwordConfirmed } = this.state;
    if (password !== passwordConfirmed) {
      alert("Password did not match with confirm password");
      this.setState({
        password: "",
        passwordConfirmed: "",
      });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user,{displayName});
      this.setState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirmed: "",
      });
    } catch (error) {
      console.log("error signing up.", error.message);
    }
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign-up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Name"
          />
          <FormInput
            type="text"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
          />
          <FormInput
            type="password"
            name="passwordConfirmed"
            value={this.state.passwordConfirmed}
            handleChange={this.handleChange}
            label="Confirm Password"
          />
          <div className="buttons">
            <CustomButton type="submit" width="large">
              Sign Up
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
