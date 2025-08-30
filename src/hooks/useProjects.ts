import { useEffect, useState } from "react";
import { fetchProjects } from "@/services";
import { Project, ApiProject } from "@/types";
import { useTranslation } from "react-i18next";

export default function useProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { i18n } = useTranslation();
    
    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        const sendRequest = (lang:string)=>{
            fetchProjects(i18n.language, 1)
                .then((data: any) => {
                    const result : ApiProject[] = data.data;
                    if (cancelled) return;
                    const mapped : Project[] = result.map((item) => ({
                        title: item.title,
                        description: item.description,
                        image: item.image,
                        github: item.source || undefined,
                        demo: item.visit || undefined,
                        techs: item.tags ? item.tags.split(",") : [],
                        body: item.details || "",
                        images: item.images?.map(itemImage => (itemImage.url)) || []
                    }));
                    setProjects(mapped);
                    setLoading(false);
                })
                .catch((e) => {
                    if (cancelled) return;
                    setError(e.message || "Failed to fetch projects");
                    setLoading(false);
                });
        } 
        const onLangChange = (lng: string) => {
            sendRequest(lng);
        }
        i18n.on("languageChanged",onLangChange)
        sendRequest(i18n.language);
        return () => {
            cancelled = true;
            i18n.off("languageChanged",onLangChange);
        };
    }, []);

    return { projects, loading, error };
}