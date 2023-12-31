const skills = {
    name: "skill",
    title: "Skill",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            description: "Title of skill",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        }
    ],
};

export default skills;