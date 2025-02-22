export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
  type: 'hackathon' | 'award' | 'certification';
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'other';
}