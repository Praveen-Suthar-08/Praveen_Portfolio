export interface PortfolioProject {
  title: string;
  projectHeading: string;
  description: string;
  imageUrl: string;
  features: string[];
  techstack: Record<string, string>;
  projectUrl?: string;
  githubUrl: string;
  theme: string;
  gradient_from?: string;
  gradient_via?: string;
  gradient_to?: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
  type?: "work" | "achievement";
  link?: string;
}

export const portfolioProfile = {
  name: "Praveen Suthar",
  headline: "Full Stack Web Developer & Creative Developer",
  summary:
    "I’m a Computer Science Engineering student and Full Stack Developer passionate about building scalable, intelligent, and user-focused web applications. I work with technologies like MERN, Django, React, Next.js, PostgreSQL, and MongoDB, while exploring AI and Generative AI to create smarter software solutions. I enjoy turning ideas into real-world products—from AI-powered platforms and real-time collaboration systems to scalable marketplace applications. I focus on writing clean, efficient code, building reliable APIs, and creating seamless user experiences. I’m always learning, experimenting with new technologies, and looking for opportunities to build innovative products that solve meaningful problems.",
  email: "praveensksuthar@gmail.com",
  phone: "",
  location: "Bangalore, Karnataka, India",
  socialLinks: {
    github: "https://github.com/Praveen-Suthar-08",
    linkedin: "https://www.linkedin.com/in/praveen-suthar-554b12333",
    leetcode: "https://github.com/Praveen-Suthar-08",
  },
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
      institution: "City Engineering College, Bangalore",
      period: "2023 – Expected 2027",
      grade: "CGPA: 8.95 / 10.0",
      details:
        "Core Focus: Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, Web Technologies, Software Engineering.",
    },
    {
      degree: "Pre-University Education (11th & 12th)",
      institution: "Narayana PU College",
      period: "2021 – 2023",
      grade: "Senior Secondary",
      details: "Comprehensive study in Physics, Chemistry, Mathematics, and Computer Science.",
    },
    {
      degree: "Primary & Secondary Schooling (Nursery & 1st – 10th)",
      institution: "Narayana Primary & Higher School",
      period: "Till 2021",
      grade: "Secondary School (10th)",
      details: "Solid foundational education focusing on core academic and analytical skills.",
    },
  ],
  certifications: [
    {
      title: "Agentic AI Saksham Program",
      issuer: "Capabl",
      period: "2026",
      description: "Advanced program on Agentic AI frameworks, autonomous agents, and full-stack integration.",
    },
    {
      title: "AWS Solutions Architecture Job Simulation",
      issuer: "Forage",
      period: "2026",
      description: "Practical architectural design, scalability patterns, and cloud infrastructure simulations on AWS.",
      image: "/certificates/aws-solutions-architecture.jpg",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      period: "2025",
      description: "Foundational AI, Machine Learning, and cloud infrastructure paradigms on Oracle Cloud Infrastructure.",
      image: "/certificates/oracle-ai-foundations.jpg",
    },
    {
      title: "Web Development with AI Tools",
      issuer: "SkillUp - SimpliLearnprimary",
      period: "2025–26",
      description: "Building modern responsive web applications integrating AI workflows and development tools.",
      image: "/certificates/Web_dev_with_cgpt_simplilearn_page-0001.jpg",
    },
    {
      title: "AI Skills Passport",
      issuer: "EY and Microsoft",
      period: "2026",
      description: "Industry-standard artificial intelligence credentials in generative AI and responsible technology deployment.",
      image: "/certificates/ey-ai-skills-passport.jpg",
    },
    {
      title: "Introduction to Prompt Engineering with GitHub Copilot",
      issuer: "Microsoft",
      period: "2025",
      description: "Mastering prompt engineering techniques, contextual code completion, and pair-programming with Copilot.",
      image: "/certificates/Microsoft_Intro_to_prompt_engg_w_Github_copilotpdf_page-0001.jpg",
    },
    {
      title: "AI-Driven Coding and Project Management with Git",
      issuer: "Parvam",
      period: "2026",
      description: "Modern software engineering workflow with Git collaboration and AI-augmented software development.",
    },
    {
      title: "AI agent development on Azure",
      issuer: "Microsoft",
      period: "2025",
      description: "Practical engineering of autonomous AI agents, orchestrations, and cloud deployments on Microsoft Azure.",
      image: "/certificates/azure-ai-agent.jpg",
    },
    {
      title: "Foundation course on Green Skills and Artificial Intelligence",
      issuer: "Edunet Foundation",
      period: "2025",
      description: "Foundational concepts uniting environmental sustainability, green technologies, and artificial intelligence.",
      image: "/certificates/green-skills-ai.jpg",
    },
  ],
  skills: {
    programmingLanguages: [
      "JavaScript (ES6+)",
      "Python",
      "Java",
      "C",
      "SQL",
    ],
    frontend: [
      "React.js (React 19 & 18)",
      "Next.js (App Router)",
      "Vue.js",
      "Tailwind CSS (v3 & v4)",
      "HTML5 & Modern CSS3",
    ],
    creativeWeb: [
      "Three.js",
      "React Three Fiber (@react-three/fiber)",
      "Drei (@react-three/drei)",
    ],
    backend: [
      "Node.js",
      "Django (Python)",
      "Hono",
      "RESTful APIs",
      "Socket.io",
      "WebSockets",
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Firebase Firestore",
    ],
    toolsAndTechnologies: [
      "Git & GitHub",
      "Docker & Containerization",
      "Linux Environment & Bash",
      "Vercel",
      "Postman",
      "VS Code",
    ],
  },
  workExperience: [] as WorkExperience[],
};

export const allProjects: PortfolioProject[] = [
  {
    title: "ReLoop: AI-Driven Donation and Redistribution Platform (SaaS)",
    projectHeading: "ReLoop",
    description:
      "AI-powered SaaS platform connecting surplus resources with individuals and communities in need using intelligent resource matching, demand forecasting, and scalable cloud infrastructure.",
    imageUrl: "reloop.jpg",
    features: [
      "AI-Powered SaaS Platform: Developing a full-stack platform using React.js, FastAPI, and PostgreSQL to connect surplus food, essentials, and resources with communities in need.",
      "Intelligent Matching & Demand Prediction: Implemented intelligent resource matching and demand prediction algorithms using Scikit-learn and Pandas, improving distribution efficiency by 35% and reducing overall wastage.",
      "Scalable Backend & Cloud Deployment: Built robust RESTful APIs, responsive interfaces, and secure authentication systems with cloud deployment on AWS and Firebase.",
      "Real-Time Community Logistics: Interactive redistribution monitoring, tracking inventory levels, and live donation routing for non-profits and volunteer networks.",
    ],
    techstack: {
      React: "react-icon.png",
      PostgreSQL: "postgresql-icon.png",
      AWS: "aws-icon.webp",
      TailwindCSS: "tailwind-icon.svg",
      JavaScript: "javascript-icon.webp",
    },
    projectUrl: "https://github.com/Praveen-Suthar-08/ReLoop---AI-Powered-Circular-Donation-Platform.git",
    githubUrl: "https://github.com/Praveen-Suthar-08/ReLoop---AI-Powered-Circular-Donation-Platform.git",
    theme: "#10b981",
    gradient_from: "#34d399",
    gradient_via: "#10b981",
    gradient_to: "#064e3b",
  },
  {
    title: "Amazona - Full-Stack E-Commerce Platform (Amazon Clone)",
    projectHeading: "Amazona E-Commerce",
    description:
      "A modern, responsive, full-stack MERN e-commerce platform inspired by Amazon. Features product browsing, category filtering, user authentication, shopping cart, PayPal checkout, multi-seller marketplace capabilities, real-time live customer support chat using Socket.io, and comprehensive administrative dashboards.",
    imageUrl: "amazona.jpg",
    features: [
      "Customer Experience & Shopping: Top-seller carousel, dynamic ratings, real-time pricing, stock status, category filters, and live subtotal calculations.",
      "Multi-Step Checkout & Payments: Step-by-step checkout wizard with shipping address, PayPal / Stripe sandbox integration, tax and invoice generation.",
      "Real-Time Support Chat: Instant live customer messaging widget powered by Socket.io connecting directly with active administrators.",
      "Multi-Seller & Admin Portals: Dedicated seller storefronts, product CRUD with Multer image uploads, and visual sales analytics with Google Charts.",
    ],
    techstack: {
      React: "react-icon.png",
      NodeJS: "nodejs-icon.png",
      Express: "express-icon.png",
      MongoDB: "mongodb-icon.webp",
      JWT: "jwt-icon.webp",
    },
    projectUrl: "https://github.com/Praveen-Suthar-08/Amazona-ECommerce-Website-Clone-of-Amazon-.git",
    githubUrl: "https://github.com/Praveen-Suthar-08/Amazona-ECommerce-Website-Clone-of-Amazon-.git",
    theme: "#f59e0b",
    gradient_from: "#fbbf24",
    gradient_via: "#f59e0b",
    gradient_to: "#78350f",
  },
  {
    title: "Stranger Collaboration: AI-Driven Workspace & Pair Programming",
    projectHeading: "Stranger Collaboration",
    description:
      "AI-driven engineering workspace and real-time pair programming platform connecting developers with intelligent skill-matching algorithms and synchronized code environments.",
    imageUrl: "stranger-collab.jpg",
    features: [
      "AI-Powered Smart Matching: Intelligent talent matching algorithm connecting developers based on skill sets and project interests.",
      "Isolated Real-Time Workspaces: One-click environment spin-up with real-time bidirectional code synchronization via WebSockets.",
      "GitHub Activity Integration: Live tracking of commit feeds, repository branches, and pull request statuses.",
      "Secure Authentication: JWT-based auth with Two-Factor Authentication (2FA) and end-to-end encrypted messaging.",
      "Gamified Reputation System: Developer XP scoring, rank tiers, and integrated Kanban project workflows.",
    ],
    techstack: {
      React: "react-icon.png",
      Vite: "vite-icon.webp",
      TailwindCSS: "tailwind-icon.svg",
      NodeJS: "nodejs-icon.png",
      MongoDB: "mongodb-icon.webp",
    },
    projectUrl: "https://github.com/Praveen-Suthar-08/Stranger_Collaboration_Platform.git",
    githubUrl: "https://github.com/Praveen-Suthar-08/Stranger_Collaboration_Platform.git",
    theme: "#6366f1",
    gradient_from: "#818cf8",
    gradient_via: "#6366f1",
    gradient_to: "#312e81",
  },
  {
    title: "AI Resume Analyzer: ATS Scoring & Career Optimization SaaS",
    projectHeading: "AI Resume Analyzer",
    description:
      "AI SaaS platform for career optimization, providing deep semantic ATS scoring against job descriptions, skill gap diagnostics, and automated career coaching.",
    imageUrl: "resume-analyzer.jpg",
    features: [
      "Applicant Tracking System (ATS) Scoring: Deep semantic analysis of resumes against job descriptions to compute match percentage and identify missing keywords.",
      "Skill Gap Diagnostics: Visual breakdown of critical competencies required for target job profiles.",
      "Parallel Version Comparison: Compare multiple iterations of a resume side-by-side with live change tracking.",
      "AI Career Coach & Cover Letter Generator: Automated drafting of customized cover letters and strategic career recommendations.",
      "Real-Time Interactive AI Chat: Conversational AI interface for query-based resume refinement and interview preparation.",
      "Monetization: Integrated Stripe payments for premium tier analysis quotas.",
    ],
    techstack: {
      NextJS: "nextjs-icon.png",
      TailwindCSS: "tailwind-icon.svg",
      PostgreSQL: "postgresql-icon.png",
    },
    projectUrl: "https://github.com/Praveen-Suthar-08/AI-powered-Resume-Analyzer.git",
    githubUrl: "https://github.com/Praveen-Suthar-08/AI-powered-Resume-Analyzer.git",
    theme: "#0ea5e9",
    gradient_from: "#38bdf8",
    gradient_via: "#0284c7",
    gradient_to: "#082f49",
  },
  {
    title: "MediSuite AI Agent: Medical Coding & Autonomous Claim Generation",
    projectHeading: "MediSuite AI Agent",
    description:
      "An intelligent medical coding and autonomous claim generation system streamlining clinical documentation, ICD-10 & CPT-4 code lookup/matching, and insurance claim form creation powered by LLMs (OpenAI/Mistral), Fuzzy Matching, and OCR.",
    imageUrl: "medisuite.jpg",
    features: [
      "Multi-Modal Clinical Ingestion: Conversational guided intake, unstructured clinical note parsing, and document ingestion via Tesseract OCR and Poppler.",
      "Hybrid Code Matching: Levenshtein distance combined with LLM validation to map diagnoses and procedures to ICD-10 and CPT-4 code sets.",
      "Automated CMS Claim Generation: Generates formatted insurance claim PDFs using ReportLab with automated charge calculation and code summaries.",
      "Dual Interface & Pluggable LLMs: Modern desktop GUI with Tkinter plus headless CLI, supporting OpenAI and Mistral AI LLM backends.",
    ],
    techstack: {
      Python: "javascript-icon.webp",
      Flask: "flask-icon.jpg",
      AWS: "aws-icon.webp",
      TailwindCSS: "tailwind-icon.svg",
    },
    projectUrl: "https://github.com/Praveen-Suthar-08/MediSuite-AI_Agent.git",
    githubUrl: "https://github.com/Praveen-Suthar-08/MediSuite-AI_Agent.git",
    theme: "#059669",
    gradient_from: "#10b981",
    gradient_via: "#059669",
    gradient_to: "#064e3b",
  },
  {
    title: "ErrandX MarketPlace: Campus Microtask & Service Platform",
    projectHeading: "ErrandX MarketPlace",
    description:
      "Campus microtask & service marketplace built with MERN stack allowing students to request, bid on, and complete errands and academic tasks with domain verification.",
    imageUrl: "errandx.jpg",
    features: [
      "Student Identity Verification: Secure academic domain authentication guaranteeing campus exclusivity.",
      "Task Lifecycle Management: End-to-end workflow covering task creation, bidding, assignment, completion verification, and escrow-style reward releases.",
      "Optimized Query Schema: Fast filtering by urgency, bounty, campus location, and task categories.",
      "Real-time Status Feed: Instant notifications and responsive mobile-first UI for campus life on the go.",
    ],
    techstack: {
      MongoDB: "mongodb-icon.webp",
      React: "react-icon.png",
      NodeJS: "nodejs-icon.png",
      JWT: "jwt-icon.webp",
    },
    projectUrl: "https://github.com/Praveen-Suthar-08/ErrandX_market_place.git",
    githubUrl: "https://github.com/Praveen-Suthar-08/ErrandX_market_place.git",
    theme: "#10b981",
    gradient_from: "#34d399",
    gradient_via: "#059669",
    gradient_to: "#064e3b",
  },
  {
    title: "Smart Parking Slot Manager (PSM)",
    projectHeading: "Parking Slot Manager",
    description:
      "An Enterprise-grade, Highly Responsive Parking Management System built with Flask and Vanilla JS (Chart.js & Tailwind CSS). This system runs two highly-decoupled microservice portals capable of securely managing real-time slots, generating digital QR checks, tracking offline cash drawers, and dynamically surging prices during peak facility occupancy.",
    imageUrl: "parking-slot-manager.jpg",
    features: [
      "Decoupled Microservice Portals: Runs two highly decoupled portals capable of securely managing real-time slots and operator workflows.",
      "Digital QR Ticket Check-In/Out: Generates digital QR checks for contactless vehicle entry, automated parking duration calculation, and instant exit clearance.",
      "Dynamic Occupancy Price Surging: Algorithmic pricing model that surges slot rates dynamically during peak facility occupancy thresholds.",
      "Offline Cash Drawer & Analytics: Real-time telemetry tracking offline cash registers, shift-change reconciliation, and revenue charts powered by Chart.js.",
    ],
    techstack: {
      Flask: "flask-icon.jpg",
      JavaScript: "javascript-icon.webp",
      TailwindCSS: "tailwind-icon.svg",
      HTML5: "html-icon.webp",
    },
    projectUrl: "https://github.com/Praveen-Suthar-08/Parking_Slot_Manager.git",
    githubUrl: "https://github.com/Praveen-Suthar-08/Parking_Slot_Manager.git",
    theme: "#06b6d4",
    gradient_from: "#22d3ee",
    gradient_via: "#0891b2",
    gradient_to: "#164e63",
  },
  {
    title: "Hospital Management System (Web-Based System)",
    projectHeading: "Hospital Management",
    description:
      "Role-based healthcare web application for managing patients, doctors, and medical appointments with automated billing workflows and real-time scheduling.",
    imageUrl: "hospital-management.jpg",
    features: [
      "Role-Based Access Control: Multi-tier web application for managing patients, doctors, and appointments with secure access control.",
      "Real-Time Scheduling: Automated appointment booking workflows and real-time doctor availability calendars.",
      "Automated Billing Workflows: Optimized billing operations and invoice pipelines, improving healthcare administrative efficiency by 25%.",
      "Patient History & Diagnostics: Centralized patient health records, diagnostic summaries, and prescription tracking.",
    ],
    techstack: {
      React: "react-icon.png",
      NodeJS: "nodejs-icon.png",
      MongoDB: "mongodb-icon.webp",
      TailwindCSS: "tailwind-icon.svg",
    },
    projectUrl: "https://github.com/Praveen-Suthar-08/Hospital-Management-System.git",
    githubUrl: "https://github.com/Praveen-Suthar-08/Hospital-Management-System.git",
    theme: "#06b6d4",
    gradient_from: "#22d3ee",
    gradient_via: "#06b6d4",
    gradient_to: "#164e63",
  },
  {
    title: "Employee Management System (Web Application)",
    projectHeading: "Employee Management",
    description:
      "CRUD-based enterprise web system built with modular architecture and optimized database design to streamline employee records, attendance, and role permissions.",
    imageUrl: "employee-management.jpg",
    features: [
      "Modular CRUD Architecture: Built a comprehensive CRUD-based web system with modular architecture and optimized database schema design.",
      "Secure Access & Workflows: Implemented secure authentication and role-based workflows, reducing manual management effort by 40%.",
      "Departmental Analytics: Real-time visual tracking of team allocations, project progress, and attendance metrics.",
      "Streamlined Admin Dashboard: High-speed filtering, batch status updates, and automated reporting.",
    ],
    techstack: {
      React: "react-icon.png",
      NodeJS: "nodejs-icon.png",
      MongoDB: "mongodb-icon.webp",
      JWT: "jwt-icon.webp",
    },
    projectUrl: "https://github.com/Praveen-Suthar-08/Employee-Management-System-.git",
    githubUrl: "https://github.com/Praveen-Suthar-08/Employee-Management-System-.git",
    theme: "#8b5cf6",
    gradient_from: "#a78bfa",
    gradient_via: "#8b5cf6",
    gradient_to: "#4c1d95",
  },
  {
    title: "AI Customer Support Agent (LangGraph & LangChain)",
    projectHeading: "LangGraph Support Agent",
    description:
      "Autonomous, multi-turn customer support system built with LangGraph, LangChain, and Python featuring dynamic tool calling for order tracking, refund processing, and human escalation workflows.",
    imageUrl: "customer-support-agent.jpg",
    features: [
      "LangGraph Stateful Cycles: Engineered cyclical graph architectures in Python with persistent checkpointers for stateful, multi-turn customer dialogues.",
      "Dynamic Tool Calling: Real-time autonomous execution of order tracking, cancellation verification, customer lookup, and refund calculations.",
      "Human-in-the-Loop Escalation: Intelligent routing that gracefully escalates high-friction queries or edge cases to human agents with summarized conversation context.",
      "Grounded Knowledge Retrieval: Integrated vector store retrieval to ground agent responses in accurate store policies and FAQs, eliminating hallucinations.",
    ],
    techstack: {
      CrewAI: "crewai-icon.png",
      AWS: "aws-icon.webp",
      Redis: "redis-icon.png",
      TailwindCSS: "tailwind-icon.svg",
    },
    projectUrl: "https://github.com/Praveen-Suthar-08/Ai_Agent_customer_support_agent_langgraph.git",
    githubUrl: "https://github.com/Praveen-Suthar-08/Ai_Agent_customer_support_agent_langgraph.git",
    theme: "#8b5cf6",
    gradient_from: "#a855f7",
    gradient_via: "#8b5cf6",
    gradient_to: "#581c87",
  },
];

export const featuredProjects: PortfolioProject[] = allProjects.slice(0, 4);
