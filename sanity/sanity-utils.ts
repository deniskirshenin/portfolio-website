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

const skills = groq`
    *[_type == "skill"] {
        ...,
        "image":image.asset->url
    }
`;

export async function getSocials() {
    return client.fetch(socials, {cache: 'no-store'});
};

export async function getPageInfo() {
    return client.fetch(pageInfo, {cache: 'no-store'});
};

export async function getProjects() {
    return client.fetch(projectsInfo, {cache: 'no-store'});
};

export async function getSkills() {
    return client.fetch(skills, {cache: 'no-store'})
}

