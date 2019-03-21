import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

class ProjectDisplay extends Component {
  render() {
    return (
      <div className = "projects-owrap">
        <div className = "projects-title">Projects</div>
        <div className = "projects-iwrap">
          {projects.map(p => (
            <ProjectCard {...p} key={p.id} />
          ))}
        </div>
      </div>
    );
  }
}
export default ProjectDisplay;
