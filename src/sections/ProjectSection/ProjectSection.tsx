import { Project } from "@/types/Project";
import { ProjectCard } from "@/components";
import { useProjects } from "@/hooks";
import { useTranslation } from "react-i18next";

export default function ProjectSection()
{
    const { t } = useTranslation();
    const { 
        projects: ProjectList, 
        loading: loadingProjects, 
        error: messageError 
    } = useProjects();

    if (loadingProjects) {
        return <div className="text-center text-neon-cyan py-10">Loading projects...</div>;
    }
    if (messageError) {
        return <div className="text-center text-red-400 py-10">Error loading projects: {messageError}</div>;
    }
    return(
        <section id='projects' className="relative mb-10 pt-[100px]">
            <div className="container relative mx-auto z-10">
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-gunmetal-gray mt-4 mb-12">
                    { t("projects") }
                </h1>
                {/* Lista de proyectos */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {ProjectList.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}