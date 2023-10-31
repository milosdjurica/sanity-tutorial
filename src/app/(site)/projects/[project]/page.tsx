import React from "react";
import { revalidatePath } from "next/cache";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getProject } from "../../../../../sanity/sanity-utils";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  // ! find better solution
  revalidatePath(`/projects/${project.slug}`);

  return (
    <div className="max-w-3xl mx-auto py-20">
      <header className="flex justify-between items-center">
        <h1
          className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text 
        text-transparent text-5xl drop-shadow font-extrabold"
        >
          {project.name}
        </h1>
        <a
          className="bg-gray-100 rounded-lg text-gray-500 
          font-bold py-3 px-4 whitespace-nowrap
          hover:bg-pink-500 hover:text-pink-100 transition "
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferer"
        >
          View Project
        </a>
      </header>

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
}
