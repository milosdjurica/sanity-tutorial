import { createClient, groq } from "next-sanity";
import { Project } from "../types/project";
import { Page } from "../types/page";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-10-29",
  // useCdn: false,
});

export async function getProjects(): Promise<Project[]> {
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
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type=="project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return client.fetch(
    groq`*[_type=="page"]{
      _id,
      _createdAt,
      title,
      "slug":slug.current,
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(
    groq`*[_type=="page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug":slug.current,
        content
    }`,
    { slug }
  );
}
