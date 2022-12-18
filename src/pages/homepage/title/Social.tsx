import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Social() {
  const contactScroll = () => {
    document.getElementById('form')!.scrollIntoView();
  };
  return (
    <div className="flex flex-row items-center text-[1rem] sm:flex-col sm:text-sm lg:text-[1vw] xl:mt-4 2xl:mt-8">
      <a
        href="https://www.linkedin.com/in/harrysandersiv"
        className="p-1 sm:p-0"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/HarrySIV" className="p-1 sm:p-0">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <div className="p-1 sm:p-0 cursor-pointer" onClick={contactScroll}>
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  );
}
