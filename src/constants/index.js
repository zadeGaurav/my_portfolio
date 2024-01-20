import {
  mobile,
  backend,
  
  web,
  javascript,
 
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
 
  git,
 

  python,
  h_c_js,
  reactlogo,
  ytCloneImg, 
  portfolioImg,
  foodLoveImg,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Python Developer",
    company_name: "",
    icon: python,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developed Full Stack applications using Django framework. Using Django MVT model, collection of three important components Model View and Template.",
      "Created file input/ output project in python and performed create, read, update, and delete on simple text file.",
      "Conceptual understanding of Object Oriented Programing concepts.",
    ],
  },
  {
    title: "Web Developer",
    company_name: '',
    icon: h_c_js,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developed many resposive small web applications using HTML, CSS and JS like digital clock, calculator, to-do list app",
      "Educate myself with a Javascript tutorial and come up with strong conceptual knowledge of closures, event loop , heigher order functions and promises ",
      "Implementing responsive design also check some of browser API's.",
    ],
  },
  {
    title: "React Developer",
    company_name: "",
    icon: reactlogo,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",
      "Effectively used the React hooks in my projects, such as use State, use Effect, use Callback and use Ref etc.",
      "Use state management library with react ",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];


const projects = [
  {
    name: "YouTube clone",
    description:
      "Built a responsive React JS application consisting of video sections, custom categories, channel pages, and, you can play videos straight from this YouTube Clone App",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material UI",
        color: "green-text-gradient",
      },
      {
        name: "media queries",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "blue-text-gradient",
      }
    ],
    image: ytCloneImg,
    source_code_link: "https://github.com/zadeGaurav",
  },
  {
    name: "Portfolio site",
    description:
    "3d portfolio site buit with Vite app which uses three.js, a 3D grapics library and has load, create, and customised modales. Make use of higher order components and other industry-standard best practices. Used tailwind CSS for styling ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      }
    ],
    image: portfolioImg,
    source_code_link: "https://github.com/zadeGaurav",
  },
  {
    name: "Food-Love (mern app)",
    description:
      "A comprehensive food ordering platform that allows users to choice the food category, add multiple quantity and offers to check cart items if user signed up and entered valid credetials.",
    tags: [
      // MongoDB, Express.js, React JS and Node.js.
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "React JS",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      }
    ],
    image: foodLoveImg,
    source_code_link: "https://github.com/zadeGaurav/food_love",
  },
];

export { services, technologies, experiences,  projects };



  