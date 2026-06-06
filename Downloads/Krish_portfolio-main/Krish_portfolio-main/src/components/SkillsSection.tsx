const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C#', icon: '🎯' },
      { name: 'Java', icon: '☕' },
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '🟨' }
    ]
  },
  {
    title: 'Frameworks & Core Tech',
    skills: [
      { name: '.NET Core', icon: '⚡' },
      { name: 'WPF', icon: '🖥️' },
      { name: 'ASP.NET', icon: '🌐' },
      { name: 'MVVM Architecture', icon: '🏗️' },
      { name: 'Entity Framework', icon: '📦' }
    ]
  },
  {
    title: 'Frontend & Databases',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'XAML / HTML / CSS', icon: '🎨' },
      { name: 'SQL Server', icon: '🗄️' },
      { name: 'MySQL', icon: '🐬' }
    ]
  },
  {
    title: 'Tools & Software Dev',
    skills: [
      { name: 'Visual Studio', icon: '🆔' },
      { name: 'Git & GitHub', icon: '🐙' },
      { name: 'Postman', icon: '🚀' },
      { name: 'IIS Deployment', icon: '🕸️' },
      { name: 'API Development', icon: '🔌' },
      { name: 'Performance Tuning', icon: '⏱️' }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-muted/10">
      <div className="section-container">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-16 reveal">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={cat.title}
              className="glass p-6 rounded-2xl flex flex-col gap-4 reveal"
              data-delay={String(catIdx * 100)}
            >
              <h3 className="font-heading font-semibold text-lg text-primary border-b border-border/50 pb-2">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((s, sIdx) => (
                  <div
                    key={s.name}
                    className="group p-3 rounded-xl bg-muted/30 border border-border/30 hover:border-primary/40 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-200 cursor-default flex flex-col items-center justify-center gap-1.5 text-center"
                    title={s.name}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">{s.icon}</span>
                    <span className="text-[10px] text-foreground-secondary font-medium tracking-tight leading-tight group-hover:text-foreground">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
