import { useState } from "react";
import { Project } from "@/types/Project";
import { ProjectModal } from "@/components";
import { useTranslation } from "react-i18next";
export default function ProjectCard({
    title,
    description,
    image,
    images,
    github,
    demo,
    techs,
    body
}: Project) 
{
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);
    const getDetailsProject = (): any =>{
        if(typeof body !== "string"){
            return body;
        }
        const bodyStr = body as string;
        return bodyStr && bodyStr.trim().length > 0 ? bodyStr : description;
    }
    return (
        <>
            <div className="bg-dark-graphite-gray rounded-lg shadow-lg overflow-hidden flex flex-col">
                <img src={image} alt={title} className="h-48 w-full object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                    <p className="text-gray-400 mb-4 flex-1">{description}</p>
                    {techs && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {techs.map((tech) => (
                        <span
                            key={tech}
                            className="bg-vscode-blue text-xs text-white px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                        ))}
                    </div>
                    )}
                    <div className="mt-auto flex gap-3">
                        <button 
                            className="px-4 py-1 bg-gunmetal-gray text-neon-cyan rounded hover:bg-vscode-blue transition"
                            onClick={()=> setShowModal(true)}
                        >
                            { t("readmore") }
                        </button>
                        {(github && github.length  > 0) && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-1 bg-gunmetal-gray text-neon-cyan rounded hover:bg-vscode-blue transition"
                            >
                                GitHub
                            </a>
                        )}
                        
                        {demo && (
                            <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-1 bg-neon-cyan text-black rounded hover:bg-vscode-blue hover:text-white transition"
                            >
                            Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
            {showModal && (
                <ProjectModal
                title={title}
                description={description}
                image={image}
                github={github}
                demo={demo}
                techs={techs}
                body={getDetailsProject()}
                images={images}
                onClose={() => setShowModal(false)}
                />
            )}
        </>
    );
}