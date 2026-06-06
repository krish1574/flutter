import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Atlaas Integrated Systems LLP',
    location: 'Pune',
    period: 'May 2026 – Present',
    bullets: [
      'Develop and maintain enterprise-grade desktop applications using WPF, C#, and .NET Core, ensuring high performance and reliability.',
      'Architect scalable, reusable, and maintainable software modules following MVVM design patterns and SOLID principles.',
      'Implement custom controls, reusable UI components, role-based access control, and application-wide theming frameworks.',
      'Conduct debugging, code reviews, performance profiling, and feature enhancements to optimize application efficiency.'
    ],
    projects: [
      {
        name: 'Vision Guard Analysis System',
        desc: 'Built a WPF/.NET Core desktop application with advanced UI/UX, data visualization dashboards, event management, reporting modules, and role-based user rights management.'
      },
      {
        name: 'PPE Kit Detection Software',
        desc: 'Developed and maintained a PPE compliance monitoring desktop application, implementing approval workflows, event tracking, reusable UI toolkit, and application-wide styling framework.'
      }
    ]
  },
  {
    role: 'Software Developer Intern',
    company: 'Spectrum Solutions & Technologies.',
    location: 'Surat',
    period: 'Jan 2026 – Apr 2026',
    bullets: [
      'Designed and developed RESTful APIs and desktop application modules; performed API testing, debugging, and IIS deployment.'
    ],
    projects: [
      {
        name: 'Garden Watering System API',
        desc: 'Built and deployed REST APIs for automated garden monitoring; implemented backend logic, integration workflows, and performance testing.'
      },
      {
        name: 'Vehicle Entry Management System',
        desc: 'Developed a WPF/C# desktop application with vehicle registration, entry/exit tracking, user management, and responsive UI screens.'
      }
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-muted/20">
      <div className="section-container">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-16 reveal">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto relative border-l border-border pl-6 ml-4 sm:ml-6 md:pl-8">
          {experiences.map((exp, i) => (
            <div key={exp.company + exp.period} className="relative mb-16 last:mb-0 reveal" data-delay={String(i * 150)}>
              {/* Timeline dot */}
              <div className="absolute -left-[35px] md:-left-[45px] top-1.5 w-6 h-6 rounded-full bg-primary border-4 border-background flex items-center justify-center shadow-lg shadow-primary/30">
                <Briefcase size={10} className="text-primary-foreground" />
              </div>

              {/* Header card */}
              <div className="glass p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-300">
                {/* Glow accent */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                      {exp.role}
                    </h3>
                    <div className="text-primary font-semibold text-sm sm:text-base mt-1">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5 text-xs sm:text-sm text-foreground-secondary">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-primary" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="list-disc pl-5 space-y-2 text-foreground-secondary text-sm sm:text-base mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>

                {/* Sub-projects list */}
                {exp.projects && exp.projects.length > 0 && (
                  <div>
                    <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-primary mb-3">
                      Key Projects Developed
                    </h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {exp.projects.map((proj) => (
                        <div key={proj.name} className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:bg-muted/50 transition-colors">
                          <h5 className="font-heading font-bold text-sm text-foreground mb-1">
                            {proj.name}
                          </h5>
                          <p className="text-xs text-foreground-secondary leading-relaxed">
                            {proj.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
