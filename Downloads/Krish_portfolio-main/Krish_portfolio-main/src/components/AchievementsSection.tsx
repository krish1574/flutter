import { Trophy, Award, Landmark, Film } from 'lucide-react';

const achievements = [
  {
    title: 'IEEE SCET CS Education Chair',
    period: 'Jun 2024 – May 2025',
    desc: 'Led educational initiatives, workshops, and technical events for the Computer Society chapter at SCET, fostering student learning and engagement.',
    icon: Landmark,
    badge: 'Leadership',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Odoo Hackathon 2025',
    period: '12 Jul 2025',
    desc: 'Built ReWear — a sustainable fashion web app for point-based clothing exchange using React, Node.js, MongoDB, and CSS during the competitive 24h hackathon.',
    icon: Trophy,
    badge: 'Hackathon',
    color: 'from-yellow-500 to-amber-600'
  },
  {
    title: 'Creato Hackathon 2023 – Anand',
    period: '23 Mar 2023',
    desc: 'Developed a rating-driven property rental platform where tenant/landlord scores influence rent pricing; secured deals via a token-based system.',
    icon: Award,
    badge: 'Hackathon',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Digital Content Creation',
    period: 'Ongoing',
    desc: 'Creating travel edits using VN Editor with a focus on visual storytelling and trending content to grow Instagram engagement and digital presence.',
    icon: Film,
    badge: 'Creative',
    color: 'from-pink-500 to-rose-500'
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24">
      <div className="section-container">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-6 reveal">
          Achievements & <span className="gradient-text">Activities</span>
        </h2>
        <p className="text-foreground-secondary text-center max-w-lg mx-auto mb-16 reveal" data-delay="100">
          Competitive achievements, leadership roles, and creative extracurricular pursuits.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="glass p-6 rounded-2xl flex flex-col gap-4 snap-center hover:-translate-y-2 transition-all duration-300 relative group reveal"
                data-delay={String(i * 100)}
              >
                {/* Floating Badge */}
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full glass bg-primary/10 text-primary">
                  {item.badge}
                </span>

                {/* Card Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold shadow-md shadow-black/10`}>
                  <IconComponent size={22} />
                </div>

                <div className="mt-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg leading-snug text-foreground mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs text-foreground-secondary font-medium">{item.period}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed mt-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
