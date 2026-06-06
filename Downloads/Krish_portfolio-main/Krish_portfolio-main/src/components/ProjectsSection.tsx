import { useState } from 'react';
import { ExternalLink, Github, Trophy, AppWindow } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const projects = [
  {
    title: 'Cricket-Turf Booking',
    desc: 'A full-stack web platform for real-time cricket turf booking with dual user/admin dashboards, secure payment gateway, and automated email/SMS notifications.',
    img: project1,
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    category: 'main',
    period: 'Oct 2024 – Present',
    github: '#'
  },
  {
    title: 'Rent Right',
    desc: 'Developed a property rental platform with rating-driven dynamic rent pricing and an interactive map for property discovery.',
    img: project2,
    tags: ['C#', 'ASP.NET', 'SQL Server', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
    category: 'main',
    period: 'Oct 2022 – Mar 2023',
    github: '#'
  },
  {
    title: 'ReWear — Odoo Hackathon 2025',
    desc: 'Built a sustainable fashion web app for point-based clothing exchange using React, Node.js, MongoDB, and CSS. Developed during the 24-hour Odoo hackathon.',
    img: project3,
    tags: ['React', 'Node.js', 'MongoDB', 'CSS'],
    category: 'hackathon',
    period: '12 Jul 2025',
    github: '#',
    isHackathon: true
  },
  {
    title: 'Creato Hackathon 2023',
    desc: 'Developed a rating-driven rental platform where tenant/landlord scores influence rent pricing; secured deals via a token-based system.',
    gradient: 'from-secondary to-accent',
    tags: ['ASP.NET', 'SQL Server', 'JavaScript'],
    category: 'hackathon',
    period: '23 Mar 2023',
    github: '#',
    isHackathon: true
  }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'main' | 'hackathon'>('all');

  const filteredProjects = projects.filter(
    p => filter === 'all' || p.category === filter
  );

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-6 reveal">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-foreground-secondary text-center max-w-lg mx-auto mb-12 reveal" data-delay="100">
          A selection of full-stack web platforms and competitive hackathon projects I've built.
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12 reveal" data-delay="150">
          {(['all', 'main', 'hackathon'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide capitalize transition-all duration-300 ${
                filter === tab
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'glass text-foreground-secondary hover:text-foreground hover:bg-muted/50'
              }`}
            >
              {tab === 'all' ? 'All' : tab === 'main' ? 'Main Projects' : 'Hackathons'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-8">
          {filteredProjects.map((p, i) => (
            <div
              key={p.title}
              className="glass rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300 reveal"
              data-delay={String(i * 100)}
            >
              <div className="relative overflow-hidden h-52 sm:h-60 bg-muted/40">
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={768}
                    height={512}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                    {p.isHackathon ? (
                      <Trophy size={48} className="text-white drop-shadow-md" />
                    ) : (
                      <AppWindow size={48} className="text-white drop-shadow-md" />
                    )}
                  </div>
                )}
                {/* Floating category badge */}
                <span className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full glass bg-background/80 flex items-center gap-1.5 z-10 text-primary">
                  {p.isHackathon ? <Trophy size={10} /> : <AppWindow size={10} />}
                  {p.category === 'main' ? 'Main' : 'Hackathon'}
                </span>

                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:scale-110 transition-transform text-foreground" aria-label="GitHub repo">
                    <Github size={18} />
                  </a>
                  <a href="#" className="p-3 rounded-full glass hover:scale-110 transition-transform text-foreground" aria-label="View project">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="font-heading font-bold text-xl text-foreground">{p.title}</h3>
                  <span className="text-xs text-foreground-secondary whitespace-nowrap">{p.period}</span>
                </div>
                <p className="text-foreground-secondary text-sm sm:text-base leading-relaxed mb-6 flex-1">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full glass text-primary font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
