import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        <div className="relative border-l border-primary/20 ml-4 space-y-8">
          {/* Synelixis S.A. */}
          <div className="relative pl-8">
            <div className="absolute -left-[6px] top-2 w-3 h-3 bg-primary rounded-full"></div>
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Software Engineer
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Synelixis S.A. | 09/2022 – Present
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>
                  <strong>Backend Developer (First 4–6 Months):</strong> Developed and maintained backend services in Django, integrating ML models and containerized applications using Docker and Kubernetes.
                </li>
                <li>
                  <strong>DevOps / Cloud Monitoring Engineer (European Project):</strong> Worked with Prometheus, Grafana, Thanos, and Kepler for observability and energy-efficient monitoring across Kubernetes clusters.
                </li>
                <li>
                  <strong>Full-Stack Developer — “M16” Project:</strong> Contributed to an EU-funded agricultural information system using Django, PostgreSQL, and React; deployed using Docker.
                </li>
                <li>
                  <strong>Full-Stack / DevOps Engineer — SynField Dashboard:</strong> Built an IoT data dashboard integrating drone telemetry, implemented CI/CD with Docker & Kubernetes.
                </li>
                <li>
                  <strong>Selected Project — Kubernetes Network Policy Dashboard (2025):</strong> Developed a React 18 + TypeScript frontend integrated with Django REST, Dockerized with runtime env injection and YAML generation.
                </li>
              </ul>
            </div>
          </div>

          {/* MALERDOS */}
          <div className="relative pl-8">
            <div className="absolute -left-[6px] top-2 w-3 h-3 bg-primary rounded-full"></div>
            <div className="p-6 rounded-lg border bg-card shadow-sm">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Full-Stack Web Developer
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                MALERDOS | In Progress
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>
                  Developing a modern, fully responsive web application for MALERDOS, a Greek company specializing in agricultural machinery, recycling systems, and environmental technologies.
                </li>
                <li>
                  The platform showcases the company’s product catalog, municipal and environmental projects, and includes a contact form for client inquiries.
                </li>
                <li>
                  Built with React + TypeScript and Vite, using Supabase for backend and database integration, and Tailwind CSS for a clean, modern UI.
                </li>
                <li>
                  Implements multi-language support (EN/EL) and automated CI/CD deployment via Netlify for seamless updates.
                </li>
                <li>
                  <strong>Live Demo:</strong>{" "}
                  <a
                    href="https://malerdos.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    malerdos.netlify.app
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
