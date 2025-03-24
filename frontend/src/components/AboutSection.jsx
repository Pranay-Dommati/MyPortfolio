const AboutSection = () => {
  return (
    <div className="min-h-screen py-20 px-10" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">About Me</h2>
        
        <p className="text-xl font-semibold mb-6 text-gray-700">👨‍💻 Full Stack Developer | AI Enthusiast</p>
        
        <p className="mb-8 text-gray-600 leading-relaxed">
          I am a passionate Full Stack Developer with expertise in React, Django, and AI-based projects. 
          I enjoy crafting scalable web applications and integrating artificial intelligence to enhance 
          functionality and user experience.
        </p>
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">🎓 Education</h3>
          <p className="font-semibold text-gray-700">B.E. in Computer Science & Engineering – CBIT</p>
          <p className="mt-2 text-gray-600">
            Strong foundation in software development, system design, and emerging technologies.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">💡 Skills & Expertise</h3>
          <ul className="space-y-2 text-gray-600">
            <li>✔ Frontend: React, Tailwind CSS, JavaScript, Vite</li>
            <li>✔ Backend: Django, Python, REST APIs</li>
            <li>✔ AI Integration: AI-powered solutions for enhanced automation</li>
            <li>✔ Version Control: Git, GitHub</li>
            <li>✔ Deployment & Hosting: DigitalOcean, Vercel</li>
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