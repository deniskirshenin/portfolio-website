import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url';
import {visionTool} from '@sanity/vision';

const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    title: "Portfolio website",
    useCdn: true,
    apiVersion: "2023-10-23",
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    schema: { types: schemas }
});

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);

export default config;