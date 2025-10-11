import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Jakaria",
  lastName: "Jishan",
  displayName: "Jakaria Jishan",
  username: "jakariajishan",
  gender: "male",
  pronouns: "he/him",
  bio: "Building thoughtful web experiences.",
  flipSentences: [
    "Building thoughtful web experiences.",
    "Software Developer",
    "Crafting clean and scalable backend systems",
  ],
  address: "ECB Chattar, Dhaka Cantonment, Dhaka - 1206",
  phoneNumber: "Kzg4MDE4MjMyNTYwNTM=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "amFrYXJpYWppc2hhbjAwNkBnbWFpbC5jb20=", // base64 encoded
  website: "#",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Laravel Developer",
      company: "WemaxDevs",
      website: "https://wemaxdevs.com/",
    },
    {
      title: "Jr. Software Engineer",
      company: "DevSpace",
      website: "https://www.linkedin.com/company/devspacebd",
    },
    {
      title: "CTO & Co-Founder",
      company: "Infivro",
      website: "https://infivro.com",
    },
  ],
  about: `
Hello, World! I am Md. Golam Jakaria — a Software Engineer passionate about creating robust, user-centric web and mobile solutions with seamless functionality and modern designs.

With 3+ years of experience, I specialize in building high-quality full-stack applications using Next.js, React, Laravel, Ruby on Rails, and modern front-end and back-end technologies. Beyond work, I love exploring new tools and turning ideas into reality through personal projects and mentoring junior developers.

One of my key projects, [KokoLive](https://github.com/kh-abir/koko-live-admin), developed in 2024, is an engaging mobile application similar to TikTok, where users can create, share, and interact with live streaming and short videos. It includes a robust admin panel for content moderation and user management, built with Flutter for the mobile app, React.js for the admin panel, and Ruby on Rails for the backend.

I'm also the creator of an [E-commerce Admin Panel](https://github.com/JakariaJishan/next-ecommerce-api) — a Laravel & Next.js-based application built for dynamic routing, server-side rendering, and responsive styling with Tailwind CSS. It features clean code through custom ESLint configurations, shared components, data validation schemas, and flexible deployment options.

Let's connect and collaborate!
  `,
  avatar: "/images/avatar.jpg",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1759581475",
  namePronunciationUrl: "/audio/chanhdai.mp3",
  keywords: [
    "jakariajishan",
    "kokolive",
    "infivro",
  ],
  dateCreated: "2025-10-11", // YYYY-MM-DD
};
