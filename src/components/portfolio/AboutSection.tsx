import { Code, Database, Globe, Smartphone } from "lucide-react"

export default function AboutSection() {
  const skills = [
    { name: "Frontend", icon: Globe, description: "React, Next.js, TypeScript, Tailwind CSS" },
    { name: "Backend", icon: Database, description: "Node.js, Express.js, REST APIs" },
    { name: "Database", icon: Database, description: "MongoDB, MySQL, PostgreSQL" },
    { name: "Mobile", icon: Smartphone, description: "React Native, Progressive Web Apps" },
  ]

  return (
    <section id="about" className="section-padding bg-surface/50">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm a <strong className="text-foreground">self-taught full-stack developer</strong> with a passion for creating 
                exceptional digital experiences. My journey in tech started with curiosity and has evolved into 
                expertise across modern web technologies.
              </p>
              
              <p>
                Specializing in <strong className="text-primary">JavaScript ecosystem</strong>, I build scalable 
                applications using React, Next.js, and TypeScript on the frontend, backed by robust Node.js 
                and database solutions.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, and sharing knowledge with the developer community.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="glass-card p-6 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}