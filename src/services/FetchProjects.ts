import { ApiProject } from "@/types";
export default async function fetchProjects(code:string,findImages: Number = 0): Promise<ApiProject[]> {
    const URL: string = `https://emmyseco.com/api/portfolio/projects?lang=${code}&images=${findImages}`;
    // const URL: string = `https://servbay.host/api/portfolio/projects?lang=${code}`;
    const res = await fetch(URL);
    if (!res.ok) throw new Error("Failed to fetch projects");
    return res.json();
}