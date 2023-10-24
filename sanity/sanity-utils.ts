import { createClient, groq } from "next-sanity";
import { NextRequest } from "next/server";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    useCdn: true,
    apiVersion: "2023-10-23",
});

const socials = groq`
    *[_type == "social"]
`;

const pageInfo = groq`
    *[_type == "pageInfo"][0]
`;

const projectsInfo = groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`;

export async function getSocials() {
    return client.fetch(socials, {cache: 'force-cache'});
};

export async function getPageInfo() {
    return client.fetch(pageInfo, {cache: 'force-cache'});
};

export async function getProjects() {
    return client.fetch(projectsInfo, {cache: 'force-cache'});
};

