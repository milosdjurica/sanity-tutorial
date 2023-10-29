import { getProjects } from "../../sanity/sanity-utils";

export default function Home() {
  const projects = getProjects();

  return (
    <div>
      <h1>All projects</h1>
    </div>
  );
}
