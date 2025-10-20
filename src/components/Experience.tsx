import { Briefcase, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Synelixis S.A.",
      period: "09/2022 – Present",
      description:
        "Backend, DevOps, and Full-Stack roles with Django, React, Docker, and Kubernetes. Building scalable web platforms and API-driven systems.",
    },
    {
      role: "Full-Stack Web Developer",
      company: "MALERDOS",
      period: "In Progress",
      description:
        "Developing a modern responsive web app with React, TypeScript, Supabase, TailwindCSS, and Netlify.",
      link: "https://malerdos.netlify.app",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-primary slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium mt-1">
                      <Briefcase className="h-4 w-4" />
                      {exp.company}
                    </div>
                  </div>
                  <span className="text-muted-foreground font-medium">{exp.period}</span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary-hover transition-colors font-medium"
                  >
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
