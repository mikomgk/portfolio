import React from 'react'

export interface Skill {
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    category: 'frontend' | 'backend' | 'database' | 'cloud & devops' | 'tools';
    class?: string;
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
}

export interface PortfolioData {
    skills: Skill[];
    projects: Project[];
    experience: Experience[];
}