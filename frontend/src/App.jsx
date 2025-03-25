import './App.css'
import { useRef, useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa' // Import hamburger and close icons
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);
  const contentRef = useRef(null);
  
  // Track window width for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const scrollToSection = (sectionName) => {
    setActiveTab(sectionName);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
    
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

    // Function to calculate which section is most visible
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const scrollPosition = contentRef.current.scrollTop + 300;
      
      const sectionPositions = sectionRefs
        .filter(({ ref }) => ref.current)
        .map(({ ref, name }) => ({
          name,
          position: ref.current.offsetTop,
          height: ref.current.offsetHeight
        }));
      
      for (let i = 0; i < sectionPositions.length; i++) {
        const current = sectionPositions[i];
        const next = sectionPositions[i + 1];
        
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
      handleScroll();
    }
    
    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeTab]);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Mobile Header with Breadcrumb */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white z-50 flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <span className="font-bold text-lg">Pranay Dommati</span>
          <div className="ml-4 text-sm text-gray-400 flex items-center">
            <span className="mr-2">Portfolio</span>
            <span className="mx-1">/</span>
            <span className="text-white">{activeTab}</span>
          </div>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}
      
      {/* Sidebar - hidden on mobile unless menu is open */}
      <div className={`${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-transform duration-300 fixed md:sticky top-0 left-0 z-50 md:z-0 h-screen w-72 md:flex bg-gray-900`}>
        <Sidebar activeTab={activeTab} onTabClick={scrollToSection} />
      </div>
      
      {/* Main content - add top padding on mobile for the header */}
      <div ref={contentRef} className="flex-1 h-screen overflow-y-auto md:overflow-y-auto pt-14 md:pt-0">
        <section ref={homeRef} id="home" className="min-h-screen">
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
