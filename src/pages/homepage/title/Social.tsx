import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faDiscord,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Social() {
  return (
    <div className="flex flex-col">
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faDiscord} />
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  );
}
