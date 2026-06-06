import { useTheme } from '@/hooks/useTheme';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Index() {
  const { isDark, toggleTheme, transitioning } = useTheme();
  useScrollReveal();

  return (
    <>
      {/* Theme transition overlay */}
      <div
        className={`theme-transition-overlay ${transitioning ? 'active' : ''}`}
        style={{ background: isDark ? 'hsl(226 60% 96%)' : 'hsl(220 40% 8%)' }}
      />

      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
