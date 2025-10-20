import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = {
    degree: "BSc & MSc",
    field: "Information and Communication Systems Engineering",
    institution: "University of the Aegean",
    period: "2014 – 2020",
    thesis: "Bitcoin and GDPR – Challenges and Solutions",
  };

  const certifications = [
    "Learn DevOps: The Complete Kubernetes Course",
    "Learn DevOps: Advanced Kubernetes Usage",
    "Build a Backend REST API with Python & Django",
    "Django with React | An E-commerce Website",
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Education & Certifications
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="slide-up">
            <div className="bg-card border border-border rounded-lg p-6 h-full hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-light rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-foreground">{education.degree}</p>
                <p className="text-lg text-primary">{education.field}</p>
                <p className="text-muted-foreground">{education.institution}</p>
                <p className="text-muted-foreground font-medium">{education.period}</p>
                <div className="pt-3 mt-3 border-t border-border">
                  <p className="text-sm text-muted-foreground font-medium">Master's Thesis:</p>
                  <p className="text-foreground">{education.thesis}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-card border border-border rounded-lg p-6 h-full hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-light rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
                <li className="text-sm text-muted-foreground italic pt-2 border-t border-border">
                  All certifications from Udemy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
