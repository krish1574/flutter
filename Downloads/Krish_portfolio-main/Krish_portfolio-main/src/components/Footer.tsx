import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-foreground-secondary text-sm">
          © 2026 Krish Vaghela. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {[
            { Icon: Github, href: 'https://github.com/' },
            { Icon: Linkedin, href: 'https://linkedin.com/' },
            { Icon: Mail, href: 'mailto:krishvaghela616@gmail.com' }
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-foreground-secondary hover:text-primary transition-colors" aria-label="Social link">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
