const ResumeSection = () => {
  return (
    <div className="min-h-screen py-20 px-10" style={{ backgroundColor: "#F4FAFD" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">📜 Resume</h2>
        
        <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">🎓 Education</h3>
          
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-gray-800 text-xl">Bachelor of Engineering (B.E), Computer Science & Engineering (2023 - 2027)</p>
              <p className="mt-1 text-gray-600">Chaitanya Bharathi Institute of Technology (Autonomous)</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-800 text-lg">Senior Secondary (XII), Telangana State Board of Intermediate Education (2023)</p>
              <p className="mt-1 text-gray-600">Narayana Junior College, Hyderabad, Ghatkesar</p>
              <p className="mt-1 text-gray-600 flex items-center">
                <span>Percentage: 97.90%</span>
              </p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-800 text-lg">Secondary (X), Telangana State Board (2021)</p>
              <p className="mt-1 text-gray-600">Sri Chaitanya High School, Korutla</p>
              <p className="mt-1 text-gray-600 flex items-center">
                <span>CGPA: 10/10</span>
              </p>
            </div>
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
            <li>✔ <span className="font-medium">Programming Languages:</span> Python, C, JavaScript</li>
            <li>✔ <span className="font-medium">Frontend:</span> HTML, CSS, ReactJS, Tailwind CSS, Bootstrap</li>
            <li>✔ <span className="font-medium">Backend:</span> Django, Flask, REST APIs</li>
            <li>✔ <span className="font-medium">Database Management:</span> SQL, DBMS</li>
            <li>✔ <span className="font-medium">Version Control:</span> Git, GitHub</li>
            <li>✔ <span className="font-medium">Web Scraping & Automation:</span> Selenium, BeautifulSoup</li>
            <li>✔ <span className="font-medium">Data Science & AI:</span> Pandas, NumPy, Matplotlib, Seaborn, scikit-learn, Data Analysis</li>
          </ul>
        </div>
        
        <div className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">🏆 Certifications & Achievements</h3>
          <ul className="space-y-3 text-gray-600 list-disc pl-5">
            <li><span className="font-medium">Meta Front-End Developer Certificate</span> — Focused on React.js, JavaScript, HTML, CSS, Version Control, and UI/UX</li>
            <li><span className="font-medium">Salesforce AI Associate</span> — Focused on Artificial Intelligence applications in Salesforce</li>
            <li><span className="font-medium">Django</span> — Built scalable backend applications using Django and Python</li>
            <li><span className="font-medium">Frontend Web Development</span> — Learned HTML, CSS, JavaScript, React, Version Control, and UI/UX</li>
            <li><span className="font-medium">Web Development</span> — Mastered HTML, CSS, Bootstrap, DBMS, and AI integrations</li>
            <li><span className="font-medium">Python</span> — Gained expertise in Python, Flask, API integration, web scraping</li>
          </ul>
        </div>
        
        <div className="flex justify-center">
          <a
            href="https://drive.google.com/file/d/195b6cnedwAzDOzkjFwWkCste8fvD6K8V/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition duration-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;