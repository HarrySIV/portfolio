import { useState } from 'react';

export interface Project {
  id: number;
  name: string;
  tools: string[];
  link: string;
  description: string;
  image: string;
}

export function ProjectsHook() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 0,
      name: `Restaurant Website`,
      tools: ['React', 'Express', 'MongoDB', 'TypeScript'],
      link: `https://restaurant-a24d7.web.app/`,
      description: `A simple SPA website for a fake restaurant, hosted on Firebase.`,
      image: '',
    },
    {
      id: 1,
      name: `Full-stack Todo`,
      tools: ['React', 'Express', 'MongoDB', 'TypeScript'],
      link: `https://todo-a8948.web.app/`,
      description: `A Todo app built using the MERN stack, hosted on heroku and firebase.`,
      image: '',
    },
    {
      id: 2,
      name: `Students`,
      tools: ['React', 'API'],
      link: `https://harrysiv.github.io/fetchstudents-app/`,
      description: `An application that fetches a list of students and displays them.`,
      image: '/assets/projects/students.jpg',
    },
    {
      id: 3,
      name: `Expenses-Tracker`,
      tools: ['React'],
      link: `https://harrysiv.github.io/expenses-chart/`,
      description: `A small application for users to input and track their expenses year by year.`,
      image: '/assets/projects/expenses.jpg',
    },
    // {
    //   id: 4,
    //   name: `D&D`,
    //   tools: ['JavaScript'],
    //   link: `https://harrysiv.github.io/Dndjs/`,
    //   description: `An app that creates a character and allows the user to fight an enemy, text-rpg style.`,
    //   image: '',
    // },
  ]);
  return { projects };
}
