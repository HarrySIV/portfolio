import React from 'react';
import { NavLink } from 'react-router-dom';

export function ErrorPage() {
  return (
    <>
      <h1>Oops... this page doesn't exist :(</h1>
      <h1>
        Go{' '}
        <NavLink to="/" className="text-blue-600 font-bold">
          HOME
        </NavLink>{' '}
        user!
      </h1>
    </>
  );
}
