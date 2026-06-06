import { Github, Linkedin, Mail } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import avatarImg from '@/assets/developer-avatar.png';

const techIcons = ['🎯', '⚡', '🖥️', '🗄️', '🟨', '⚛️'];

export default function HeroSection() {
  const typedText = useTypewriter();

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="section-container flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        {/* Left */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-primary font-medium mb-2 reveal" data-delay="0">Hello, I'm</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 reveal" data-delay="100">
            Krish Vaghela
          </h1>
          <div className="text-xl sm:text-2xl mb-6 reveal" data-delay="200">
            <span className="gradient-text font-semibold">{typedText}</span>
            <span className="typewriter-cursor" />
          </div>
          <p className="text-foreground-secondary max-w-lg mx-auto lg:mx-0 mb-8 reveal" data-delay="300">
            Results-driven Software Developer specializing in WPF, C#, and .NET Core desktop application development.
            Passionate about MVVM architecture, REST API development, scalable software design, and delivering reliable enterprise solutions.
          </p>

          <div className="flex items-center gap-4 justify-center lg:justify-start mb-8 reveal" data-delay="400">
            {[
              { Icon: Github, href: 'https://github.com/' },
              { Icon: Linkedin, href: 'https://linkedin.com/' },
              { Icon: Mail, href: 'mailto:krishvaghela616@gmail.com' }
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:scale-110 transition-transform text-foreground-secondary hover:text-primary">
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="reveal" data-delay="500">
            <a href="#contact" className="inline-block px-8 py-3 rounded-full gradient-btn font-semibold text-sm tracking-wide">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right - Avatar with floating icons */}
        <div className="flex-1 flex justify-center relative reveal" data-delay="300">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="w-full h-full rounded-full glass p-2 overflow-hidden">
              <img src={avatarImg} alt="Krish Vaghela - Developer portrait" className="w-full h-full object-cover rounded-full" width={512} height={512} />
            </div>
            {techIcons.map((icon, i) => (
              <div
                key={i}
                className="absolute text-2xl float-icon glass w-12 h-12 flex items-center justify-center rounded-xl"
                style={{
                  top: `${15 + Math.sin(i * 1.05) * 35}%`,
                  left: `${i % 2 === 0 ? -8 : 88}%`,
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
