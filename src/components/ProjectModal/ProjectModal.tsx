import React, { useEffect } from "react";
import { Project } from "@/types/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./ProjectModal.module.css";
import "swiper/css";
import "swiper/css/navigation";

interface ProjectModalProps extends Project {
  onClose: () => void;
}

export default function ProjectModal({
    title,
    description,
    image,
    images,
    github,
    demo,
    techs,
    body,
    onClose,
}: ProjectModalProps)
{
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-dark-graphite-gray rounded-lg w-full max-w-2xl shadow-lg flex flex-col relative max-h-[90vh]">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gunmetal-gray">
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <button
                    onClick={onClose}
                    className="text-white text-2xl hover:text-neon-cyan transition absolute top-4 right-6"
                    aria-label="Close"
                >
                    &times;
                </button>
                </div>
                {/* Body */}
                <div className="p-6 overflow-y-auto flex-1">
                    {images && images.length > 0 ? (
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            className="mb-4 rounded"
                            style={{ width: "100%", height: "240px" }}
                        >
                        {images.map((img, idx) => (
                            <SwiperSlide key={idx}>
                            <img
                                src={img}
                                alt={`${title} slide ${idx + 1}`}
                                className="object-cover h-60 w-full rounded"
                            />
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    ) : (
                        <img src={image as string} alt={title} className="rounded w-full mb-4" />
                    )}
                    {(typeof body === "string" ?
                        (
                            <div className={`text-gray-300 mb-4 ${styles.detailsContent}`} dangerouslySetInnerHTML={{ __html: body as string }} />
                        ) :
                        (
                            <div className="text-gray-300 mb-4">{body}</div>
                        )
                    )}
                    
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
                    </div>
                    {/* Footer */}
                    <div className="flex justify-end gap-3 p-6 border-t border-gunmetal-gray">
                    {
                        github && (
                            <a
                                href={github || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-1 bg-gunmetal-gray text-neon-cyan rounded hover:bg-vscode-blue transition"
                            >
                                GitHub
                            </a>
                        )
                    }
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
                    <button
                        onClick={onClose}
                        className="px-4 py-1 bg-white text-black rounded hover:bg-neon-cyan hover:text-black transition"
                    >
                        Close
                    </button>
                </div>
            </div>
            </div>
    );
}