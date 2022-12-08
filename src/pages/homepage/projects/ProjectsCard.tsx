import React from 'react';
import { ProjectsHook } from '../../../hooks/ProjectsHook';

export function ProjectsCard() {
  const { projects } = ProjectsHook();
  return (
    <>
      {projects.map((project) => (
        <a
          className="w-40 min-w-[150px] overflow-hidden bg-white m-4 p-4 rounded text-center"
          href={project.link}
        >
          <div className="h-16 p-4">
            <h2 className="m-0 p-0">{project.name}</h2>
          </div>
          <hr />
          <h6 id={`${project.id}`}>{project.description}</h6>
          <h5>{project.tools}</h5>
        </a>
      ))}
    </>
  );
}
