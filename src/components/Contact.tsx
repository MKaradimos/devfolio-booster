import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 📞 Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" />
                <a
                  href="mailto:karadimosmixalis@gmail.com"
                  className="hover:underline"
                >
                  karadimosmixalis@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-primary" />
                <a href="tel:+306940579923" className="hover:underline">
                  +30 6940579923
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin className="text-primary" />
                <a
                  href="https://www.linkedin.com/in/michail-karadimos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Github className="text-primary" />
                <a
                  href="https://github.com/MKaradimos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* ✉️ Netlify Contact Form */}
          <div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-4"
            >
              {/* Hidden input για να λειτουργεί η φόρμα στο Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-input bg-background px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-input bg-background px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full border border-input bg-background px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>

              <Button type="submit" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      <p className="text-center text-muted-foreground mt-12">© 2025</p>
    </section>
  );
};

export default Contact;
