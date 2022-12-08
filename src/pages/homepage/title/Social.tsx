import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Social() {
  return (
    <div className="flex flex-col">
      <a href="https://www.linkedin.com/in/harrysandersiv">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/HarrySIV">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  );
}
