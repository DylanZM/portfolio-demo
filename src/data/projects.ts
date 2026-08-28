import medisysImg from '../assets/projects/medisys.svg';
import playgroundImg from '../assets/projects/playground.png';
import taskmanagerImg from '../assets/projects/task-manager.png';

export interface ProjectTag {
  name: string;
  icon: string;
}

export interface Project {
  img: string;
  alt: string;
  title: string;
  titleKey: string;
  descKey: string;
  description: string;
  github: string;
  demo?: string;
  tags: ProjectTag[];
}

export const projects: Project[] = [
  {
    img: medisysImg.src,
    alt: 'MediSys',
    title: 'MediSys',
    titleKey: 'projects.medisys.title',
    descKey: 'projects.medisys.desc',
    description: 'A management system for clinics and hospitals.',
    github: 'https://github.com/DylanZM/MediSys',
    tags: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    img: playgroundImg.src,
    alt: 'E-Commerce',
    title: 'Playground',
    titleKey: 'projects.playground.title',
    descKey: 'projects.playground.desc',
    description: 'Online compiler Playground for C/C++.',
    github: 'https://github.com/DylanZM/cgo',
    demo: 'https://cgo-playground.onrender.com/',
    tags: [
      { name: 'Vite', icon: 'vite' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    img: taskmanagerImg.src,
    alt: 'Task Manager',
    title: 'Task Manager',
    titleKey: 'projects.taskmanager.title',
    descKey: 'projects.taskmanager.desc',
    description: 'Task management application with user authentication.',
    github: 'https://github.com/DylanZM/task-manager',
    demo: 'https://task-manager-sigma-pied-92.vercel.app/login',
    tags: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
];
