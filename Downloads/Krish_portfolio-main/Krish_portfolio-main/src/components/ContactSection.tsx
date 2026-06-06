import { Mail, Phone, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="section-container max-w-2xl">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4 reveal">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-foreground-secondary text-center mb-12 reveal" data-delay="100">
          Have a project in mind? Let's work together to build something amazing.
        </p>

        <form className="glass p-8 rounded-2xl space-y-5 reveal" data-delay="200" onSubmit={e => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />
          <textarea
            rows={5}
            placeholder="Your message..."
            className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
          />
          <button type="submit" className="w-full py-3 rounded-xl gradient-btn font-semibold text-sm flex items-center justify-center gap-2">
            <Send size={16} /> Send Message
          </button>
        </form>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-foreground-secondary text-sm reveal" data-delay="300">
          <a href="mailto:krishvaghela616@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={16} />
            <span>krishvaghela616@gmail.com</span>
          </a>
          <a href="tel:+918511849005" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={16} />
            <span>+91-8511849005</span>
          </a>
        </div>
      </div>
    </section>
  );
}
