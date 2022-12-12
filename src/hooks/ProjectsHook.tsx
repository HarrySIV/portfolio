import { useState } from 'react';

export function ProjectsHook() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      name: `Restaurant Website`,
      tools: 'React/Routing, Firebase',
      link: `https://restaurant-a24d7.web.app/`,
      description: `A simple SPA website for a fake restaurant, hosted on Firebase.`,
      image: '',
    },
    {
      id: 1,
      name: `MERN Todo`,
      tools: 'MERN, Heroku, Firebase',
      link: `https://todo-a8948.web.app/`,
      description: `A Todo app built using the MERN stack, hosted on heroku and firebase.`,
      image: '',
    },
    {
      id: 2,
      name: `Expenses-Tracker`,
      tools: 'React',
      link: `https://harrysiv.github.io/expenses-chart/`,
      description: `A small application for users to input and track their expenses year by year.`,
      image: '../../../assets/projects/students.png',
    },
    {
      id: 3,
      name: `Students`,
      tools: 'React, Axios',
      link: `https://harrysiv.github.io/fetchstudents-app/`,
      description: `An application that fetches a list of students and displays them.`,
      image: '../../../assets/projects/students.png',
    },
    {
      id: 4,
      name: `D&D`,
      tools: 'Javascript',
      link: `https://harrysiv.github.io/Dndjs/`,
      description: `An app that creates a character and allows the user to fight an enemy, text-rpg style.`,
      image: '',
    },
  ]);
  return { projects };
}
