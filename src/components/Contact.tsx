import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

function encode(data: Record<string, FormDataEntryValue>) {
  return new URLSearchParams(data as any).toString();
}

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("form-name", "contact");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(Object.fromEntries(formData)),
      });
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
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

          {/* ✅ Contact Form (Netlify-enabled) */}
          <div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot for bots */}
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-input bg-background px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border border-input bg-background px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full border border-input bg-background px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>

              <Button type="submit" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>

              {status === "ok" && (
                <p className="text-green-600 mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 mt-2">
                  ❌ Something went wrong. Try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <p className="text-center text-muted-foreground mt-12">© 2025</p>
    </section>
  );
};

export default Contact;
