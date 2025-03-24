import './App.css'
import { useRef } from 'react'
import HeroSection from './components/HeroSection'
import Sidebar from './components/Sidebar'
import AboutSection from './components/AboutSection'
import ResumeSection from './components/ResumeSection'
import PortfolioSection from './components/PortfolioSection'
import SkillsSection from './components/SkillsSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);
  
  const scrollToSection = (sectionName) => {
    if (sectionName === 'Home' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === 'About' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === 'Resume' && resumeRef.current) {
      resumeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === 'Portfolio' && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === 'Skills' && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === 'Certifications' && certificationsRef.current) {
      certificationsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === 'Contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex">
      <Sidebar onTabClick={scrollToSection} />
      <div className="flex-1 h-screen overflow-y-auto">
        <section ref={homeRef} id="home">
          <HeroSection />
        </section>
        <section ref={aboutRef} id="about">
          <AboutSection />
        </section>
        <section ref={resumeRef} id="resume">
          <ResumeSection />
        </section>
        <section ref={portfolioRef} id="portfolio">
          <PortfolioSection />
        </section>
        <section ref={skillsRef} id="skills">
          <SkillsSection />
        </section>
        <section ref={certificationsRef} id="certifications">
          <CertificationsSection />
        </section>
        <section ref={contactRef} id="contact">
          <ContactSection />
        </section>
      </div>
    </div>
  )
}

export default App;
