const AboutSection = () => {
  return (
    <div className="min-h-screen py-20 px-10" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">About Me</h2>
        
        <p className="text-xl font-semibold mb-6 text-gray-700">👨‍💻 Full Stack Developer | AI Enthusiast</p>
        
        <p className="mb-8 text-gray-600 leading-relaxed">
          I am a Computer Science student with a strong foundation in programming and software development. 
          Through hands-on projects, I have built responsive web applications and solved complex algorithmic 
          challenges. Passionate about emerging technologies like Python, AI, and scalable web development, 
          I am committed to continuous learning and creating innovative solutions for impactful projects.
        </p>
        
        {/* <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">🎓 Education</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-700">📌 Bachelor of Engineering (B.E), Computer Science & Engineering (2023 - 2027)</p>
              <p className="text-gray-600">Chaitanya Bharathi Institute of Technology (Autonomous)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">📌 Senior Secondary (XII), Telangana State Board of Intermediate Education (2023)</p>
              <p className="text-gray-600">Narayana Junior College, Hyderabad, Ghatkesar</p>
              <p className="text-gray-600">✅ Percentage: 97.90%</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">📌 Secondary (X), Telangana State Board (2021)</p>
              <p className="text-gray-600">Sri Chaitanya High School, Korutla</p>
              <p className="text-gray-600">✅ CGPA: 10/10</p>
            </div>
          </div>
        </div> */}
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">💡 Skills & Expertise</h3>
          <ul className="space-y-2 text-gray-600">
            <li>✔ Programming Languages: Python, C, JavaScript</li>
            <li>✔ Frontend Development: HTML, CSS, ReactJS, Tailwind CSS</li>
            <li>✔ Backend Development: Django, Flask, REST APIs</li>
            <li>✔ Database Management: SQL, DBMS</li>
            <li>✔ Version Control: Git, GitHub</li>
            <li>✔ Web Scraping & Automation: Selenium, BeautifulSoup</li>
            <li>✔ Data Science & AI: Pandas, NumPy, Data Analysis</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">🚀 What Drives Me?</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Building modern, responsive, and interactive web applications</li>
            <li>Exploring AI applications in web development</li>
            <li>Learning and adapting to new technologies</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">📩 Let's Connect!</h3>
          <p className="text-gray-600">
            If you're looking for a developer who's passionate about innovation and problem-solving, 
            feel free to reach out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;