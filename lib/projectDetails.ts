export const projectInfo: ProjectInfo[] = [
  {
    id: 1,
    title: "Kanban Board",
    descriptions:
      "Kanban Board is a simple task manager to organize tasks into To Do, Doing, and Done columns.",
    techStack: "Html, Css, JavaScript",
    liveDemo: "https://kanban-board-opal-seven.vercel.app/",
    github: "https://github.com/subhajitsarkar-dev/Kanban-Board",
    badge: "Frontent",
  },
  {
    id: 2,
    title: "Weather App",
    descriptions:
      "A responsive weather app showing real-time conditions, 3-day forecasts, and hourly updates based on your location.",
    techStack: "NextJs, TypeScript, Tailwind",
    liveDemo: "https://weather-application-se5x.vercel.app/",
    github: "https://github.com/subhajitsarkar-dev/Weather-Application",
    badge: "Frontend",
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
