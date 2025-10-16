import {PortfolioData} from '@/types'
import {
    SiAngular,
    SiDocker,
    SiExpress,
    SiGit,
    SiHibernate,
    SiJavascript,
    SiJenkins,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql, SiPrisma,
    SiReact,
    SiSpring,
    SiSpringboot, SiSvelte,
    SiTailwindcss,
    SiTypescript,
    SiVite,
    SiWebpack,
} from '@icons-pack/react-simple-icons'
import Mmsql from '@/assets/icons/mssql.svg'
import Java from '@/assets/icons/java.svg'
import Aws from '@/assets/icons/aws.svg'
import Jenkins from '@/assets/icons/jenkins.svg'

export const portfolioData: PortfolioData = {//fixme miko change icons
    skills: [
        {name: 'JavaScript', icon: SiJavascript, category: 'frontend'},
        {name: 'TypeScript', icon: SiTypescript, category: 'frontend'},
        {name: 'Angular', icon: SiAngular, category: 'frontend'},
        {name: 'React', icon: SiReact, category: 'frontend'},
        {name: 'Next.js', icon: SiNextdotjs, category: 'frontend'},
        {name: 'Svelte', icon: SiSvelte, category: 'frontend'},
        {name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frontend'},

        {name: 'Java', icon: Java, category: 'backend'},
        {name: 'Node.js', icon: SiNodedotjs, category: 'backend'},
        {name: 'Spring', icon: SiSpring, category: 'backend'},
        {name: 'Spring Boot', icon: SiSpringboot, category: 'backend'},
        {name: 'Express', icon: SiExpress, category: 'backend'},
        {name: 'Hibernate', icon: SiHibernate, category: 'backend'},
        {name: 'Prisma', icon: SiPrisma, category: 'backend'},

        {name: 'MSSQL', icon: Mmsql, category: 'database'},
        {name: 'MySql', icon: SiMysql, category: 'database', class: 'opacity-50'},
        {name: 'PostgreSQL', icon: SiPostgresql, category: 'database'},
        {name: 'MongoDB', icon: SiMongodb, category: 'database'},

        {name: 'AWS', icon: Aws, category: 'cloud & devops'},
        {name: 'Docker', icon: SiDocker, category: 'cloud & devops'},
        {name: 'Jenkins', icon: Jenkins, category: 'cloud & devops'},

        {name: 'Git', icon: SiGit, category: 'tools'},
        {name: 'Webpack', icon: SiWebpack, category: 'tools'},
        {name: 'Vite', icon: SiVite, category: 'tools'},
    ],

    projects: [
        // {
        //     title: "Real-Time Collaboration Platform",
        //     description: "Built a full-stack application with real-time features using Spring Boot backend and React frontend, handling 28,000+ concurrent users.",
        //     technologies: ["Spring Boot", "React", "PostgreSQL", "WebSocket"],
        //     github: "https://github.com/example/project1",
        //     demo: "https://project1-demo.com"
        // },
        // {
        //     title: "E-Commerce Microservices",
        //     description: "Designed and implemented microservices architecture with Spring Boot, reducing system response time by 40%.",
        //     technologies: ["Spring Boot", "Docker", "AWS", "MongoDB"],
        //     github: "https://github.com/example/project2",
        //     demo: "https://project2-demo.com"
        // },
        // {
        //     title: "AI-Powered Analytics Dashboard",
        //     description: "Full-stack analytics platform with machine learning integration, saving company $15K monthly in manual processes.",
        //     technologies: ["Next.js", "TypeScript", "Python", "AWS"],
        //     github: "https://github.com/example/project3",
        //     demo: "https://project3-demo.com"
        // }
    ],

    experience: [
        {
            company: 'EngageYa by Impact.com',
            role: 'Senior Full Stack Developer',
            period: '2019 - 2025',
            description: 'Led development of core platform features, mentored junior developers, and implemented performance optimizations resulting in 50% faster load times.',
        },
        {
            company: 'EngageYa',
            role: 'Full Stack Developer',
            period: '2018 - 2019',
            description: 'Built scalable web applications from scratch, integrated third-party APIs, and collaborated with cross-functional teams to deliver high-quality products.',
        },
    ],
}

export const skillIcons = {
    react: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M12 2c2.2 0 4.2.9 5.7 2.3L12 10L6.3 4.3C7.8 2.9 9.8 2 12 2z"/><path d="M2 12c0-2.2.9-4.2 2.3-5.7L10 12L4.3 17.7C2.9 16.2 2 14.2 2 12z"/><path d="M12 22c-2.2 0-4.2-.9-5.7-2.3L12 14l5.7 5.7c-1.5 1.4-3.5 2.3-5.7 2.3z"/><path d="M22 12c0 2.2-.9 4.2-2.3 5.7L14 12l5.7-5.7c1.4 1.5 2.3 3.5 2.3 5.7z"/></svg>`,
    nextjs: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm2.5 14.5L9 11v5.5H7.5V7h1.75l5.25 5.5V7H16v9.5h-1.5z"/></svg>`,
    typescript: `<svg viewBox="0 0 24 24"><rect x="1" y="1" width="22" height="22" rx="3" fill="#3178C6"/><path d="M12.5 6v12M8.5 12h8M16 8.5L12.5 12 16 15.5" stroke="white" stroke-width="1.5" fill="none"/></svg>`,
    javascript: `<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="3" fill="#F7DF1E"/><path d="M7.5 14.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5V9h1.5v5.5c0 2.5-2 4.5-4.5 4.5S4.5 17 4.5 14.5h1.5zm9-5.5v1.5h-1.5v5.5h-1.5V10.5H12V9h4.5z" fill="#000"/></svg>`,
    spring: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z" fill="#6DB33F"/></svg>`,
    java: `<svg viewBox="0 0 24 24"><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218" fill="#ED8B00"/></svg>`,
    nodejs: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-3 5-3v6zm2 0V9l5 3-5 3z" fill="#339933"/></svg>`,
    postgresql: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#336791"/></svg>`,
    mongodb: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#47A248"/></svg>`,
    aws: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#FF9900"/></svg>`,
    docker: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#2496ED"/></svg>`,
    git: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#F05032"/></svg>`,
}