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
  const contentRef = useRef(null);
  
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

  // Handle scroll events to determine which section is in view
  useEffect(() => {
    const sectionRefs = [
      { ref: homeRef, name: 'Home' },
      { ref: aboutRef, name: 'About' },
      { ref: resumeRef, name: 'Resume' },
      { ref: portfolioRef, name: 'Portfolio' },
      { ref: skillsRef, name: 'Skills' },
      { ref: certificationsRef, name: 'Certifications' },
      { ref: contactRef, name: 'Contact' }
    ];

    // Function to calculate which section is most visible in the viewport
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const scrollPosition = contentRef.current.scrollTop + 300; // Adding offset to improve detection
      
      // Find all sections and their positions
      const sectionPositions = sectionRefs
        .filter(({ ref }) => ref.current)
        .map(({ ref, name }) => ({
          name,
          position: ref.current.offsetTop,
          height: ref.current.offsetHeight
        }));
      
      // Determine which section is currently most visible
      for (let i = 0; i < sectionPositions.length; i++) {
        const current = sectionPositions[i];
        const next = sectionPositions[i + 1];
        
        // If this is the last section or we're between this section and the next
        if (
          i === sectionPositions.length - 1 || 
          (scrollPosition >= current.position && scrollPosition < next.position)
        ) {
          if (activeTab !== current.name) {
            setActiveTab(current.name);
          }
          break;
        }
      }
    };
    
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
    }
    
    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeTab]); // Depend on activeTab to prevent unnecessary re-calculations

  return (
    <div className="flex">
      <Sidebar activeTab={activeTab} onTabClick={scrollToSection} />
      <div ref={contentRef} className="flex-1 h-screen overflow-y-auto">
        <section ref={homeRef} id="home" className="min-h-screen">
          <HeroSection />
        </section>
        <section ref={aboutRef} id="about" className="min-h-screen">
          <AboutSection />
        </section>
        <section ref={resumeRef} id="resume" className="min-h-screen">
          <ResumeSection />
        </section>
        <section ref={portfolioRef} id="portfolio" className="min-h-screen">
          <PortfolioSection />
        </section>
        <section ref={skillsRef} id="skills" className="min-h-screen">
          <SkillsSection />
        </section>
        <section ref={certificationsRef} id="certifications" className="min-h-screen">
          <CertificationsSection />
        </section>
        <section ref={contactRef} id="contact" className="min-h-screen">
          <ContactSection />
        </section>
      </div>
    </div>
  )
}

export default App;
