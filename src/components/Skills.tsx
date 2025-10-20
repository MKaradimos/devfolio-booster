import { Code, Server, Cloud, Monitor, Database, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Monitor,
      skills: ["React 18", "TypeScript", "Vite", "TailwindCSS", "shadcn/ui"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Django", "REST APIs", "Python", "PostgreSQL", "js-yaml"],
    },
    {
      title: "DevOps & Deployment",
      icon: Cloud,
      skills: ["Docker", "Docker Compose", "Kubernetes", "NGINX", "CI/CD", "GitHub Actions", "Netlify"],
    },
    {
      title: "Monitoring & Observability",
      icon: Database,
      skills: ["Prometheus", "Grafana", "Thanos", "Kepler"],
    },
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-light rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
