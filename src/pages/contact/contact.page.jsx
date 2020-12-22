import React from "react";

import "./contact.page.styles.css";

import Navbar from "../../components/navbar/navbar.component";

import { FaWhatsapp } from "react-icons/fa";

import { FiPhone } from "react-icons/fi";

import { GrMail } from "react-icons/gr";

import NavbarForMobile from "../../components/navbarformobile/navbar.component";

import contactLogo from "../../assets/contact-png.png";

import Input from "../../components/input/input.component";

import CustomButton from "../../components/custombutton/custombutton.component";

import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="ContactContainer">
        <img src={contactLogo} alt="LogoContact" className="contactImg" />
        <div className="contact-details">
          <h2 className="contactUs">Contact Us</h2>
          <div className="IconContainer">
            <Link className="icon-link">
              <FiPhone />
            </Link>
            <Link className="icon-link">
              <FaWhatsapp />
            </Link>
            <Link className="icon-link">
              <GrMail />
            </Link>
          </div>
          <h2 className="OR">or</h2>
          <form className="ContactForm">
            <Input type="email" placeholder="Email" registrationInput />
            <Input type="text" placeholder="Full name" registrationInput />
            <Input type="text" placeholder="Message" registrationInput />
            <CustomButton guideButton>send message</CustomButton>
          </form>
        </div>
      </div>
      <NavbarForMobile />
    </div>
  );
};

export default ContactPage;
