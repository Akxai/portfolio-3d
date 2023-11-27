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
  tailwind,
  nodejs,
  mongodb,
  git,
  next,
  bootstrap,
  conntog,
  aiopenapps,
  leetcode,
  threejs,
  firebase,
  aiopenappsbg,
  ECE,
  client,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Developer",
    icon: creator,
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
    name: "Firebase",
    icon: firebase,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next Js",
    icon: next,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Conntog",
    icon: conntog,
    iconBg: "#383E56",
    date: "Nov 2022 - Jun 2023",
    points: [
      "Developed frontend features at Conntog, collaborating with a team of three",
      "Ensured responsive design for optimal user experiences on various devices.",
      "Actively participated in code reviews, providing constructive feedback.",
      "Contributed to a dynamic team, enhancing web applications with HTML, CSS, JavaScript and other modern frameworks.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "AiOpenApps",
    icon: aiopenapps,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Nov 2023",
    points: [
      "Full-stack developer at AiOpenApps, proficiently utilizing Sanity CMS, Firebase database, and Firebase authentication for seamless application development.",
      "Developed and maintained end-to-end features, showcasing versatility in full-stack development.",
      "Leveraged Sanity CMS for efficient content management, ensuring a streamlined workflow.",
      "Integrated Firebase database and authentication, enhancing the overall functionality and security of web applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I really enjoyed working with Akshay!! He executed my website perfectly and exactly how I needed it done. Wonderful designer and web developer!! Highly recommend!!",
    name: "Shyre Thakkar",
    company: "IRL DLC",
    image: client,
  },
  {
    testimonial:
      "It was great working with Akshay! He did more development on my website and did all the changes I needed very quickly and exactly how I needed it. Highly recommended!!",
    name: "Shyre Thakkar",
    company: "IRL DLC",
    image: client,
  },
  {
    testimonial:
      "3rd time working with Akshay and its always very easy. He get what i need done very fast and exactly how I need it. He takes direction very well and i highly recommend!!",
    name: "Shyre Thakkar",
    company: "IRL DLC",
    image: client,
  },
];

const projects = [
  {
    name: "AiOpenApps",
    description:
      "Developed AiOpenApps — your one-stop AI hub! Powered by Firebase, Sanity, and React, it's where AI marvels converge for a sleek and snappy experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aiopenappsbg,
    source_code_link: "https://github.com/Akxai/aiopenapps",
  },
  {
    name: "ECE Notes",
    description:
      "Constructed an ECE notes app with Node.js and MongoDB, offering centralized access to study materials. Implemented Twilio for user queries and owner notifications.",
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: ECE,
    source_code_link: "https://github.com/Akxai/notesTwilio",
  },
  {
    name: "Leetcode Clone",
    description:
      "Developed a LeetCode clone—an engaging platform for honing coding skills through algorithmic challenges. Dive in, solve, and conquer the coding arena!",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: leetcode,
    source_code_link: "https://github.com/Akxai/leetcode-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
