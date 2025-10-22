import {
    backend,
    creator,
    docker,
    git,
    javascript,
    HD_logo,
    mobile,
    mongodb,
    python,
    reactjs,
    redux,
    nodejs,
    iwmbuzz_logo,
    TSP_logo,
    tailwind,
    typescript,
    weatherapp,
    dogmatch,
    web,
    comingsoon,
    humana_logo,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "AI Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Development Engineer",
      company_name: "Humana",
      icon: humana_logo,
      iconBg: "#383E56",
      date: "March 2025 - Present",
      points: [
        "Considered, developed, and deployed scalable backend services using Python, improving system performance and reducing API response latency by 35%.",
        "Engineered RESTful APIs and microservices to support high-traffic enterprise applications, integrating with React.js, Angular, and Node.js for dynamic front-end experiences.",
        "Deployed applications on AWS (EC2, S3, Lambda, RDS, CloudWatch), achieving 99.9% uptime and improving system reliability.",
        "Constructed and maintained data-driven applications with PostgreSQL, MySQL, and MongoDB, optimizing query performance and ensuring high data consistency across",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Hubzone Depot",
      icon: HD_logo,
      iconBg: "#E6DEDD",
      date: "August 2024 - February 2025",
      points: [
        "Conducted on-page SEO audits using Rank Math and developed custom WordPress plugins to automate structural enhancements (meta tags, canonical links, XML sitemaps), increasing organic impressions by 28% in 2 months.",
        "Imporved site performance by compressing assets, lazy-loading images and removing unused JavaScripts/CSS, reducing average load time by 1.4 seconds (GTmetrix)",
        "Designed and developed the frontend for an e-commerce microsite using React.js and Tailwind CSS, implementing a responsive product listing interface and integrating with backend endpoints for product retrieval and order actions",
        "Contributed to backend logic using Node.js and Express to support dynamic product filtering and cart management, collaborating closely with a small dev team on deployment and testing.",
        "Developed and deployed custom PHP hooks for Salesforce REST API integration, syncing over 1,000 leads monthly between the WordPress CRM forms and Salesforce, with real-time validation via sandbox testing",
      ],
    },
    {
      title: "Software Development Engineer",
      company_name: "IWMBuzz",
      icon: iwmbuzz_logo,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Played a key role in the end-to-end development of IWMBuzz’s media platform, helping scale its web infrastructure to support over 10,000+ monthly users, with improved page speed and stability",
        "Led frontend development using React.js, TypeScript, and Tailwind CSS, building modular, accessible components and micro-interactions for user-facing features like search, filtering, content bookmarking, and user profile management.",
        "Designed and customized RESTful APIs using Node.js and Express, connecting the frontend to dynamic data pipelines and enabling real-time content publishing, comment threads, and editorial workflows",
        "Followed backend development closely under the guidance of senior engineers, contributing to routes, middleware, and data models using Node.js and Express, this foundation later enabled me to independently build full end-to-end features for internal and external tools.",
        "Wrote unit, integration, and API tests using Jest, React Testing Library, and Supertest, achieving 85% test coverage across core modules and reducing production bugs by 30%.",
        "Led development of multiple internal tools (e.g., editorial dashboards) and external microsites (e.g., campaign landing pages), owning both frontend and backend workflows from design handoff to deployment.",
        "Built, tested, and deployed these projects using AWS EC2, RDS, and S3, with automated CI/CD pipelines configured via GitHub Actions and Docker for streamlined staging and production releases.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "The Sparks Foundation",
      icon: TSP_logo,
      iconBg: "#E6DEDD",
      date: "June 2021 - October 2021",
      points: [
        "Automated ETL pipelines in Python on AWS, cutting manual data processing time by 50% for fraud detection analytics.",
        "Designed predictive analytics features, enabling early detection of healthcare fraud patterns, aligning with mission-driven use cases.",
        "Built interactive dashboards (Tableau, Looker Studio) to translate complex data into actionable insights for both technical and non-technical stakeholders.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Weather App",
      description:
        "I developed a weather application with geolocation functionality, prompting users for location access upon website load. Using the Geolocation API and OpenWeatherMap API, the app fetches and displays real-time weather information based on the user's current location. This feature works alongside a manual city search, providing a comprehensive weather overview with temperature, city name, weather conditions, and real-time images.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "OpenWeathermap",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/TanyaRod22/WeatherApp.github.io",
    },
    {
      name: "DevTinder",
      description:
        "A full-stack matchmaking platform for developers, built with React, Node.js, and MongoDB. Features include secure user auth with JWT, profile creation, and protected API routes. Future updates will add real-time matching, messaging, and Salesforce integration.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Next",
          color: "pink-text-gradient",
        },
      ],
      image: comingsoon,
      source_code_link: "In Progress",
    },
    {
      name: "Match Your Dog",
      description:
        "Match Dogs is a sleek, interactive app designed to help users discover compatible dog matches based on personalized preferences. Built using modern full-stack technologies, the app streamlines the matching process with features like compatibility sorting, favorite tracking, and intuitive, user-focused design. It’s a charming way to connect people and pups!",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TyepScript",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: dogmatch,
      source_code_link: "https://github.com/TanyaRod22/fetch-dog-app",
    },
  ];
  
  export { experiences, projects, services, technologies, testimonials };
  