const About = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
          <p className="slide-up">
            I'm a results-driven Software Engineer specializing in Python, Django, React, and modern DevOps practices.
          </p>
          <p className="slide-up" style={{ animationDelay: "0.1s" }}>
            I design and build scalable web platforms, API-driven systems, and production-ready frontends integrated with Docker and Kubernetes.
          </p>
          <p className="slide-up" style={{ animationDelay: "0.2s" }}>
            My work bridges frontend and backend architecture, emphasizing automation, observability, and performance.
          </p>
          <p className="slide-up" style={{ animationDelay: "0.3s" }}>
            I focus on building reliable, maintainable software solutions — from smart agriculture and energy systems to enterprise and public-sector platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
