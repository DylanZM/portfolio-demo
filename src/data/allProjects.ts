import medisysImg from '../assets/projects/medisys.svg';
import playgroundImg from '../assets/projects/playground.png';
import taskmanagerImg from '../assets/projects/task-manager.png';
import img2048 from '../assets/projects/2048.png';
import imgAstroBlog from '../assets/projects/astro-blog.png';
import imgCookies from '../assets/projects/cookies.png';
import { thumb } from '../lib/github';

export interface ProjectTag {
  name: string;
  icon: string;
}

export interface Project {
  img: string;
  alt: string;
  title: string;
  description: string;
  github: string;
  demo?: string;
  tags: ProjectTag[];
}

const GH = 'https://github.com/DylanZM';

export const allProjects: Project[] = [
  {
    img: medisysImg.src,
    alt: 'MediSys',
    title: 'MediSys',
    description: 'A management system for clinics and hospitals.',
    github: `${GH}/medisys`,
    tags: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    img: taskmanagerImg.src,
    alt: 'Task Manager',
    title: 'Task Manager',
    description: 'Task management app with authentication and real-time boards.',
    github: `${GH}/task-manager`,
    demo: 'https://task-manager-sigma-pied-92.vercel.app/login',
    tags: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    img: playgroundImg.src,
    alt: 'Playground',
    title: 'Playground',
    description: 'Online compiler Playground for C/C++.',
    github: `${GH}/cgo`,
    demo: 'https://cgo-playground.onrender.com/',
    tags: [
      { name: 'Vite', icon: 'vite' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    img: img2048.src,
    alt: '2048',
    title: '2048',
    description: 'The classic 2048 puzzle game for the browser.',
    github: `${GH}/2048`,
    demo: 'https://2048-five-iota.vercel.app',
    tags: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'JavaScript', icon: 'javascript' },
    ],
  },
  {
    img: thumb('Api-clinica', 'Python'),
    alt: 'Api-clinica',
    title: 'Api-clinica',
    description: 'REST API for managing a clinic.',
    github: `${GH}/Api-clinica`,
    tags: [{ name: 'Python', icon: 'python' }],
  },
  {
    img: imgAstroBlog.src,
    alt: 'Astro-app',
    title: 'Astro-app',
    description: 'Personal blog built with Astro and TypeScript.',
    github: `${GH}/Astro-app`,
    demo: 'https://astro-blog-zm.vercel.app',
    tags: [
      { name: 'Astro', icon: 'astro' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
  },
  {
    img: thumb('beautyroom', 'Next.js'),
    alt: 'beautyroom',
    title: 'beautyroom',
    description: 'Booking platform for beauty salons.',
    github: `${GH}/beautyroom`,
    tags: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    img: thumb('bleach-api-client-python', 'Python'),
    alt: 'bleach-api-client-python',
    title: 'bleach-api-client-python',
    description: 'Python client for the Bleach API.',
    github: `${GH}/bleach-api-client-python`,
    tags: [{ name: 'Python', icon: 'python' }],
  },
  {
    img: thumb('bleach_Clone', 'HTML'),
    alt: 'bleach_Clone',
    title: 'bleach_Clone',
    description: 'Fan-made Bleach website clone.',
    github: `${GH}/bleach_Clone`,
    demo: 'https://bleach-clone-page.vercel.app',
    tags: [
      { name: 'Vite', icon: 'vite' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    img: imgCookies.src,
    alt: 'Cookies-challenge',
    title: 'Cookies-challenge',
    description: 'Daily AI-generated challenges.',
    github: `${GH}/Cookies-challenge`,
    demo: 'https://cookies-challenge-game.vercel.app/',
    tags: [
      { name: 'Astro', icon: 'astro' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    img: thumb('dashboard_metricas', 'React'),
    alt: 'dashboard_metricas',
    title: 'dashboard_metricas',
    description: 'Dashboard for visualizing key metrics.',
    github: `${GH}/dashboard_metricas`,
    tags: [
      { name: 'React', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    img: thumb('Paws', 'HTML'),
    alt: 'Paws',
    title: 'Paws',
    description: 'Showcase site for a pet adoption initiative.',
    github: `${GH}/Paws`,
    tags: [
      { name: 'HTML', icon: 'html' },
      { name: 'Python', icon: 'python' },
      { name: 'CSS', icon: 'css' },
    ],
  },
  {
    img: thumb('Poke-Tui', 'Go'),
    alt: 'Poke-Tui',
    title: 'Poke-Tui',
    description: 'A Pokédex built in the terminal.',
    github: `${GH}/Poke-Tui`,
    tags: [{ name: 'Go', icon: 'go' }],
  },
  {
    img: thumb('Roblox-Bot', 'Python'),
    alt: 'Roblox-Bot',
    title: 'Roblox-Bot',
    description: 'Discord bot that connects to Roblox.',
    github: `${GH}/Roblox-Bot`,
    tags: [{ name: 'Python', icon: 'python' }],
  },
  {
    img: thumb('VetTrack', 'HTML'),
    alt: 'VetTrack',
    title: 'VetTrack',
    description: 'Tracking app for veterinary clinics.',
    github: `${GH}/VetTrack`,
    tags: [
      { name: 'HTML', icon: 'html' },
      { name: 'Python', icon: 'python' },
      { name: 'CSS', icon: 'css' },
    ],
  },
  {
    img: thumb('Weather-Python', 'Python'),
    alt: 'Weather-Python',
    title: 'Weather-Python',
    description: 'Python project for weather data.',
    github: `${GH}/Weather-Python`,
    tags: [{ name: 'Python', icon: 'python' }],
  },
  {
    img: thumb('WebSolutions', 'HTML'),
    alt: 'WebSolutions',
    title: 'WebSolutions',
    description: 'Showcase site for web solutions.',
    github: `${GH}/WebSolutions`,
    demo: 'https://web-solutions-lz.vercel.app/',
    tags: [{ name: 'HTML', icon: 'html' }],
  },
  {
    img: thumb('ZynChat', 'TypeScript'),
    alt: 'ZynChat',
    title: 'ZynChat',
    description: 'Real-time chat application.',
    github: `${GH}/ZynChat`,
    tags: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
];
