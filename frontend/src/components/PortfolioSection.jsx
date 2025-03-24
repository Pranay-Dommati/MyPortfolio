import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      name: "AI Task Manager",
      description: "A smart task management application that uses AI to prioritize and categorize tasks based on deadlines and importance.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TensorFlow.js"],
      features: [
        "AI-powered task prioritization",
        "Customizable categories and labels",
        "Real-time progress tracking and analytics"
      ],
      github: "https://github.com/yourusername/ai-task-manager",
      demo: "https://ai-task-manager.vercel.app",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for e-commerce platforms with advanced analytics, inventory management, and order processing.",
      technologies: ["React", "Django", "PostgreSQL", "Tailwind CSS", "Chart.js"],
      features: [
        "Real-time sales analytics and reporting",
        "Inventory management with low stock alerts",
        "Order processing with status tracking"
      ],
      github: "https://github.com/yourusername/ecommerce-dashboard",
      demo: "https://ecommerce-dashboard-demo.vercel.app",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen py-20 px-10" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Features:</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <FaGithub className="mr-2" /> GitHub Repository
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;