import React from "react";
import Project from "./Project";

function ProjectList(props) {
  let projects = props.data.map((project) => {
    return (
      <Project
        data-aos="fade-up"
        href={project.href}
        key={project.id}
        image={project.image}
        title={project.title}
        description={project.description}
      />
    );
  });
  return projects;
}

export default ProjectList;
