import React from 'react';
import { Contact } from './Contact';
import { Projects } from './projects/Projects';
import { Title } from './title/Title';

export function Homepage() {
  return (
    <>
      <Title />
      <hr />
      <div className="bg-gradient-to-t from-black via-black/90 to-[#22c5f259]/50 font-['Mate']">
        {/* <NavLinks /> */}
        <Projects />
      </div>
      <Contact />
    </>
  );
}
