import { createClient, groq } from "next-sanity";
import { Project } from "../types/project";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
    dataset: "production",
    apiVersion: "2023-10-29",
  });

  // ! Have a caching problem, try to fix it later....
  // ! If change query just by adding SPACE or anything -> it will act like totally new query???
  // ! Query right now shows old data

  return client.fetch(
    groq`*[_type=="project"]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content
    }`,
    {
      revalidate: 10,
    }
  );
}
