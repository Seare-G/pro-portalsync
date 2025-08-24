import { Calendar, Code, GraduationCap, Briefcase } from "lucide-react"

const timelineData = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "Freelance Projects",
    period: "2023 - Present",
    type: "work",
    icon: Briefcase,
    description: "Building custom web applications for clients, specializing in React, Next.js, and Node.js solutions. Delivered 15+ projects with focus on performance and user experience.",
    achievements: [
      "Increased client website performance by 40% on average",
      "Built e-commerce solutions processing $100K+ in transactions",
      "Maintained 98% client satisfaction rate"
    ]
  },
  {
    id: 2,
    title: "Personal Project Development",
    company: "Self-Directed Learning",
    period: "2022 - 2023",
    type: "project",
    icon: Code,
    description: "Intensive period of skill development through building complex personal projects including clones of major platforms and original SaaS applications.",
    achievements: [
      "Completed 25+ personal projects",
      "Mastered modern React ecosystem",
      "Learned backend development with Node.js"
    ]
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    company: "Self-Taught Journey",
    period: "2021 - 2022",
    type: "education",
    icon: GraduationCap,
    description: "Comprehensive self-study program covering HTML, CSS, JavaScript, React, and full-stack development. Supplemented with online courses and coding challenges.",
    achievements: [
      "Completed 500+ coding challenges",
      "Built first functional web applications",
      "Learned fundamentals of computer science"
    ]
  },
  {
    id: 4,
    title: "Career Transition",
    company: "From Finance to Tech",
    period: "2021",
    type: "milestone",
    icon: Calendar,
    description: "Made the decision to transition from a finance career to pursue web development, driven by passion for problem-solving and creating digital solutions.",
    achievements: [
      "Committed to full-time learning",
      "Set up development environment",
      "Joined developer communities"
    ]
  }
]

const typeStyles = {
  work: "bg-primary/10 text-primary border-primary/20",
  project: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  education: "bg-green-500/10 text-green-500 border-green-500/20",
  milestone: "bg-purple-500/10 text-purple-500 border-purple-500/20"
}

export default function TimelineSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From career transition to becoming a full-stack developer - here's my professional timeline and key milestones.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div 
                key={item.id}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-4 border-background ${
                    typeStyles[item.type as keyof typeof typeStyles].includes('primary') ? 'bg-primary' :
                    typeStyles[item.type as keyof typeof typeStyles].includes('blue') ? 'bg-blue-500' :
                    typeStyles[item.type as keyof typeof typeStyles].includes('green') ? 'bg-green-500' :
                    'bg-purple-500'
                  }`} />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg border ${typeStyles[item.type as keyof typeof typeStyles]}`}>
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {item.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-500">Currently Available</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Ready for New Opportunities</h3>
            <p className="text-muted-foreground">
              I'm actively seeking new freelance projects and collaboration opportunities. 
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}