import { 
  Code2,
  Database, 
  Globe, 
  Smartphone,
  GitBranch,
  Server,
  Palette,
  Zap
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "JavaScript ES6+", level: 95 }
    ]
  },
  {
    title: "Backend Development", 
    icon: Server,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "Authentication", level: 85 }
    ]
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "Firebase", level: 85 },
      { name: "Supabase", level: 80 }
    ]
  },
  {
    title: "Tools & DevOps",
    icon: GitBranch,
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Vercel", level: 90 },
      { name: "CI/CD", level: 72 }
    ]
  }
]

const technologies = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express.js",
  "MongoDB", "MySQL", "PostgreSQL", "Tailwind CSS", "SASS", "Git",
  "Docker", "AWS", "Firebase", "Supabase", "Stripe", "REST APIs",
  "GraphQL", "Jest", "Cypress", "Figma", "Photoshop"
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="glass-card p-6 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-hero-gradient transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags Cloud */}
        <div className="text-center animate-fade-in">
          <h3 className="text-xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <span 
                key={tech} 
                className="skill-badge animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Code2 className="h-4 w-4" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}