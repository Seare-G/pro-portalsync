import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface/50 border-t border-border/50">
      <div className="container-width section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-hero-gradient flex items-center justify-center">
                <span className="text-white font-bold text-sm">AJ</span>
              </div>
              <span className="font-semibold text-lg">Alex Johnson</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-stack developer passionate about creating exceptional digital experiences. 
              Specializing in React, Next.js, and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" },
                { name: "Resume", href: "#" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold">Let's Connect</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">alex.johnson@email.com</p>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">San Francisco, CA</p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="h-9 w-9 hover:scale-110 transition-all duration-300">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 hover:scale-110 transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 hover:scale-110 transition-all duration-300">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} Alex Johnson. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>using React & TypeScript</span>
          </div>
          
          {/* Back to Top */}
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 hover:scale-105 transition-all duration-300"
          >
            Back to Top
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}