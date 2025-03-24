import { useState } from 'react';
import { FaFacebook, FaInstagram, FaSkype, FaLinkedin } from "react-icons/fa";
import { 
  AiOutlineHome, 
  AiOutlineUser, 
  AiOutlineFileText, 
  AiOutlinePicture, 
  AiOutlineTool,
  AiOutlineMail,
  AiOutlineTrophy
} from "react-icons/ai";

const Sidebar = ({ onTabClick }) => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    onTabClick(tabName);
  };

  return (
    <div className="w-72 bg-gray-900 text-white h-screen p-6 flex flex-col sticky top-0">
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full w-24 h-24 border-4 border-gray-700 mb-4"
        />
        <h2 className="text-xl font-semibold mb-4">Pranay Dommati</h2>
        {/* Social Icons */}
        <div className="flex space-x-4 mb-16">
          <FaFacebook className="text-gray-400 hover:text-white cursor-pointer text-xl transition-colors" />
          <FaInstagram className="text-gray-400 hover:text-white cursor-pointer text-xl transition-colors" />
          <FaSkype className="text-gray-400 hover:text-white cursor-pointer text-xl transition-colors" />
          <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer text-xl transition-colors" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-6">
          <li 
            className={`flex items-center space-x-3 cursor-pointer px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'Home' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            onClick={() => handleTabClick('Home')}
          >
            <AiOutlineHome size={20} /> <span className="text-lg">Home</span>
          </li>
          <li 
            className={`flex items-center space-x-3 cursor-pointer px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'About' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            onClick={() => handleTabClick('About')}
          >
            <AiOutlineUser size={20} /> <span className="text-lg">About</span>
          </li>
          <li 
            className={`flex items-center space-x-3 cursor-pointer px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'Resume' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            onClick={() => handleTabClick('Resume')}
          >
            <AiOutlineFileText size={20} /> <span className="text-lg">Resume</span>
          </li>
          <li 
            className={`flex items-center space-x-3 cursor-pointer px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'Portfolio' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            onClick={() => handleTabClick('Portfolio')}
          >
            <AiOutlinePicture size={20} /> <span className="text-lg">Portfolio</span>
          </li>
          <li 
            className={`flex items-center space-x-3 cursor-pointer px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'Skills' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            onClick={() => handleTabClick('Skills')}
          >
            <AiOutlineTool size={20} /> <span className="text-lg">Skills</span>
          </li>
          <li 
            className={`flex items-center space-x-3 cursor-pointer px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'Certifications' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            onClick={() => handleTabClick('Certifications')}
          >
            <AiOutlineTrophy size={20} /> <span className="text-lg">Certifications</span>
          </li>
          <li 
            className={`flex items-center space-x-3 cursor-pointer px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'Contact' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            onClick={() => handleTabClick('Contact')}
          >
            <AiOutlineMail size={20} /> <span className="text-lg">Contact</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;