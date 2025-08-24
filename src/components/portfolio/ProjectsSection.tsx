import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import amazonClone from "@/assets/amazon-clone.jpg"
import netflixClone from "@/assets/netflix-clone.jpg"
import appleClone from "@/assets/apple-clone.jpg"
import saasProject from "@/assets/saas-project.jpg"

const projects = [
  {
    id: 1,
    title: "Amazon Clone",
    description: "Full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Built with modern web technologies.",
    image: amazonClone,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: 2,
    title: "Netflix Clone",
    description: "Streaming platform replica with user profiles, movie recommendations, video player, and responsive design. Integrated with TMDB API.",
    image: netflixClone,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: 3,
    title: "Apple Website Clone",
    description: "Pixel-perfect recreation of Apple's website with smooth animations, product showcases, and responsive design focusing on user experience.",
    image: appleClone,
    technologies: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  },
  {
    id: 4,
    title: "SaaS Analytics Dashboard",
    description: "Modern analytics dashboard with real-time data visualization, user management, and comprehensive reporting features for business insights.",
    image: saasProject,
    technologies: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications built with modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card animate-slide-up ${project.featured ? 'md:col-span-1' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Actions - Show on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" className="p-2 h-auto">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2 h-auto">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 animate-fade-in">
          <Button variant="outline" className="px-8 py-3 rounded-xl font-semibold">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}