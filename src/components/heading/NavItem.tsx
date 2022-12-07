import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavItem({ name, route }: { name: string; route: string }) {
  return (
    <li className="m-0 p-1">
      <NavLink to={route}>{name}</NavLink>
    </li>
  );
}
