import React from "react";
import { useSelector } from "react-redux";
import { selectProjects } from "../redux/projectsSlice";
import Project from "./ProjectHome";

const ProjectList: React.FC = () => {
  const projects = useSelector(selectProjects);
  return (
    <div>
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          details={project.details}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectList;
