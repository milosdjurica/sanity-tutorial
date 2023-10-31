import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID ?? "",
  dataset: "production",
  title: "My Tutorial",
  apiVersion: "2023-10-29",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
