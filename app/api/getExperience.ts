import { sanityClient } from "@/sanity.config";
import { Experience } from "@/typings";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    }
`;

type Data = {
    experience:  Experience[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const experience: Experience[] = await sanityClient.fetch(query);

    res.status(200).json({ experience });
}