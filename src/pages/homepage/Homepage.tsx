import React from 'react';
import { NavLinks } from '../../components/heading/nav/NavLinks';
import { Projects } from './projects/Projects';
import { Title } from './title/Title';

export function Homepage() {
  return (
    <>
      <Title />
      <hr />
      <NavLinks />
      <Projects />
    </>
  );
}
