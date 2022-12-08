import React from 'react';
import { NavLinks } from '../../components/heading/nav/NavLinks';
import { Projects } from './projects/Projects';
import { Title } from './title/Title';

export function Homepage() {
  return (
    <>
      <Title />
      <hr />
      <div className="bg-gradient-to-t from-black/95 to-[#22c5f259]/50">
        {/* <NavLinks /> */}
        <Projects />
      </div>
    </>
  );
}
