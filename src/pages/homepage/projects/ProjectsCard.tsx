import React, { useState } from 'react';
import { useProjects } from '../../../hooks/useProjects';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareCaretLeft,
  faSquareCaretRight,
} from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../../hooks/useProjects';

export function ProjectsCard() {
  const [altArr, setAltArr] = useState<string[]>([]);
  const { projects } = useProjects();

  const showTitleHandler = (project: Project) => {
    const newAltArr = altArr.filter((alt) => alt !== project.name);
    setAltArr(newAltArr);
  };

  const showAltHandler = (project: Project) => {
    const newAltArr = [...altArr, project.name];
    setAltArr(newAltArr);
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
            className={`z-20 text-xl md:text-2xl lg:text-4xl ${
              altArr.filter((alt) => alt === project.name).length === 0
                ? 'text-gray-400'
                : 'text-black'
            }`}
            onClick={() => showTitleHandler(project)}
            disabled={
              altArr.filter((alt) => alt === project.name).length !== 0
                ? false
                : true
            }
          >
            <FontAwesomeIcon icon={faSquareCaretLeft} />
          </button>
          <a className="w-0 flex flex-col" href={project.link}>
            <div className="z-10 m-0 flex items-center justify-evenly">
              <div className="px-4 m-8 bg-white/80">
                {altArr.filter((alt) => alt === project.name).length === 0 ? (
                  <h2 className="m-0 p-4 whitespace-nowrap md:text-3xl lg:text-5xl xl:text-7xl">
                    {project.name}
                  </h2>
                ) : (
                  <h6 className="m-0 p-4 w-[30vw] text-xs md:text-xl lg:text-2xl xl:text-3xl">
                    {project.description}
                  </h6>
                )}
              </div>
            </div>
            <div className="p-1 rounded-lg flex justify-around">
              {project.tools.map((tool) => {
                return (
                  <h5
                    key={tool}
                    className={`${
                      tool === 'React'
                        ? 'bg-blue-300'
                        : tool === 'Express'
                        ? 'bg-green-600'
                        : tool === 'JavaScript'
                        ? 'bg-yellow-300'
                        : tool === 'MongoDB'
                        ? 'bg-green-800'
                        : tool === 'API'
                        ? 'bg-red-700'
                        : tool === 'TypeScript'
                        ? 'bg-blue-700'
                        : 'bg-white'
                    } p-2 rounded-3xl text-white mx-4 border-2 border-solid border-stone-800`}
                  >
                    {tool}
                  </h5>
                );
              })}
            </div>
          </a>
          <button
            className={`z-20 text-xl md:text-2xl lg:text-4xl ${
              altArr.filter((alt) => alt === project.name).length !== 0
                ? 'text-gray-400'
                : 'text-black'
            }`}
            onClick={() => showAltHandler(project)}
            disabled={
              altArr.filter((alt) => alt === project.name).length !== 0
                ? true
                : false
            }
          >
            <FontAwesomeIcon icon={faSquareCaretRight} />
          </button>
        </div>
      ))}
    </>
  );
}
