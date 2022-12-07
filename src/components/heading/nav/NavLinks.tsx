import React from 'react';
import { NavItem } from '../NavItem';

const pages = [
  { name: 'Home', route: '/' },
  { name: 'Blog', route: '/blog' },
];

export function NavLinks() {
  return (
    <ul className="m-0 p-1 flex flex-row justify-evenly">
      {pages.map((page) => (
        <NavItem name={page.name} route={page.route} />
      ))}
    </ul>
  );
}
