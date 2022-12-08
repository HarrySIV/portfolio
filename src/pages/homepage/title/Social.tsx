import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Social() {
  return (
    <div className="flex flex-row items-center text-[1rem] sm:flex-col sm:text-[2vw] lg:text-[1vw]">
      <a
        href="https://www.linkedin.com/in/harrysandersiv"
        className="p-1 sm:p-0"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/HarrySIV" className="p-1 sm:p-0">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href=":" className="p-1 sm:p-0">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}
