import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "kqmzr92t",
    dataset: "production",
    title: "Portfolio website",
    apiVersion: "2023-10-23",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;