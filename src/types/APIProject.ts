import { ApiProjectImage } from "./APIProjectImage";
export interface ApiProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string;
  source: string | null;
  visit: string | null;
  status: number;
  details?: string;
  created_at: string;
  updated_at: string;
  
  images?: ApiProjectImage[] | null;
}