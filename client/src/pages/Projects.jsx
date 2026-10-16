// Projects page: shows one card for each project in the list

// List of my projects. To add a new project, add a new item here.
const projects = [
  {
    title: "Personal Portfolio Website",
    image: "/images/project1.png",
    role: "Designer and developer",
    outcome:
      "Built a multi-page portfolio with React and React Router, including a navigation bar, project showcase and contact form.",
  },
  {
    title: "Sky Runner (Game Concept)",
    image: "/images/project2.jpg",
    role: "Game designer and programmer",
    outcome:
      "Designed a 2D endless runner with player movement, obstacle collision, scoring and increasing difficulty. Planned to build it in Unity with C#.",
  },
  {
    title: "Maze Escape (Game Concept)",
    image: "/images/project3.jpg",
    role: "Game designer",
    outcome:
      "Designed a 2D puzzle game where the player finds keys and escapes a maze. Planned features include levels, a timer and enemy patrols.",
  },
];

function Projects() {
  return (
    <div className="page">
      <h1>Projects</h1>

      <div className="projects-grid">
        {/* Make one card for each project */}
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p><strong>My role:</strong> {project.role}</p>
              <p><strong>Outcome:</strong> {project.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;