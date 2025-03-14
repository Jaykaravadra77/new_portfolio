const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    company: "College Final Year Project",
    year: "2022",
    description: "A basic e-commerce website developed as my final year college project. I focused on building the complete backend infrastructure, which was my first significant Node.js development experience that laid the foundation for my career as a backend developer.",
    details: [
      "Built the complete backend system for an e-commerce platform with product listings, shopping cart, and checkout functionality",
      "Implemented CRUD operations for product management on the admin side",
      "Created user authentication and account management features using JWT",
      "Designed and implemented the database schema using MongoDB",
      "Developed RESTful APIs to connect the frontend and backend systems",
      "Gained fundamental understanding of backend architecture and API design principles"
    ],
    image: "/images/project4.jpg",
    technologies: ["Node.js", "Express.js", "MongoDB", "JavaScript" , "React","CSS"],
    githubLink: "https://github.com/Jaykaravadra77/E-Mall_Backend",
    liveLink: ""
  },
  {
    id: 2,
    title: "CricTracker",
    company: "Yudiz Solutions Limited",
    year: "2022 - 2024",
    description: "A large-scale, high-traffic sports blogging platform deployed on Kubernetes architecture. As a backend developer, I worked on the GraphQL microservices that power this industry-leading cricket information platform. This project was a game-changer for my career, exposing me to advanced backend patterns and production-grade infrastructure.",
    details: [
      "Architected and implemented backend GraphQL microservices using Apollo Federation for scalable data management",
      "Developed and optimized server-side features including LiveBlog, sitemap generation, and SEO management",
      "Integrated third-party APIs for real-time cricket data updates",
      "Designed federated GraphQL schemas across multiple backend services to handle complex data relationships",
      "Monitored server performance and coordinated with DevOps for Kubernetes deployments",
      "Gained extensive experience with industry standard backend best practices for large-scale applications",
      "Contributed to backend systems that handle millions of concurrent users during major cricket events"
    ],
    image: "/images/project1.jpg",
    technologies: ["Node.js", "GraphQL (Apollo Federation)", "Redis", "MongoDB", "Express.js"],
    githubLink: "",
    liveLink: "https://crictracker.com"
  }, 
  {
    id: 3,
    title: "Mehrangi Navratri Pass Booking System",
    company: "Yudiz Solutions Limited",
    year: "2023",
    description: "A specialized event pass booking and verification system developed for Navratri celebrations. I was responsible for developing the entire backend infrastructure that powered the booking system, QR code generation, and verification processes.",
    details: [
      "Developed the complete backend system for a pass booking portal where users can reserve their spots for the Navratri celebration",
      "Implemented server-side logic for automated QR code generation and distribution system via WhatsApp and email for confirmed bookings",
      "Created backend verification APIs used at event entry points to validate attendee QR codes",
      "Provided on-site technical support during the event to ensure smooth operation of the backend systems",
      "Built backend APIs for the organizer dashboard to monitor bookings, attendance, and manage capacity"
    ],
    image: "/images/project3.jpg",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    githubLink: "",
    liveLink: ""
  },
  {
    id: 4,
    title: "Form Management System",
    company: "Yudiz Solutions Limited",
    year: "2024",
    description: "A versatile form management platform with separate admin and user portals. As the backend developer, I designed and implemented the server-side architecture that enables dynamic form creation, data storage, and the intelligent auto-population feature.",
    details: [
      "Developed the backend infrastructure for a comprehensive admin portal for creating and managing dynamic form templates",
      "Implemented server-side logic for a user-friendly form submission system",
      "Created backend algorithms for an intelligent auto-population feature that recalls and fills previously entered data",
      "Built flexible database schemas and APIs supporting various input types (text, select, date, etc.)",
      "Designed a secure data storage solution that maintains user privacy while enabling data reuse",
      "Implemented server-side validation and error handling for both admin-created fields and user submissions"
    ],
    image: "/images/project5.jpg",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    githubLink: "",
    liveLink: ""
  },
  {
    id: 5,
    title: "ClubMatch",
    company: "Yudiz Solutions Limited",
    year: "2024 - Present",
    description: "Sports Court Booking System - A SaaS platform that enables sports clubs to manage multiple courts, memberships, and marketplace payments. I'm responsible for developing the entire backend architecture of this comprehensive solution, handling complex booking scenarios and payment processing.",
    details: [
      "Architected and developed the backend infrastructure for a SaaS platform enabling sports clubs to manage multiple courts, memberships, and marketplace payments via Stripe Connect",
      "Implemented complex server-side booking logic including dynamic player availability, conflict detection, and multi-court scheduling",
      "Integrated OneSignal for real-time notifications and built a comprehensive backend authentication system with role-based access",
      "Designed scalable database schemas and APIs to handle various sports club configurations and membership types",
    ],
    image: "/images/project2.jpg",
    technologies: ["Node.js", "Fastify", "MongoDB", "Redis", "Stripe Payment"],
    githubLink: "",
    liveLink: ""
  },
  {
    id: 6,
    title: "CineTopia Connect",
    company: "Yudiz Solutions Limited",
    year: "2024 - Present",
    description: "Event Booking Management System - A social platform that connects users through events and opportunities. As the backend developer, I built the server-side infrastructure that powers the social features, event management, and user interactions.",
    details: [
      "Developed backend systems for a social platform where users can create events, post opportunities, and connect with other members",
      "Built scalable APIs to handle event creation, management, and booking processes",
      "Collaborated directly with international clients to gather requirements and implement features",
      "Maintained clear communication across different time zones, ensuring project requirements were met efficiently",
      "Designed database schemas optimized for social connections and event management"
    ],
    image: "/images/project6.jpg",
    technologies: ["Node.js", "Fastify", "MongoDB", "Redis"],
    githubLink: "",
    liveLink: ""
  },
  {
    id: 7,
    title: "Puzzle Generator Algorithm",
    company: "Yudiz Solutions Limited",
    year: "2025",
    description: "A backend algorithm that programmatically generates and solves puzzles similar to LinkedIn's Tango game. This mini-project demonstrates my interest in algorithmic problem-solving and automation of creative processes.",
    details: [
      "Designed and implemented an algorithm that generates unique sliding puzzle configurations",
      "Created a solver that can find the optimal solution path for any generated puzzle",
      "Built randomization logic to ensure each puzzle is different and solvable",
      "Implemented difficulty levels by varying the complexity of the generated puzzles",
      "Developed a RESTful API to serve puzzles and solutions on demand",
      "Eliminated the need for manual puzzle creation by automating the entire process"
    ],
    image: "/images/project7.jpg",
    technologies: ["Node.js","Fastify","MongoDB"],
    liveLink: ""
  },
  {
    id: 8,
    title: "Node.js Developer Portfolio",
    company: "Personal Project",
    year: "2025",
    description: "My professional portfolio website showcasing my backend development projects and experience. This responsive React-based portfolio was developed using AI-assisted coding techniques to streamline the development process.",
    details: [
      "Designed and developed a responsive portfolio website to showcase my Node.js backend development projects",
      "Leveraged AI tools like Claude to accelerate development and improve code quality",
      "Implemented a clean, modern UI with a dark theme optimized for readability",
      "Created a project showcase with detailed modal views to highlight technical contributions",
      "Built with React and CSS for a responsive experience across all devices",
      "Utilized AI pair programming to optimize development workflow and solve complex UI challenges"
    ],
    technologies: ["React", "JavaScript", "CSS"],
    githubLink: "https://github.com/Jaykaravadra77/new_portfolio",
    liveLink: ""
  }
];

export default projects; 