import React from 'react';
import { Projects } from './projects/Projects';
import { Title } from './title/Title';

export function Homepage() {
  return (
    <>
      <Title />
      <hr />
      <Projects />
    </>
  );
}
