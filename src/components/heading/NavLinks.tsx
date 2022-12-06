import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </ul>
  );
}
