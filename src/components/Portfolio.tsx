import { useEffect } from "react"
import { ThemeProvider } from "./ThemeProvider"
import Navigation from "./portfolio/Navigation"
import HeroSection from "./portfolio/HeroSection"
import AboutSection from "./portfolio/AboutSection"
import ProjectsSection from "./portfolio/ProjectsSection"
import SkillsSection from "./portfolio/SkillsSection"
import TimelineSection from "./portfolio/TimelineSection"
import ContactSection from "./portfolio/ContactSection"
import Footer from "./portfolio/Footer"

export default function Portfolio() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <main>
          <div id="home">
            <HeroSection />
          </div>
          
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <TimelineSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  )
}