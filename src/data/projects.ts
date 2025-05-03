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
  // Removed project 1 (E-commerce Platform) as it included Python
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
   // Removed project 4 (Data Analysis Dashboard) as it included Python
   {
    id: 5,
    title: "Component Library",
    description: "A set of reusable UI components built with React and styled using TailwindCSS.",
    imageUrl: "https://picsum.photos/seed/project5/600/400",
    tags: ["React", "TypeScript", "TailwindCSS"],
    repoUrl: "#", // Replace with actual URL
  },
   // Removed project 6 (Simple Python Script) as it included Python
];
