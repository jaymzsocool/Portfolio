import React, { Component } from "react";
import Me from "../imgs/me-crop-500.jpg";
import "../css/personalInfo.scss"


class PersonalInfo extends Component {
  render() {
    return (
      <div className = "profile-info-wrap">
        <img src={Me} alt ="me"/>
        <div className = "profile-contact-info-wrap">
          <div className = "profile-contact-title">James McRae</div>
          <div className = "profile-contact-email">james.mcraejr@gmail.com</div>
          <div className = "profile-contact-phone">(904) 601 4096</div>
          <div className = "profile-contact-resume"><a href = "https://docs.google.com/document/d/1UPSBrRJONnkL37T4Jf_9Fwn3HN8MdlqygoieiFSL8vk/edit#heading=h.aagfqklm9zwt">Resume</a></div>
        </div>
      </div>
    );
  }
}
export default PersonalInfo;
