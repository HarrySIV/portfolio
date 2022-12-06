import React from 'react';
import { ProjectsHook } from '../../../hooks/ProjectsHook';

export function ProjectsCard() {
  const { projects } = ProjectsHook();
  return (
    <>
      {projects.map((project) => (
        <a className="card" href={project.link}>
          <div className="topCard">
            <h2 className="projName">{project.name}</h2>
          </div>
          <hr />
          <h6 id={`${project.id}`}>{project.description}</h6>
          <h5>{project.tools}</h5>
        </a>
      ))}
    </>
  );
}
