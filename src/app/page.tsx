import {Suspense} from 'react'
import FloatingSkills from '@/components/FloatingSkills'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection1 from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import SkillsSection from '@/components/sections/SkillSection'

export default function Home() {
    return (
        <main className="relative min-h-screen bg-navy-950">
            <Suspense fallback={null}>
                <FloatingSkills/>
            </Suspense>

            <Navigation/>

            <div className="ml-0 lg:ml-(--navigation-width) main-scroll-container">
                <HeroSection/>
                <ExperienceSection/>
                <ProjectsSection1/>
                <SkillsSection/>
                <ContactSection/>
            </div>
        </main>
    )
}