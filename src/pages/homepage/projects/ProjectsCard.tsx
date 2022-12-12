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
          className="h-[200px] w-2/3 min-w-[150px] max-w-[750px] overflow-hidden bg-white m-4 p-4 rounded text-center shadow-2xl relative flex justify-center"
          href={project.link}
        >
          {/* {project.image ? (
            <img
              src={require(project.image).default}
              alt="Website snippet"
              className="z-0 absolute"
            />
          ) : null} */}
          <div className="h-16 p-4 pt-12 z-10 bg-opacity-0 absolute">
            <h2 className="m-0 p-4 text-6xl text-black bg-white/80">
              {project.name}
            </h2>
          </div>
          <hr />
          <h6 id={`${project.id}`}>{project.description}</h6>
          <h5>{project.tools}</h5>
        </a>
      ))}
    </>
  );
}
