export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  category: string;
  thumbnail: string;
  video?: string;
  href: string;
  aspect: "landscape" | "portrait" | "square";
}

export interface Service {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
