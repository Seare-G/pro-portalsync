import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroBg from "@/assets/hero-bg.jpg"

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Developer workspace"
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-hero-gradient opacity-5" />
      </div>

      {/* Content */}
      <div className="container-width section-padding relative z-10">
        <div className="text-center animate-fade-in">
          {/* Professional greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-scale-in">
              👋 Available for freelance work
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            <span className="block mb-2">Hi, I'm</span>
            <span className="gradient-text animate-gradient">Alex Johnson</span>
          </h1>

          {/* Professional tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Full-Stack Developer crafting exceptional digital experiences with 
            <span className="text-primary font-semibold"> React, Next.js, and TypeScript</span>
          </p>

          {/* Skills preview */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-scale-in">
            {['React', 'TypeScript', 'Next.js', 'Node.js', 'MongoDB'].map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button 
              onClick={scrollToProjects}
              className="hero-button group"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              onClick={scrollToContact}
              className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground border-2"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            
            <Button 
              variant="ghost" 
              className="px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in">
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:scale-110 transition-all duration-300">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:scale-110 transition-all duration-300">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:scale-110 transition-all duration-300">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-purple-400/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-blue-400/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  )
}