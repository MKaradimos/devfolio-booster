import { Download, Mail, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* --- Left Content --- */}
          <div className="flex-1 space-y-6 fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Michail Karadimos
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold">
              Software Engineer (Python / React)
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Building reliable, scalable, and modern web solutions.
            </p>

            {/* --- Buttons --- */}
            <div className="flex flex-wrap gap-4 pt-4">
              
              {/* Download CV */}
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="/Michail Karadimos - Software Engineer.pdf"
                  download="Michail Karadimos - Software Engineer.pdf"
                >
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </Button>

              {/* View CV */}
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <a
                  href="/Michail Karadimos - Software Engineer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye className="h-5 w-5" />
                  View CV
                </a>
              </Button>

              {/* Contact Me */}
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={scrollToContact}
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* --- Right Profile Image --- */}
          <div className="flex-1 flex justify-center slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img
                src={profilePhoto}
                alt="Michail Karadimos"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-primary shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
