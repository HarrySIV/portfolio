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
        <a
          key={project.id}
          className="project-link"
          style={{
            backgroundImage: project.image ? `url(${project.image})` : 'none',
          }}
          href={project.link}
        >
          <div className="z-10 bg-opacity-0 flex items-center">
            {!showAlt ? (
              <button
                className="z-20 border-black bg-white"
                onClick={clickHandler}
              >
                <FontAwesomeIcon icon={faSquareCaretLeft} />
              </button>
            ) : null}
            <h2 className="m-0 p-4 text-[6vw] md:text-6xl text-black bg-white/80">
              {project.name}
            </h2>
            {!showAlt ? (
              <button
                className="z-20 border-black bg-white"
                onClick={clickHandler}
              >
                <FontAwesomeIcon icon={faSquareCaretRight} />
              </button>
            ) : null}
          </div>
          <h6 id={`${project.id}`}>{project.description}</h6>
          <h5>{project.tools}</h5>
        </a>
      ))}
    </>
  );
}
