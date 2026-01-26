
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Diseño' | 'Soft Skills';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
