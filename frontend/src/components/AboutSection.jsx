const AboutSection = () => {
  return (
    <div className="py-20 px-10" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">About Me</h2>
        
        <p className="text-xl font-semibold mb-6 text-gray-700">👨‍💻 Full Stack Developer | AI Enthusiast</p>
        
        <p className="mb-8 text-gray-600 leading-relaxed">
          I am a Computer Science student with a strong foundation in programming and software development. 
          Through hands-on projects, I have built responsive web applications and solved complex algorithmic 
          challenges. Passionate about emerging technologies like Python, AI, and scalable web development, 
          I am committed to continuous learning and creating innovative solutions for impactful projects.
        </p>
      
        
        {/* What Drives Me section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">🚀 What Drives Me?</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✦</span>
              Building modern, responsive, and interactive web applications
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✦</span>
              Exploring AI applications in web development
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✦</span>
              Learning and adapting to new technologies
            </li>
          </ul>
        </div>
        
        {/* Let's Connect section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">📩 Let's Connect!</h3>
          <p className="text-gray-600">
            If you're looking for a developer who's passionate about innovation and problem-solving, 
            <a 
              href="#contact" 
              className="text-blue-600 hover:text-blue-800 transition-colors mx-1 font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              feel free to reach out!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;