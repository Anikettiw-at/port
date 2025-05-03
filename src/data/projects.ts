export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce site with user authentication, product catalog, and Stripe integration.",
    imageUrl: "https://picsum.photos/seed/project1/600/400",
    tags: ["TypeScript", "React", "Next.js", "TailwindCSS", "Python", "Database"],
    liveUrl: "#", // Replace with actual URL
    repoUrl: "#", // Replace with actual URL
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A simple and intuitive task management application built with vanilla JavaScript and local storage.",
    imageUrl: "https://picsum.photos/seed/project2/600/400",
    tags: ["HTML", "CSS", "JavaScript"],
    // liveUrl: "#", // Optional: Link if deployed
    repoUrl: "#", // Replace with actual URL
  },
  {
    id: 3,
    title: "Portfolio Website V1",
    description: "My previous portfolio site, showcasing earlier projects and skills. Focused on CSS animations.",
    imageUrl: "https://picsum.photos/seed/project3/600/400",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#", // Replace with actual URL
    // repoUrl: "#", // Optional: Link if private or unavailable
  },
   {
    id: 4,
    title: "Data Analysis Dashboard",
    description: "A dashboard visualizing data insights using Python libraries and a web framework.",
    imageUrl: "https://picsum.photos/seed/project4/600/400",
    tags: ["Python", "JavaScript", "CSS"], // Add relevant frontend tags if applicable
    repoUrl: "#", // Replace with actual URL
  },
   {
    id: 5,
    title: "Component Library",
    description: "A set of reusable UI components built with React and styled using TailwindCSS.",
    imageUrl: "https://picsum.photos/seed/project5/600/400",
    tags: ["React", "TypeScript", "TailwindCSS"],
    repoUrl: "#", // Replace with actual URL
  },
   {
    id: 6,
    title: "Simple Python Script",
    description: "A utility script written in Python for automating a specific task.",
    imageUrl: "https://picsum.photos/seed/project6/600/400",
    tags: ["Python"],
    repoUrl: "#", // Replace with actual URL
  },
];
