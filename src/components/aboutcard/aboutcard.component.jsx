import React from "react";

import "./aboutcard.styles.css";

import { FiUser, FiLinkedin, FiMail, FiGlobe } from "react-icons/fi";

import { FaInstagram } from "react-icons/fa";

const AboutCard = (card) => {
  return (
    <div className={`${card.classname} aboutcard`} key={card.id}>
      <div className="about-icon">
        <FiUser />
      </div>
      <p className="aboutcard-name">{card.name}</p>
      <div className="about-links">
        <div className="about-link">
          <div className="link-icon">
            <FiGlobe />
          </div>
          <p>{card.link1}</p>
        </div>
        <div className="about-link">
          <div className="link-icon">
            <FiLinkedin />
          </div>
          <p>{card.link2}</p>
        </div>
        <div className="about-link">
          <div className="link-icon">
            <FaInstagram />
          </div>
          <p>{card.link3}</p>
        </div>
        <div className="about-link">
          <div className="link-icon">
            <FiMail />
          </div>
          <p>{card.link4}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
