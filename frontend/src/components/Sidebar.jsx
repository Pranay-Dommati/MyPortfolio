import { useState } from 'react';
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { 
  AiOutlineHome, 
  AiOutlineUser, 
  AiOutlineFileText, 
  AiOutlinePicture, 
  AiOutlineTool,
  AiOutlineMail,
  AiOutlineTrophy
} from "react-icons/ai";
import profileImage from '../assets/profile.jpg'; // Import the profile image

const Sidebar = ({ activeTab, onTabClick }) => {
  return (
    <div className="w-72 bg-gray-900 text-white min-h-screen h-full p-6 flex flex-col sticky top-0">
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full w-24 h-24 border-4 border-gray-700 mb-4 object-cover"
        />
        <h2 className="text-xl font-semibold mb-4">Pranay Dommati</h2>
        {/* Social Icons */}
        <div className="flex space-x-4 mb-16">
          <a href="https://github.com/Pranay-Dommati" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-400 hover:text-white cursor-pointer text-xl transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/pranaydommati/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer text-xl transition-colors" />
          </a>
          <a href="https://leetcode.com/u/Pranay_Dommati/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="text-gray-400 hover:text-white cursor-pointer text-xl transition-colors" />
          </a>
          <a href="https://www.hackerrank.com/profile/bannydommati" target="_blank" rel="noopener noreferrer">
            <FaHackerrank className="text-gray-400 hover:text-white cursor-pointer text-xl transition-colors" />
          </a>
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
            onClick={() => onTabClick('Home')}
          >
            <AiOutlineHome size={20} /> <span className="text-lg">Home</span>
          </li>
          <li 
            className={`flex items-center space-x-3 cursor-pointer px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'About' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            onClick={() => onTabClick('About')}
          >
            <AiOutlineUser size={20} /> <span className="text-lg">About</span>
          </li>
          <li 
            className={`flex items-center space-x-3 cursor-pointer px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'Resume' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            onClick={() => onTabClick('Resume')}
          >
            <AiOutlineFileText size={20} /> <span className="text-lg">Resume</span>
          </li>
          <li 
            className={`flex items-center space-x-3 cursor-pointer px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'Portfolio' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            onClick={() => onTabClick('Portfolio')}
          >
            <AiOutlinePicture size={20} /> <span className="text-lg">Portfolio</span>
          </li>
          <li 
            className={`flex items-center space-x-3 cursor-pointer px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'Skills' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            onClick={() => onTabClick('Skills')}
          >
            <AiOutlineTool size={20} /> <span className="text-lg">Skills</span>
          </li>
          <li 
            className={`flex items-center space-x-3 cursor-pointer px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'Certifications' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            onClick={() => onTabClick('Certifications')}
          >
            <AiOutlineTrophy size={20} /> <span className="text-lg">Certifications</span>
          </li>
          <li 
            className={`flex items-center space-x-3 cursor-pointer px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'Contact' 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            onClick={() => onTabClick('Contact')}
          >
            <AiOutlineMail size={20} /> <span className="text-lg">Contact</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;