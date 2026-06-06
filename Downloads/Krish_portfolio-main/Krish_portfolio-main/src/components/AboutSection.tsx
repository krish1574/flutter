import { Download } from 'lucide-react';
import avatarImg from '@/assets/developer-avatar.png';

const stats = [
  { value: '9.88', label: 'Diploma CGPA' },
  { value: '9.08', label: 'B.E. CGPA' },
  { value: '6+', label: 'Key Projects' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="section-container flex flex-col lg:flex-row items-center gap-16">
        {/* Left - photo */}
        <div className="flex-shrink-0 reveal">
          <div className="glass p-3 rounded-2xl w-72 h-80 sm:w-80 sm:h-96">
            <img src={avatarImg} alt="About Krish Vaghela" className="w-full h-full object-cover rounded-xl" loading="lazy" width={512} height={512} />
          </div>
        </div>

        {/* Right - text */}
        <div className="flex-1">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6 reveal">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-foreground-secondary mb-4 reveal" data-delay="100">
            I'm a results-driven Software Developer specializing in WPF, C#, and .NET Core desktop application development.
            With hands-on experience in MVVM architecture, REST API design, and database systems, I focus on building robust, high-performance, and scalable enterprise solutions.
          </p>
          <p className="text-foreground-secondary mb-8 reveal" data-delay="200">
            I completed my B.E. in Computer Science from SCET, Surat (CGPA: 9.08) and my Diploma in Computer Science from Tapi Diploma Engineering College (CGPA: 9.88).
            I am highly passionate about performance optimization, clean code, and solving complex system architectural challenges.
            Outside of coding, I participate in professional organizations like the IEEE and express my creativity through digital content creation and visual storytelling.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((s, i) => (
              <div key={s.label} className="glass p-4 text-center rounded-xl reveal" data-delay={String(100 + i * 100)}>
                <div className="text-2xl font-heading font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-foreground-secondary mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="reveal" data-delay="500">
            <a 
              href="/Krish_Vaghela_Resume_Updated.pdf" 
              download="Krish_Vaghela_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-btn font-semibold text-sm"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
