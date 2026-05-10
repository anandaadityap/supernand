export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string;
  techStack: string[];
  image?: string;
  link?: string;
  thumbnail?: string;
  gallery?: string[];
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  cvUrl?: string;
}
