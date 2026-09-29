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
    joblens,
    humana_logo,
    aidocumind,
    octet_logo,
    Wevise_logo,
    binghamton_university_logo,
    mumbai_university_logo,
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

  const education = [
    {
      degree: "Master of Science in Computer Science",
      university: "State University of New York at Binghamton",
      icon: binghamton_university_logo,
      iconBg: "#383E56",
      date: "2023 - 2025",
    },
    {
      degree: "Bachelor of Engineering in Information Technology",
      university: "Mumbai University",
      icon: mumbai_university_logo,
      iconBg: "#383E56",
      date: "2018 - 2022",
    },
  ];

  const experiences = [
    {
      title: "AI Software Engineer",
      company_name: "Octet AI",
      icon: octet_logo,
      iconBg: "#383E56",
      date: "January 2026 - Present",
      points: [
        "Built a full-stack construction estimation platform using Python, FastAPI, React Native (Expo), and PostgreSQL, delivering 25+ API endpoints and 15+ mobile screens across homeowner & contractor workflows.",
        "Developed a rule-based estimate engine that transforms unstructured project inputs into structured BOM/labor outputs across 100+ estimate scenarios, reducing manual estimation steps by ~60% in internal testing.",
        "Built and tested a validation and retry pipeline processing ~1,000 estimate inputs to generate structured LLM outputs, increasing schema-valid responses from ~40% to ~90% and reducing parsing failures by ~70%.",
        "Designed backend services and domain models for contractor matching, milestones, reviews, and payment history, containerized and deployed them using Docker, Kubernetes, and Railway, achieving a 10-minute average deployment cycle.",
        "Diagnosed inconsistent estimate outputs by tracing data across React Native inputs, FastAPI request models, PostgreSQL records, and estimation logic, identifying data-mapping and calculation issues across multiple estimate scenarios.",
      ],
    },
    // {
    //   title: "Software Development Engineer",
    //   company_name: "Humana",
    //   icon: humana_logo,
    //   iconBg: "#383E56",
    //   date: "June 2025 - December 2025",
    //   points: [
    //     "Considered, developed, and deployed scalable backend services using Python, improving system performance and reducing API response latency by 35%.",
    //     "Engineered RESTful APIs and microservices to support high-traffic enterprise applications, integrating with React.js, Angular, and Node.js for dynamic front-end experiences.",
    //     "Deployed applications on AWS (EC2, S3, Lambda, RDS, CloudWatch), achieving 99.9% uptime and improving system reliability.",
    //     "Constructed and maintained data-driven applications with PostgreSQL, MySQL, and MongoDB, optimizing query performance and ensuring high data consistency across",
    //   ],
    // },
    {
      title: "Software Engineer",
      company_name: "Wevise",
      icon: Wevise_logo,
      iconBg: "#E6DEDD",
      date: "June 2025 - December 2025",
      points: [
        "Built a full-stack application using Next.js, React, and TypeScript, improving frontend architecture and reducing defects by 30%.",
        "Optimized data pipelines and backend processing systems using SQLAlchemy, reducing query overhead by 25% and improving end-to-end data reliability.",
        "Implemented centralized logging and cloud monitoring across AWS/Azure services to diagnose application errors, latency issues, and service availability problems .",
        "Engineered and deployed cloud-native applications on AWS and Azure, improving service reliability through resilient API architecture, failure handling, and independent service deployment.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Hubzone Depot",
      icon: HD_logo,
      iconBg: "#E6DEDD",
      date: "August 2024 - February 2025",
      points: [
        "Built a full-stack multi-vendor platform using Node.js, TypeScript, React, and PostgreSQL, increasing RFQ transaction throughput by 30% while keeping query latency under 200ms for 50k+ daily catalog item searches.",
        "Architected an event-driven data pipeline to process 10,000+ carrier invoice payloads per day, reducing pipeline ingestion lag by 45% to enable multi-carrier audit validation and credit recovery.",
        "Implemented structured input validation and error handling for carrier invoice processing, improving data consistency and preventing malformed payloads from disrupting downstream validation workflows.",
        "Designed, deployed, and maintained cloud-native REST APIs using Docker and Terraform, improving procurement dashboard efficiency by 28% while achieving 99.95% API uptime across automated tracking environments.",
      ],
    },
    {
      title: "Software Development Engineer",
      company_name: "IWMBuzz",
      icon: iwmbuzz_logo,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Designed, deployed, and maintained cloud-native REST APIs using Docker and Terraform, improving procurement dashboard efficiency by 28% while achieving 99.95% API uptime across automated tracking environments.",
        "Optimized backend services to reduce API response times by 34%, while managing end-to-end testing, maintenance, and automated CI/CD pipelines (Docker) to streamline client software releases.",
        "Added unit and integration test coverage for frontend components, backend routes, and API behavior, using automated tests to catch regressions before release.",
        "Integrated automated build and deployment checks into the development workflow to reduce regressions during client releases.",
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
      name: "Joblens",
      description:
        "Joblens is an agentic browser extension that analyzes job postings in real time, extracts actionable insights, and helps candidates prepare tailored applications through resume matching, interview preparation, and AI-assisted outreach generation.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: joblens,
      source_code_link: "https://chromewebstore.google.com/detail/pjloihfekgljkeebmkkkefieadecpagm?utm_source=item-share-cb",
    },
    {
      name: "AIDocuMind",
      description:
        "Built AIDocuMind, a GenAI-powered document intelligence platform that enables semantic search and contextual question answering over unstructured documents. Developed document ingestion and embedding pipelines using Python, FastAPI, OpenAI embeddings, and FAISS, implementing a Retrieval-Augmented Generation (RAG) workflow to improve information discovery and reduce manual document review effort.",
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
          name: "OpenAI",
          color: "pink-text-gradient",
        },
      ],
      image: aidocumind,
      source_code_link: "https://aidocumind.netlify.app/",
    },
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
  
  export { experiences, education, projects, services, technologies, testimonials };
  