import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "ecommerce-admin-panel",
    title: "E-commerce Admin Panel",
    period: {
      start: "2023",
    },
    link: "https://github.com/jakariajishan/ecommerce-admin-panel", // Placeholder; replace with actual GitHub link
    skills: [
      "Laravel",
      "Next.js",
      "Tailwind CSS",
      "ESLint",
      "Dynamic Routing",
      "Server-Side Rendering",
      "Data Validation",
    ],
    description: `Laravel & Next.js-based e-commerce application built for dynamic routing and server-side rendering. It uses Tailwind CSS for modern, responsive styling and maintains clean code through custom ESLint configurations. The project structure includes shared components, schemas for data validation, and static assets in a public directory. Environment variables and custom configuration files enable flexible and scalable deployment.

  - Built with: Next.js for the admin panel, and Laravel for the backend.
  - The admin panel client is currently unable to fetch data due to an SSL certificate issue on the server. However, a working solution can be provided and full functionality demonstrated in a local environment.`,
    logo: "", // No logo provided
    isExpanded: true,
  },
  {
    id: "job-board",
    title: "Job Board",
    period: {
      start: "2023",
    },
    link: "https://github.com/jakariajishan/job-board", // Placeholder; replace with actual GitHub link
    skills: [
      "Laravel",
      "Breeze",
      "Blade",
      "Tailwind CSS",
      "Authentication",
      "Responsive Design",
    ],
    description: `This application features secure user authentication with login and password reset capabilities. It supports job listing management, allowing admins to create, update, and delete job posts. The UI is built using reusable Laravel Blade components. A fully responsive design ensures a seamless experience across all device types.

  - Built with: Laravel, Breeze, Blade, and TailwindCSS.`,
    logo: "", // No logo provided
    isExpanded: true,
  },
  {
    id: "book-review",
    title: "Book Review",
    period: {
      start: "2023",
    },
    link: "https://github.com/jakariajishan/book-review", // Placeholder; replace with actual GitHub link
    skills: [
      "Laravel",
      "Blade",
      "Tailwind CSS",
      "Caching",
      "Performance Optimization",
    ],
    description: `Book Review is a system where users can leave reviews and ratings for books. To optimize performance, caching is used for book-related data and the cache is invalidated whenever a review changes. This approach helps keep the data consistent and improves the application's efficiency.

  - Built with: Laravel, Blade, TailwindCSS.`,
    logo: "", // No logo provided
    isExpanded: true,
  },
  {
    id: "health-care",
    title: "Health Care",
    period: {
      start: "2023",
    },
    link: "https://github.com/jakariajishan/health-care", // Placeholder; replace with actual GitHub link
    skills: [
      "Next.js",
      "Tailwind CSS",
      "API Integration",
      "Responsive Design",
      "Scalable Architecture",
    ],
    description: `This project is focused on building a modern, scalable, and interactive healthcare platform, designed with an emphasis on API integration, responsive design, and user-friendly experience. The platform aims to streamline healthcare services, such as finding doctors, booking appointments, and managing medical records, while ensuring performance and accessibility across devices.

  - Built with: Next.js and Tailwind CSS.`,
    logo: "", // No logo provided
    isExpanded: true,
  },
  
];
