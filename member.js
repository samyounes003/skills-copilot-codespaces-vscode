function skillsMember() {
    return {
        name: "skills",
        description: "Skills",
        type: 1,
        options: [
            {
                name: "member",
                description: "The member to get skills for",
                type: 6,
                required: true,
            },
        ],
    };
}