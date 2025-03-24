import { FaMedal, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Meta Front-End Developer Certificate",
      period: "Issued Jan 2025",
      organization: "Coursera, Authorized by Meta, Verified by Credly",
      description: "Focused on React.js, JavaScript, HTML, CSS, Version Control, and UI/UX. Includes completion of a capstone project. Recognized at EQF levels 5 to 6 with 8 ECTS credits.",
      color: "#fff7e6",
      borderColor: "#fa8c16",
      credentialLink: "https://www.credly.com/badges/88856614-bf6d-42d0-aad3-8552baa781dd"
    },
    {
      title: "Salesforce AI Associate",
      period: "Issued Mar 2025",
      organization: "Salesforce",
      description: "Focused on Artificial Intelligence (AI) applications in Salesforce.",
      color: "#EFF6FF",
      borderColor: "#00A1E0",
      credentialLink: "https://drive.google.com/file/d/1ZifdUT_VL7KlaV3mWSS7CfSIWyZYm3tD/view?usp=sharing"
    },
    {
      title: "Django",
      period: "Dec 2024 - Jan 2025",
      organization: "Udemy",
      description: "Built scalable backend applications using Django and Python.",
      color: "#f9f0ff",
      borderColor: "#722ed1",
      credentialLink: "https://www.udemy.com/certificate/UC-e7b505dc-46eb-4288-86e8-a555f9ff1d55/"
    },
    {
      title: "Frontend Web Development",
      period: "Oct 2024 - Jan 2025",
      organization: "Coursera (Meta)",
      description: "Learned HTML, CSS, JavaScript, React, Version Control, and UI/UX.",
      color: "#f6ffed",
      borderColor: "#52c41a",
      credentialLink: "https://www.coursera.org/account/accomplishments/specialization/3G0CI43NW5BG"
    },
    {
      title: "Web Development",
      period: "Sep 2024 - Oct 2024",
      organization: "Internshala Trainings",
      description: "Mastered HTML, CSS, Bootstrap, DBMS, and AI integrations in web development.",
      color: "#fff7e6",
      borderColor: "#fa8c16",
      credentialLink: "https://trainings.internshala.com/view_certificate/gaulzq0bozt/ii2fga73404/"
    },
    {
      title: "Python",
      period: "Dec 2023 - Mar 2024",
      organization: "Udemy",
      description: "Gained expertise in Python, Flask, API integration, web scraping with Selenium & BeautifulSoup.",
      color: "#f9f0ff",
      borderColor: "#722ed1",
      credentialLink: "https://www.udemy.com/certificate/UC-3404d6c3-089c-41e6-bc3c-e267f75b2804/"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-10" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Trainings & Certifications</h2>
        
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border-l-4 transition-transform hover:shadow-lg"
              style={{ borderLeftColor: cert.borderColor, backgroundColor: cert.color }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{cert.title}</h3>
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2" />
                  <span>{cert.period}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center">
                  <FaMedal className="text-yellow-500 mr-2" />
                  <span className="font-medium text-gray-700">{cert.organization}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{cert.description}</p>
              
              {/* View Credentials link positioned at bottom left */}
              {cert.credentialLink && (
                <div>
                  <a 
                    href={cert.credentialLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors flex items-center w-fit"
                    title="View Credential"
                  >
                    <FaExternalLinkAlt className="mr-1" size={12} />
                    <span>View Credential</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;