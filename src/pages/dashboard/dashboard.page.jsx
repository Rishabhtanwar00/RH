import React from "react";
import "./dashboard.styles.css";
import SenderImage from "../../assets/home-1.png";
import CustomButton from "../../components/custombutton/custombutton.component";

export default function DashBoard() {
  return (
    <div className="containerEmailPage">
      <div className="containerButtons">
        <CustomButton guideButton className="searchBloodBtn">
          Search Blood
        </CustomButton>
        <CustomButton guideButton className="updateBloodBtn">
          Update Blood
        </CustomButton>
        <CustomButton guideButton className="addPostBtn">
          Add Post
        </CustomButton>
        <CustomButton guideButton className="sendEmailsBtn">
          send Emails
        </CustomButton>
      </div>
      <img src={SenderImage} alt="imageSend" className="senderImage" />
      <p className="mailStatem-ent">Mail sends to every donor</p>
    </div>
  );
}
