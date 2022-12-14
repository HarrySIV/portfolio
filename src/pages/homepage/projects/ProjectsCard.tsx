import React, { useState } from 'react';
import { ProjectsHook } from '../../../hooks/ProjectsHook';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareCaretLeft,
  faSquareCaretRight,
} from '@fortawesome/free-solid-svg-icons';

export function ProjectsCard() {
  const [showAlt, setShowAlt] = useState(false);
  const { projects } = ProjectsHook();

  const clickHandler = () => {
    setShowAlt(!showAlt);
  };
  return (
    <>
      {projects.map((project) => (
        <div
          className="project-link"
          key={project.id}
          style={{
            backgroundImage: project.image ? `url(${project.image})` : 'none',
          }}
        >
          <button
            className="z-20 text-4xl"
            onClick={clickHandler}
            disabled={!showAlt}
          >
            <FontAwesomeIcon icon={faSquareCaretLeft} />
          </button>
          <a className="flex flex-col" href={project.link}>
            <div className="z-10 bg-opacity-0 text-black flex items-center">
              <div className="px-4 m-8 bg-white/80">
                {!showAlt ? (
                  <h2 className="m-0 p-4 whitespace-nowrap md:text-3xl lg:text-5xl xl:text-7xl">
                    {project.name}
                  </h2>
                ) : (
                  <h6 className="m-0 p-4 md:text-xl lg:text-2xl xl:text-3xl">
                    {project.description}
                  </h6>
                )}
              </div>
            </div>
            <h5>{project.tools}</h5>
          </a>
          <button
            className="z-20 text-4xl"
            onClick={clickHandler}
            disabled={showAlt}
          >
            <FontAwesomeIcon icon={faSquareCaretRight} />
          </button>
        </div>
      ))}
    </>
  );
}
