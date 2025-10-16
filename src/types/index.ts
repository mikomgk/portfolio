import React from 'react'

export interface Skill {
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    category: 'frontend' | 'backend' | 'database' | 'cloud & devops' | 'tools';
    class?: string;
}

export interface IProject {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
}

export interface IExperience {
    company: string;
    role: string;
    period: string;
    description: string;
}

export interface PortfolioData {
    skills: Skill[];
    projects: IProject[];
    experience: IExperience[];
}