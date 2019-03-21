import React, { Component } from "react";


class ProjectCard extends Component {
  render() {
    console.log(this.props.imgurl)
    return (
      <div>
        <img src = {this.props.imgurl} alt = {this.props.imgalt} />
        <div>
          <div>{this.props.title}</div>
          <div>{this.props.description}</div>
        </div>
      </div>
    );
  }
}
export default ProjectCard;