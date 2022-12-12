import React from 'react';
import { ProjectsHook } from '../../../hooks/ProjectsHook';

export function ProjectsCard() {
  const { projects } = ProjectsHook();
  return (
    <>
      {projects.map((project) => (
        <a
          key={project.id}
          className="project-link"
          style={{
            backgroundImage: project.image ? `url(${project.image})` : 'none',
          }}
          href={project.link}
        >
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
