import { createClient, groq } from "next-sanity";

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
        "image":image.asset->url,
        technologies[]->
    }
`;

export async function getSocials() {
    return client.fetch(socials, {cache: 'no-cache'});
};

export async function getPageInfo() {
    return client.fetch(pageInfo, {cache: 'no-cache'});
};

export async function getProjects() {
    return client.fetch(projectsInfo, {cache: 'no-cache'});
};

