import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'MERN Stack Todo App',
        description: "A full-stack, user-authenticated Todo application where users can sign up, log in, and manage their personal todos (add, edit, delete, toggle). Includes protected routes and user-specific data handling.",
        tools: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
        role: 'Full Stack Developer',
        code: 'https://github.com/your-username/mern-todo-app',
        demo: 'https://todo-mern-tau.vercel.app/',
        image: travel,
    },
    {
        id: 2,
        name: 'E Store (E-Commerce Website)',
        description: "A hardware e-commerce platform where users can browse products, add them to the cart, and place orders, while admins manage products dynamically. Features authentication, a responsive UI, and efficient state management.",
        tools: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Redux Toolkit', 'Firebase'],
        role: 'Front End Developer',
        code: 'https://github.com/your-username/e-store',
        demo: 'https://e-store.netlify.app/',
        image: crefin,
    },
    {
        id: 3,
        name: 'Warsi Trader Full-Stack E-Commerce',
        description: "A MERN based e-commerce platform where users shop, and admins manage inventory with full CRUD functionality, secure authentication, Stripe payments, and EmailJS integration.",
        tools: ['React.js', 'Redux Toolkit', 'Context API', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Stripe', 'EmailJS'],
        role: 'Full Stack Developer',
        code: 'https://github.com/your-username/warsi-trader',
        demo: 'https://warsi-trader.vercel.app/',
        image: realEstate,
    },
];
