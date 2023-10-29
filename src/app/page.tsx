import { getProjects } from "../../sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="mb-10">All projects</h1>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </div>
  );
}
