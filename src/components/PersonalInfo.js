import React, { Component } from "react";
import Me from "../imgs/me-crop-500.jpg";

class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <img src={Me} />
        <div>
          <div>James McRae</div>
          <div>james.mcraejr@gmail.com</div>
          <div>(904) 601 4096</div>
          <div><a href = "https://docs.google.com/document/d/1UPSBrRJONnkL37T4Jf_9Fwn3HN8MdlqygoieiFSL8vk/edit#heading=h.aagfqklm9zwt" >Resume</a></div>
        </div>
      </div>
    );
  }
}
export default PersonalInfo;
