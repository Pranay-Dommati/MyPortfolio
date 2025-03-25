import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      name: "Movie Financial Analysis and Visualization",
      description: "Developed a film revenue prediction model using scikit-learn's Linear Regression, preprocessing data with Pandas and visualizing insights with Matplotlib and Seaborn.",
      technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      features: [
        "Film revenue prediction using Linear Regression",
        "Data preprocessing and cleaning",
        "Statistical analysis and visualization",
        "Interactive data insights"
      ],
      github: "https://github.com/Pranay-Dommati/Analyzing-movie-budget-with-revenue",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Freelance Writing Platform",
      description: "Completed a freelance writing job platform using React and Django/Python, optimizing platform stability and user experience.",
      technologies: ["React", "Django", "Python", "PostgreSQL", "REST API"],
      features: [
        "User authentication and profiles",
        "Job posting and bidding system",
        "Real-time messaging",
        "Payment integration"
      ],
      github: "https://github.com/Pranay-Dommati/writing-freelancing",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Flight Deals Alert System",
      description: "Built a Python system for cheap flight alerts using the Kiwi API, Sheety, SMTP, and Twilio SMS with dynamic date handling and error management.",
      technologies: ["Python", "Kiwi API", "Twilio", "SMTP", "Sheety API"],
      features: [
        "Real-time flight price monitoring",
        "SMS and email notifications",
        "Dynamic date handling",
        "Error management system"
      ],
      github: "https://github.com/Pranay-Dommati/Flight-Deals",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "French Learning Flashcard App",
      description: "Developed a Python flashcard app using Tkinter and Pandas for French vocabulary learning with randomized word selection and interactive feedback.",
      technologies: ["Python", "Tkinter", "Pandas", "SQLite"],
      features: [
        "Interactive flashcard interface",
        "Randomized word selection",
        "Progress tracking",
        "Learning analytics"
      ],
      github: "https://github.com/Pranay-Dommati/Language-Learning-Tool",
      image: "https://images.unsplash.com/photo-1505902987837-9e40ec37e607?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-10" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-sm">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-end">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors text-sm"
                  >
                    <FaGithub className="mr-2" /> View Project
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