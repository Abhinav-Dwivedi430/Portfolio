import {
  designer,
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
  figma,
  freelancer,
  youtube,
  infosys,
  carrent,
  jobit,
  tripguide,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: designer,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    proficiency: 80,
  },
  {
    name: "CSS 3",
    icon: css,
    proficiency: 70,
  },
  {
    name: "JavaScript",
    icon: javascript,
    proficiency: 60,
  },
  {
    name: "TypeScript",
    icon: typescript,
    proficiency: 50,
  },
  {
    name: "React JS",
    icon: reactjs,
    proficiency: 80,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    proficiency: 70,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    proficiency: 70,
  },
  {
    name: "Node JS",
    icon: nodejs,
    proficiency: 50,
  },
  {
    name: "MongoDB",
    icon: mongodb,
    proficiency: 50,
  },
  {
    name: "Three JS",
    icon: threejs,
    proficiency: 60,
  },
  {
    name: "git",
    icon: git,
    proficiency: 85,
  },
  {
    name: "figma",
    icon: figma,
    proficiency: 85,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Present",
    points: [
      "Worked extensively on backend and cloud technologies, contributing to system functionality and performance optimization.",
      "Managed multiple projects as part of a team, fixed frontend bugs, and enhanced client project functionalities.",
      "Collaborated with clients directly, delivering solutions that earned satisfaction and awards for exceptional performance.",
      "Gained expertise in tools such as ServiceNow, Mulesoft, Confluence, Jira, Commerce Tool, AWS Lambda, BitBucket, Postman, Quantum Metric, and Okta, while understanding product company workflows and system design.",
    ],
  },
  {
    title: "Freelance Designer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "January 2021 - December 2021",
    points: [
      "Designed impactful banners, logos, thumbnails, and posters to meet diverse client needs.",
      "Delivered creative branding solutions that enhanced client visibility and engagement.",
      "Collaborated with clients to refine designs, ensuring satisfaction and timely project completion.",
      "Proficient in tools like Photoshop, Illustrator, and Canva for high-quality graphic creation.",
    ],
  },
  {
    title: "Youtube Content Creator & Coordinator",
    company_name: "Youtube",
    icon: youtube,
    iconBg: "#E6DEDD",
    date: "January 2020 - November 2022",
    points: [
      "Created engaging gaming montages, custom intros, and visually appealing video edits, boosting content quality and branding.",
      "Managed YouTube channels by coordinating content strategies, scheduling uploads, and optimizing videos for audience engagement.",
      "Developed and published original content for my own YouTube channel, enhancing my personal brand and online presence.",
      "Collaborated with creators to align content with channel themes and platform trends, ensuring consistent audience growth.",
    ],
  },
  
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abhinav proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abhinav does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Abhinav optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects};
