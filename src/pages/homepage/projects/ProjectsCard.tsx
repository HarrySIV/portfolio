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
        <div className="relative">
          <button
            className="z-20 absolute left-0"
            onClick={clickHandler}
            disabled={!showAlt}
          >
            <FontAwesomeIcon icon={faSquareCaretLeft} />
          </button>
          <button
            className="z-20 absolute right-0"
            onClick={clickHandler}
            disabled={showAlt}
          >
            <FontAwesomeIcon icon={faSquareCaretRight} />
          </button>
          <a
            key={project.id}
            className="project-link"
            style={{
              backgroundImage: project.image ? `url(${project.image})` : 'none',
            }}
            href={project.link}
          >
            <div className="z-10 pt-8 w-[100vw] bg-opacity-0 text-black flex flex-row items-center">
              <div className="px-4 m-8 w-[50vw] bg-white/80 flex items-center justify-between">
                {!showAlt ? (
                  <h2 className="m-0 p-4 whitespace-nowrap">{project.name}</h2>
                ) : (
                  <h6>{project.description}</h6>
                )}
              </div>
            </div>
            <h5>{project.tools}</h5>
          </a>
        </div>
      ))}
    </>
  );
}
