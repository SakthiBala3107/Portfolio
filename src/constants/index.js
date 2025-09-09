// index.js
// export const servicesData =
//  [
//   {
//     title: "FullStack Development",
//     description:
//       "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
//     items: [
//       {
//         title: "Backend Engineering",
//         description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
//       },
//       {
//         title: "Frontend Excellence",
//         description: "(React, TypeScript, Interactive UI/UX)",
//       },
//       {
//         title: "Database Design",
//         description: "(SQL/NoSQL Optimization, Scalable Structures)",
//       },
//     ],
//   },
//   // 
//   {
//     title: "DevOps & Cloud Solutions",
//     description:
//       "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
//     items: [
//       {
//         title: "CI/CD Pipelines",
//         description: "(GitHub Actions, Docker, Kubernetes)",
//       },
//       {
//         title: "Server Management ",
//         description: "(Linux, Nginx, Load Balancing)",
//       },
//       {
//         title: "Performance Tuning",
//         description: "(Caching, Compression, Lighthouse 90+ Scores)",
//       },
//     ],
//   },
//   // 
//   {
//     title: "Security & Optimization",
//     description:
//       "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
//     items: [
//       {
//         title: "Code Audits",
//         description: "(Refactoring, Tech Debt Cleanup)",
//       },
//       {
//         title: "Pen Testing",
//         description: "(Vulnerability Assessments)",
//       },
//       {
//         title: "SEO Tech Stack",
//         description: "(SSR, Metadata, Structured Data)",
//       },
//     ],
//   },
//   // 
//   {
//     title: "Web & Mobile Apps",
//     description:
//       "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
//     items: [
//       {
//         title: "Cross-Platform Apps",
//         description: "(Single codebase for iOS/Android/Web)",
//       },
//       {
//         title: "PWAs",
//         description: "(Offline mode, Push Notifications)",
//       },
//       {
//         title: "E-Commerce",
//         description: "(Checkout flows, Payment Gateways, Inventory APIs)",
//       },
//     ],
//   },
// ];
export const servicesData = [
  {
    title: "Frontend Development",
    description:
      "I build clean, responsive, and user-friendly websites using modern frontend tools. My focus is on turning designs into interactive experiences that work across all devices.",
    items: [
      {
        title: "UI Development",
        description: "(React, JavaScript, TypeScript, TailwindCSS)",
      },
      {
        title: "Responsive Design",
        description: "(Mobile-first layouts, Pixel-perfect styling)",
      },
      {
        title: "Interactive Features",
        description: "(Animations, Forms, Dynamic Components)",
      },
    ],
  },
  //
  {
    title: "Performance & Best Practices",
    description:
      "Fast websites make happy users. I focus on performance, accessibility, and clean code to make apps smooth and reliable.",
    items: [
      {
        title: "Page Speed",
        description: "(Lazy loading, Image optimization, Caching basics)",
      },
      {
        title: "Code Quality",
        description: "(Reusable components, Clean structure)",
      },
      {
        title: "Accessibility",
        description: "(Semantic HTML, ARIA roles, Keyboard navigation)",
      },
    ],
  },
  //
  {
    title: "Version Control & Collaboration",
    description:
      "I work with Git and GitHub to manage codebases effectively, track and review changes efficiently, resolve conflicts smoothly, and collaborate seamlessly in diverse team projects.",
    items: [
      {
        title: "Git & GitHub",
        description: "(Branching, Pull requests, Merge conflicts)",
      },
      {
        title: "Project Workflow",
        description: "(Agile basics, Code reviews)",
      },
      {
        title: "Team Collaboration",
        description: "(Open-source contributions, Team repos)",
      },
    ],
  },
  //
  {
  title: "Craft & Mindset",
  description:
    "I approach every project with curiosity, discipline, and attention to detail—focusing on writing clean code, solving problems creatively, and delivering polished user experiences.",
  items: [
    {
      title: "Code Quality",
      description: "(Clean, Readable, Maintainable practices)",
    },
    {
      title: "Problem-Solving",
      description: "(Debugging, Breaking down tasks, Iterating fast)",
    },
    {
      title: "Collaboration",
      description: "(Clear communication, Git workflows, Adaptability)",
    },
  ],
},

];

export const projects = [
  {
    id: 1,
    name: "Caffiend",
    description:
      "Caffiend is a coffee tracking app built with React.js and Firebase, helping users log, track, and explore their favorite brews in a simple, engaging, and user-friendly interface.",
    href: "",
    image: "/Project-pics/caffiend-snap.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 1, name: "Firebase" },
      // { id: 2, name: "Next.js" },
      // { id: 3, name: "Node.js" },
      // { id: 4, name: "MongoDB" },
      // { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Copacetic",
    description:
      "Copacetic is an interactive vocabulary app built with React.js, helping users master words through spaced repetition in a simple, engaging, and user-friendly interface.",
    href: "",
    image: "/Project-pics/Copacetic-snap.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      // { id: 2, name: "Next.js" },
      // { id: 3, name: "Stripe API" },
      // { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Nexora",
    description:
      "Nexora is a notes app built with Next.js and Firebase, allowing users to create, store, and edit notes in a simple, organized, and intuitive interface.",
    href: "",
    image: "/Project-pics/nexora-act.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Firebase" },
      // { id: 3, name: "SQL Server" },
      // { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Mojito",
    description:
      "Mojito is a landing page built with React and GSAP, showcasing a cocktail store with engaging animations and an interactive, visually appealing interface.",
    href: "",
    image: "/Project-pics/Mojito-snap.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "GSAP" },
      // { id: 3, name: "MySQL" },
      // { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Pokédex",
    description:
      "Pokedex is a React app using API and local storage, allowing users to browse, search, and manage Pokémon in a simple and interactive interface.",
    href: "",
    image: "/Project-pics/pokedex-snap.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      // { id: 2, name: "Firebase" },
      // { id: 3, name: "GraphQL" },
      // { id: 4, name: "Material UI" },
    ],
  },
  // {
  //   id: 6,
  //   name: "Digital Game Store",
  //   description:
  //     "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
  //   href: "",
  //   image: "/assets/projects/game-store.jpg",
  //   bgImage: "/assets/backgrounds/curtains.jpg",
  //   frameworks: [
  //     { id: 1, name: "Svelte" },
  //     { id: 2, name: "Node.js" },
  //     { id: 3, name: "MongoDB" },
  //     { id: 4, name: "Chakra UI" },
  //   ],
  // },
];
export const socials = [
  // { name: "Instagram", href: "https://www.instagram.com/ali.sanatidev/reels/" },
  // {
  //   name: "Youtube",
  //   href: "https://www.youtube.com/channel/UCZhtUWTtk3bGJiMPN9T4HWA",
  // },
  { name: "LinkedIn", href: "www.linkedin.com/in/sakthibala3107" },
  { name: "GitHub", href: "https://github.com/SakthiBala3107/" },
];
