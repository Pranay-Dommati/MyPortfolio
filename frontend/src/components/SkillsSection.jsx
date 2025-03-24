import { AiFillCode, AiOutlineHtml5, AiFillDatabase, AiFillGithub, AiOutlineBarChart } from "react-icons/ai";
import { FaPython, FaReact, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiDjango, SiFlask, SiSelenium, SiNumpy, SiPandas } from "react-icons/si";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <AiFillCode className="text-3xl text-blue-600" />,
      skills: [
        { name: "Python", icon: <FaPython className="text-blue-600" /> },
        { name: "C", icon: <span className="text-blue-600 font-bold">C</span> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> }
      ],
      bgColor: "#EFF6FF" // Light blue background
    },
    {
      title: "Web Development",
      icon: <AiOutlineHtml5 className="text-3xl text-orange-500" />,
      skills: [
        { name: "HTML", icon: <AiOutlineHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "ReactJS", icon: <FaReact className="text-blue-400" /> },
        { name: "Django", icon: <SiDjango className="text-green-700" /> },
        { name: "Flask", icon: <SiFlask className="text-gray-700" /> }
      ],
      bgColor: "#FDF2F8" // Light pink background
    },
    {
      title: "Databases",
      icon: <AiFillDatabase className="text-3xl text-purple-600" />,
      skills: [
        { name: "Database Management System (DBMS)", icon: <AiFillDatabase className="text-purple-600" /> }
      ],
      bgColor: "#F3F4F6" // Light gray background
    },
    {
      title: "Version Control & Tools",
      icon: <AiFillGithub className="text-3xl text-gray-800" />,
      skills: [
        { name: "Git", icon: <AiFillGithub className="text-gray-800" /> },
        { name: "REST API", icon: <span className="text-green-600 font-mono">API</span> },
        { name: "Selenium", icon: <SiSelenium className="text-green-500" /> }
      ],
      bgColor: "#ECFDF5" // Light green background
    },
    {
      title: "Data Analysis & Libraries",
      icon: <AiOutlineBarChart className="text-3xl text-red-600" />,
      skills: [
        { name: "Pandas", icon: <SiPandas className="text-blue-700" /> },
        { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> }
      ],
      bgColor: "#FEF2F2" // Light red background
    }
  ];

  return (
    <div className="min-h-screen py-20 px-10" style={{ backgroundColor: "#F4FAFD" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Skills</h2>
        
        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="rounded-xl p-8 shadow-md"
              style={{ backgroundColor: category.bgColor }}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold ml-3 text-gray-800">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3 hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className="text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;