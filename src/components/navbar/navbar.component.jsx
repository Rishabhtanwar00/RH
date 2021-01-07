import React from "react";

import { MenuItems } from "./menuitems";

import "./navbar.styles.css";

import CustomButton from "../custombutton/custombutton.component";

import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="NavbarItems">
      <img className="navbar-logo" src={logo} alt="navbar-logo"></img>
      <div className="links">
        <div className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <Link
                key={index}
                className={item.cName}
                href={item.url}
                to={item.to}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="buttons">
          <Link to="/registration">
            <CustomButton className="nav-buttons" navBarButton>
              Register
            </CustomButton>
          </Link>
          <Link to="/login">
            <CustomButton className="nav-buttons" navBarButton>
              Log in
            </CustomButton>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export const NavbarAfter = () => {
  return (
    <nav className="NavbarItems">
      <img className="navbar-logo" src={logo} alt="navbar-logo"></img>
      <div className="links">
        <div className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <Link
                key={index}
                className={item.cName}
                href={item.url}
                to={item.to}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="buttons">
          <Link to="/dashboard">
            <CustomButton className="nav-buttons" navBarButton>
              dashboard
            </CustomButton>
          </Link>
          <Link to="/">
            <CustomButton className="nav-buttons" navBarButton>
              Log out
            </CustomButton>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
