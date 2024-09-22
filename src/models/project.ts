

export interface Project {
    id: number;
    img: string;
    thumbs: string[];
    title: string;
    description: string;
    technologies: string[];
  }
  
  export interface ChildComponentProps {
    project: Project[];
  }