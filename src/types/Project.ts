import { ReactNode } from "react";

export interface Project {
    title: string;
    description: string;
    body: string | ReactNode;
    image?: string;
    images?: string[]
    github?: string | null;
    demo?: string | null;
    techs?: string[];
}