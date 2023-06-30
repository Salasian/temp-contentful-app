import { useFetchProjects } from "./fetchProjects";

export const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section>
      <div className="projects">
        <h2 className="title">projects</h2>
      </div>
      <div className="title-underline"></div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, img, url, title } = project;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
