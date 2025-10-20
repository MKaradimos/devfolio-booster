import { useState } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6 slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:karadimosmixalis@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-primary-light rounded-lg group-hover:bg-primary transition-colors">
                  <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <span>karadimosmixalis@gmail.com</span>
              </a>
              <a
                href="tel:+306940579923"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-primary-light rounded-lg group-hover:bg-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <span>+30 6940579923</span>
              </a>
              <a
                href="https://www.linkedin.com/in/michail-karadimos-873538199"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-primary-light rounded-lg group-hover:bg-primary transition-colors">
                  <Linkedin className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <div className="slide-up" style={{ animationDelay: "0.1s" }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
