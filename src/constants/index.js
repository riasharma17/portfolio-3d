import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
 bluestock,
 celebal,
 coincent,
 javaIcon,
  
  laughboost,
  skycast,
  sundown,
  mobile2,
  creator2,
  eera,
  dashboard,
  booksnap,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React.js & Next.js Developer",
    icon: mobile2, 
  },
  {
    title: "Backend & API Integrator",
    icon: backend,
  },
  {
    title: "AI & IoT Project Builder",
    icon: creator2, 
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
    name: "TypeScript",
    icon: typescript,
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
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
 

];


const experiences = [
  {
    title: "SOftware Devloper Intern",
    company_name: "Bluestock Fintech",
    icon: bluestock,
    iconBg: "#383E56",
    date: "Dec 2024 – Jan 2025",
    points: [
      "Analyzed data workflows and improved operational efficiency by 20%.",
      "Conducted fintech market research and provided strategic insights.",
      "Assisted in product optimization to improve user adoption.",
    ],
  },
    {
    title: "Machine Learning Intern",
    company_name: "Coincent",
    icon: coincent, 
    iconBg: "#E6DEDD",
    date: "May 2022 – July 2022",
    points: [
      "Built and trained ML models using Python and real-world datasets.",
      "Worked on supervised learning algorithms including regression and classification.",
      "Analyzed model performance and improved accuracy using data preprocessing techniques.",
    ],
  },
  {
    title: "React.js Intern",
    company_name: "Celebal Technologies",
    icon: celebal,
    iconBg: "#E6DEDD",
    date: "May 2025",
    points: [
      "Built responsive UI components using React.js and Tailwind CSS.",
      "Integrated REST APIs for dynamic data rendering and user interaction.",
      "Collaborated with developers in an Agile environment.",
    ],
  },
  {
    title: "Java Developer Intern",
    company_name: "Computational Coding with Java Standards",
    icon: javaIcon, // Add any Java or internship-related icon
    iconBg: "#383E56",
    date: "June 2023 – Aug 2023",
    points: [
      "Developed secure, modular Java applications with encryption.",
      "Focused on building reusable components and secure API handling.",
    ],
  },
];


const projects = [
  {
    name: "Book Snap",
    description:
      "A high-performance booking app built with React and Next.js, featuring Stripe payment integration, JWT authentication, and lazy loading for improved speed.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "next.js", color: "green-text-gradient" },
      { name: "stripe", color: "pink-text-gradient" },
    ],
    image: booksnap,
 
  },
  {
    name: "Eera – AI Assistant",
    description:
      "A voice-based AI assistant using JavaScript, Web APIs, and Local Storage. Provides time updates, weather info, jokes, and voice search through speech recognition.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "webspeechapi", color: "green-text-gradient" },
      { name: "localstorage", color: "pink-text-gradient" },
    ],
    image: eera,

  },
  {
    name: "SkyCast Weather Companion",
    description:
      "A real‑time weather companion app using Node.js, Express, GPS/IP location and OpenWeatherMap API, featuring live and 5‑day forecasts in a clean Tailwind UI.",
    tags: [
      { name: "node.js", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: skycast,
    
  },
  {
    name: "Custom Dashboard",
    description:
      "A responsive admin dashboard for managing and visualizing user or financial data. Built with React and Chart.js, it supports real-time API updates and clean UI design.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "chartjs", color: "pink-text-gradient" },
    ],
    image: dashboard,
   
  },
  {
  name: "LaughBoost – Dad Jokes Extension",
  description:
    "A Chrome extension that displays random dad jokes using the icanhazdadjoke API. Designed with a clean UI and built using HTML, CSS, and JavaScript to deliver a quick laugh with every click.",
  tags: [
    { name: "javascript", color: "blue-text-gradient" },
    { name: "chrome-extension", color: "green-text-gradient" },
    { name: "api", color: "pink-text-gradient" },
  ],
  image: laughboost, // add screenshot in assets

},
{
  name: "Sundown Animated Replica",
  description:
    "A fully responsive and animated replica of the Sundown Studio website. Created using GSAP, React, and smooth scroll libraries to mimic real-time scroll effects and page transitions.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "gsap", color: "green-text-gradient" },
    { name: "scrolltrigger", color: "pink-text-gradient" },
  ],
  image: sundown,

}
];


export { services, technologies, experiences, projects };
