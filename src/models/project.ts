

export interface Project {
    id: number;
    img: string;
    thumbs: string[];
    title: string; // Agrega otras propiedades según sea necesario
    description: string;
  }
  
  export interface ChildComponentProps {
    project: Project[]; // La propiedad `project` es un array de `Project`
  }