import React from 'react';
import { ProjectsHook } from '../../../hooks/ProjectsHook';

import students from '../../../assets/projects/students.png';

export function ProjectsCard() {
  const { projects } = ProjectsHook();
  return (
    <>
      {projects.map((project) => (
        <a
          key={project.id}
          style={{ backgroundImage: `url(${students})` }}
          className="h-[200px] w-2/3 min-w-[150px] max-w-[750px] overflow-hidden bg-white m-4 p-4 rounded text-center shadow-2xl relative"
          href={project.link}
        >
          <div className="h-16 p-4 z-10 bg-opacity-0">
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
