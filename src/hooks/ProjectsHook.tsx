import { useState } from 'react';

export function ProjectsHook() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      name: `MERN Todo`,
      tools: 'MERN, Heroku, Firebase',
      link: `https://todo-a8948.web.app/`,
      description: `A Todo app built using the MERN stack, hosted on heroku and firebase.`,
    },
    {
      id: 1,
      name: `Restaurant Website`,
      tools: 'React/Routing, Firebase',
      link: `https://not-a-restaurant.firebaseapp.com/`,
      description: `A simple SPA website for a fake restaurant, hosted on Firebase.`,
    },
    {
      id: 2,
      name: `Expenses-Tracker`,
      tools: 'React',
      link: `https://harrysiv.github.io/expenses-chart/`,
      description: `A small application for users to input and track their expenses year by year.`,
    },
    {
      id: 3,
      name: `Star Wars Ships`,
      tools: 'React, Axios',
      link: `https://harrysiv.github.io/swships/`,
      description: `An application that fetches Star Wars ship info and displays it.`,
    },
    {
      id: 4,
      name: `Students`,
      tools: 'React, Axios',
      link: `https://harrysiv.github.io/fetchstudents-app/`,
      description: `An application that fetches a list of students and displays them.`,
    },
    {
      id: 5,
      name: `Jokes`,
      tools: 'Javascript, Axios',
      link: `https://harrysiv.github.io/jokes/`,
      description: `An app that fetches a random joke and displays it.`,
    },
    {
      id: 6,
      name: `D&D`,
      tools: 'Javascript',
      link: `https://harrysiv.github.io/Dndjs/`,
      description: `An app that creates a character and allows the user to fight an enemy, text-rpg style.`,
    },
  ]);
  return { projects };
}
