import { revalidatePath } from "next/cache";
import { getProjects } from "../../sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  revalidatePath("/");
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        All{" "}
        <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
          projects
        </span>
      </h1>

      <p className="mt-3 text-xl text-gray-600">Hi everyone!</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      {projects.map((project) => (
        <div className="border border-gray-500 rounded-lg " key={project._id}>
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={250}
              height={250}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="font-extrabold bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
            {project.name}
          </div>
        </div>
      ))}
    </div>
  );
}
