import { FaMedal, FaCalendarAlt } from "react-icons/fa";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Django",
      period: "Dec 2024 - Jan 2025",
      organization: "Udemy",
      description: "Built scalable backend applications using Django and Python.",
      color: "#e6f7ff",
      borderColor: "#1890ff"
    },
    {
      title: "Frontend Web Development",
      period: "Oct 2024 - Jan 2025",
      organization: "Coursera (Meta)",
      description: "Learned HTML, CSS, JavaScript, React, Version Control, and UI/UX.",
      color: "#f6ffed",
      borderColor: "#52c41a"
    },
    {
      title: "Web Development",
      period: "Sep 2024 - Oct 2024",
      organization: "Internshala Trainings",
      description: "Mastered HTML, CSS, Bootstrap, DBMS, and AI integrations in web development.",
      color: "#fff7e6",
      borderColor: "#fa8c16"
    },
    {
      title: "Python",
      period: "Dec 2023 - Mar 2024",
      organization: "Udemy",
      description: "Gained expertise in Python, Flask, API integration, web scraping with Selenium & BeautifulSoup.",
      color: "#f9f0ff",
      borderColor: "#722ed1"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-10" style={{ backgroundColor: "#fafafa" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Trainings & Certifications</h2>
        
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border-l-4 transition-transform hover:transform hover:scale-102 hover:shadow-lg"
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
              
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;