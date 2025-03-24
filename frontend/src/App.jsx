import './App.css'
import { useRef, useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import Sidebar from './components/Sidebar'
import AboutSection from './components/AboutSection'
import ResumeSection from './components/ResumeSection'
import PortfolioSection from './components/PortfolioSection'
import SkillsSection from './components/SkillsSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);
  
  const scrollToSection = (sectionName) => {
    setActiveTab(sectionName);
    
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

  // Set up intersection observers for each section
  useEffect(() => {
    const sectionRefs = [
      { ref: homeRef, id: 'Home' },
      { ref: aboutRef, id: 'About' },
      { ref: resumeRef, id: 'Resume' },
      { ref: portfolioRef, id: 'Portfolio' },
      { ref: skillsRef, id: 'Skills' },
      { ref: certificationsRef, id: 'Certifications' },
      { ref: contactRef, id: 'Contact' }
    ];

    // Update the observer options with a lower threshold
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.2, // Changed from 0.6 to 0.2 - triggers when 20% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Find which section this is and update the active tab
          const sectionId = entry.target.id;
          const sectionName = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
          setActiveTab(sectionName);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sectionRefs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="flex">
      <Sidebar activeTab={activeTab} onTabClick={scrollToSection} />
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
