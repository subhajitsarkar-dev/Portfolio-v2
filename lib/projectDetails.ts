export const projectInfo: ProjectInfo[] = [
  {
    id: 1,
    title: "Edu Meeting",
    descriptions:
      "A responsive Education Meeting UI designed to enhance virtual learning experiences.",
    techStack: "Html5, Css3, Boostrap, Font Awesome",
    liveDemo:
      "https://education-tau-seven.vercel.app/index.html#[object%20Object]",
    github: "https://github.com/subhajitsarkar-dev/Education",
    badge: "Frontend",
  },
  {
    id: 2,
    title: "Kanban Board",
    descriptions:
      "Kanban Board is a simple task manager to organize tasks into To Do, Doing, and Done columns.",
    techStack: "Html, Css, JavaScript",
    liveDemo: "https://kanban-board-opal-seven.vercel.app/",
    github: "https://github.com/subhajitsarkar-dev/Kanban-Board",
    badge: "Frontent",
  },
  {
    id: 3,
    title: "Weather App",
    descriptions:
      "A responsive weather app showing real-time conditions, 3-day forecasts, and hourly updates based on your location.",
    techStack: "NextJs, TypeScript, Tailwind",
    liveDemo: "https://weather-application-se5x.vercel.app/",
    github: "https://github.com/subhajitsarkar-dev/Weather-Application",
    badge: "Frontend",
  },
  {
    id: 4,
    title: "Task Manager",
    descriptions:
      "A full stack Task Manager used to create, organize, track, and manage tasks or activities efficiently.With Authentication.",
    techStack: "NextJs, TypeScript, Tailwind, Express, Mongoose, MongoDB",
    liveDemo: "",
    github: "https://github.com/subhajitsarkar-dev/Task-Manager",
    badge: "Full Stack",
  },
];

export type ProjectInfo = {
  id: number;
  title: string;
  descriptions: string;
  techStack: string;
  liveDemo: string;
  github: string;
  badge: string;
};
