interface ProjectInterface {
    image: string;
    url : string;
    title: string;
    role: string;
    technologies: array<string>,
    description: string;
    tools:  array<string>,
    type: string;
    start: string;
    end: string;
}

export {
    ProjectInterface,
}