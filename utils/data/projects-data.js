import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';
import chatApp from '/public/image/travel.jpg'; 
import uberClone from '/public/image/travel.jpg'; 

export const projectsData = [
  {
    id: 1,
    name: 'MERN Stack Todo App',
    description:
      "A full-stack Todo app with user authentication where users can sign up, log in, and manage personal todos (create, edit, delete, toggle). Features protected routes, user-specific data, and persistent storage with MongoDB.",
    tools: [
      'React.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    role: 'Full Stack Developer',
    code: 'https://github.com/your-username/mern-todo-app',
    demo: 'https://todo-mern-tau.vercel.app/',
    image: travel,
  },
  {
    id: 2,
    name: 'ProShop – Full-Stack E-Commerce',
    description:
      'A complete e-commerce platform built with the MERN stack, including user auth, cart, order flow, and admin product management. Integrated Stripe for payments and EmailJS for customer communication.',
    tools: [
      'React.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Stripe',
      'EmailJS',
    ],
    role: 'Full Stack Developer',
    code: 'https://github.com/your-username/warsi-trader',
    demo: 'https://warsi-trader.vercel.app/',
    image: realEstate,
  },
  {
    id: 3,
    name: 'Next.js Blog Platform',
    description:
      'A full-stack blog platform built using Next.js 14 App Router and MongoDB, where admins can create and manage posts while users view and read blogs. Features include email subscriptions, server actions, and a responsive design.',
    tools: ['Next.js 14', 'Tailwind CSS', 'MongoDB', 'TypeScript'],
    role: 'Full Stack Developer',
    code: 'https://github.com/your-username/nextjs-blog',
    demo: 'https://your-blog-app.vercel.app/',
    image: crefin,
  },
  {
    id: 4,
    name: 'NestJS WebSocket Chat App',
    description:
      'A real-time private messaging app built with NestJS, WebSockets (Socket.IO), and MySQL. Includes JWT authentication, user management, and Redis-based Pub/Sub architecture for scalable socket communication.',
    tools: [
      'NestJS',
      'Socket.IO',
      'MySQL',
      'TypeORM',
      'Redis',
      'JWT',
      'TypeScript',
    ],
    role: 'Backend Developer',
    code: 'https://github.com/your-username/nestjs-chat-app',
    demo: 'https://nestjs-chat-app.vercel.app/',
    image: chatApp,
  },
  {
    id: 5,
    name: 'Real-Time Uber Clone (In Progress)',
    description:
      'A real-time ride booking application inspired by Uber. Users can search for locations, choose a vehicle, and book rides. Built using WebSockets, Redis, MongoDB, and GSAP animations for interactive UI transitions.',
    tools: [
      'React.js',
      'NestJS',
      'Redis',
      'WebSockets',
      'MongoDB',
      'GSAP',
      'TypeScript',
    ],
    role: 'Full Stack Developer',
    code: 'https://github.com/your-username/uber-clone',
    demo: 'https://uber-clone.vercel.app/',
    image: uberClone,
  },
];
