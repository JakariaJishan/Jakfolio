import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "wemaxdevs",
    companyName: "WemaxDevs",
    companyLogo: "", // No logo provided in resume
    positions: [
      {
        id: "wemaxdevs-laravel-dev",
        title: "Laravel Developer",
        employmentPeriod: {
          start: "05.2025",
          end: "Present",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Customized existing CodeCanyon Laravel applications to meet diverse client requirements, refactoring projects with PHP, Laravel, and MySQL.
- Contributed to Courier management projects and modules for the CodeCanyon marketplace, implementing feature-rich plugins using Laravel’s service containers and package tooling.
- Integrated payment gateways (Stripe, PayPal, Paystack, and Paymob) and third-party APIs, ensuring secure transaction flows and seamless data synchronization.
- Collaborated with UI/UX designers to adapt themes and build responsive front-ends with Blade templates, Bootstrap, and Tailwind CSS.`,
        skills: [
          "PHP",
          "Laravel",
          "MySQL",
          "Stripe",
          "PayPal",
          "Paystack",
          "Paymob",
          "Blade",
          "Bootstrap",
          "Tailwind CSS",
          "Agile",
          "Teamwork",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "devspace",
    companyName: "DEVSPACE",
    companyLogo: "", // No logo provided in resume
    positions: [
      {
        id: "devspace-software-eng",
        title: "Software Engineer",
        employmentPeriod: {
          start: "01.2024",
          end: "04.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed the backend and admin panel for the KokoLive mobile application using React, Ruby on Rails, and PostgreSQL.
- Worked on blog web projects, including integrating chat functionality, and utilizing Ruby on Rails and PostgreSQL.
- Contributed to a travel management project, working with Ruby on Rails, PostgreSQL, Next.js, and Tailwind CSS.
- Collaboratively developed a company portfolio website, using Next.js and Material-UI.`,
        skills: [
          "React",
          "Ruby on Rails",
          "PostgreSQL",
          "Next.js",
          "Tailwind CSS",
          "Material UI",
          "Chat Integration",
          "Teamwork",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "microverse",
    companyName: "MICROVERSE",
    companyLogo: "", // No logo provided in resume
    positions: [
      {
        id: "microverse-mentor",
        title: "Mentor (Volunteer)",
        employmentPeriod: {
          start: "11.2022",
          end: "12.2023",
        },
        employmentType: "Part-time",
        icon: "education",
        description: `- Mentored 4 junior web developers per week, providing technical support via Slack and Zoom.
- Proposed improvements to code organization to improve code quality and overall performance by 30%.
- Strategized and implemented motivation-enhancement advice, leading to a significant 50% reduction in student dropout rates within a four-month timeframe.`,
        skills: [
          "Mentoring",
          "Code Review",
          "Technical Support",
          "Slack",
          "Zoom",
          "Remote Collaboration",
          "Problem-solving",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
  id: "education",
  companyName: "Education",
  positions: [
    {
      id: "usa-bscse",
      title: "University of South Asia",
      employmentPeriod: {
        start: "01.2019",
        end: "12.2023",
      },
      icon: "education",
      description: `- Bachelor's degree in Computer Science and Engineering.
- Relevant Courses: OOP (Java), Database Management System, Software Engineering, Compiler Design, System Analysis, Operating System.`,
      skills: [
        "OOP (Java)",
        "Database Management System",
        "Software Engineering",
        "Compiler Design",
        "System Analysis",
        "Operating System",
      ],
    },
    {
      id: "microverse-fsweb",
      title: "Microverse",
      employmentPeriod: {
        start: "11.2022",
        end: "12.2023",
      },
      icon: "education",
      description: `- Remote Full Stack Web Development Program, Full-Time.
- Spent 1000+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, Redux, and Next.js.
- Developed skills in remote pair programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers.`,
      skills: [
        "Algorithms",
        "Data Structures",
        "Ruby",
        "Rails",
        "JavaScript",
        "React",
        "Redux",
        "Next.js",
        "Remote Pair Programming",
        "GitHub",
        "Git-flow",
        "Daily Standups",
      ],
    },
  ],
},
];
