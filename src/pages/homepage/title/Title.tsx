import React from 'react';
import { Social } from './Social';

export function Title() {
  return (
    <div className="flex flex-col items-center sm:items-stretch sm:flex-row sm:justify-center m-0 pt-96 h-screen w-full">
      <h1 className="text-blue-500 text-[4vw] m-0 p-0">
        HARRY SCHEETZ SANDERS IV
      </h1>
      <Social />
    </div>
  );
}
