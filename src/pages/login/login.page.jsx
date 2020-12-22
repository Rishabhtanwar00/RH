import React from "react";

import "./login.page.styles.css";

import Navbar from "../../components/navbar/navbar.component";

import NavbarForMobile from "../../components/navbarformobile/navbar.component";

import LoginSvg from "../../assets/login-svg.png";

import Input from "../../components/input/input.component";

import CustomButton from "../../components/custombutton/custombutton.component.jsx";

class Login extends React.Component {
  render() {
    return (
      <div className="container3">
        <Navbar />
        <div className="login-container">
          <img src={LoginSvg} alt="loginSvg" className="Login-Svg" />
          <form className="LoginForm">
            <h2 className="login">Login</h2>
            <Input
              type="email"
              placeholder="Enter your RH+ id"
              registrationInput
            />
            <Input type="password" placeholder="Password" registrationInput />
            <CustomButton className="submitbutton" guideButton>
              Login
            </CustomButton>
          </form>
        </div>
        <NavbarForMobile />
      </div>
    );
  }
}

export default Login;
