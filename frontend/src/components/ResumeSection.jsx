const ResumeSection = () => {
  return (
    <div className="min-h-screen py-20 px-10" style={{ backgroundColor: "#F4FAFD" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">📜 Resume</h2>
        
        <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">🎓 Education</h3>
          <div className="mb-4">
            <p className="font-semibold text-gray-800 text-xl">B.E. in Computer Science & Engineering – CBIT</p>
            <p className="mt-2 text-gray-600">
              Strong foundation in software development, system design, and emerging technologies
            </p>
          </div>
        </div>
        
        <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">💼 Work Experience</h3>
          <div className="mb-4">
            <p className="font-semibold text-gray-800 text-xl">Full Stack Developer | AI-Based Projects</p>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc pl-5">
              <li>Developed and deployed full-stack applications using React, Django, and REST APIs</li>
              <li>Integrated AI-powered solutions to automate processes and enhance user experience</li>
              <li>Implemented responsive UI with Tailwind CSS for seamless user interaction</li>
              <li>Managed version control and collaborative development with Git & GitHub</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">🛠 Technical Skills</h3>
          <ul className="space-y-3 text-gray-600">
            <li>✔ <span className="font-medium">Frontend:</span> React, Tailwind CSS, JavaScript, Vite</li>
            <li>✔ <span className="font-medium">Backend:</span> Django, Python, REST APIs</li>
            <li>✔ <span className="font-medium">AI Integration:</span> Implementing AI-based features for automation</li>
            <li>✔ <span className="font-medium">Version Control:</span> Git, GitHub</li>
            <li>✔ <span className="font-medium">Cloud & Deployment:</span> DigitalOcean, Vercel</li>
          </ul>
        </div>
        
        <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">🏆 Certifications & Achievements</h3>
          <ul className="space-y-3 text-gray-600 list-disc pl-5">
            <li>Certified in Python Development</li>
            <li>Open-source contributor to several AI and web development projects</li>
          </ul>
        </div>
        
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;