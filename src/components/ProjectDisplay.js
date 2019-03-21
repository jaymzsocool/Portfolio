import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

class ProjectDisplay extends Component {
  render() {
    return (
      <div>
        <div>Projects</div>
        {projects.map(p => (
          <ProjectCard {...p} key={p.id} />
        ))}
      </div>
    );
  }
}
export default ProjectDisplay;
