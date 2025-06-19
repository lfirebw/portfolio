import { Project } from "@/types/Project";
import { ProjectCard } from "@/components";

export default function ProjectSection()
{
    const projects: Project[] = [
    {
        title: "Awesome Project",
        description: "A short description of the project goes here.",
        body: null,
        images:["https://placehold.co/600x400","https://placehold.co/600x400","https://placehold.co/600x400"],
        image: "https://placehold.co/600x400", // Replace with your image path
        github: "https://github.com/lfirebw/awesome-project",
        demo: "https://awesome-project-demo.com",
        techs: ["React", "Tailwind", "TypeScript"],
    },
    {
        title: "Another Project",
        description: "This is another cool project in my portfolio.",
        body: "<p>this is a test</p><p>New line of text</p>",
        image: "https://placehold.co/600x400",
        github: "https://github.com/lfirebw/another-project",
        techs: ["Node.js", "Express", "MongoDB"],
    },
    {
        title: "Awesome Project",
        description: "A short description of the project goes here.",
        body: null,
        image: "https://placehold.co/600x400", // Replace with your image path
        techs: ["React", "Tailwind", "TypeScript"],
    },
    {
        title: "Another Project",
        description: "This is another cool project in my portfolio.",
        body: null,
        image: "https://placehold.co/600x400",
        techs: ["Node.js", "Express", "MongoDB"],
    },
    // Add more projects as needed
    ];
    return(
        <section id='projects' className="relative mb-10 pt-[100px]">
            <div className="container relative mx-auto z-10">
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-gunmetal-gray my-4">Proyectos</h1>
                <p className="text-xl text-slate-300 mb-10">Cada trabajo realizado se realiza con toda profesionalidad y la dedicación requerida para lograr los objetivos esperados por los clientes.</p>
                {/* Lista de proyectos */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}