import { FaFacebook, FaInstagram, FaSkype, FaLinkedin, FaTimes } from "react-icons/fa";
import { 
  AiOutlineHome, 
  AiOutlineUser, 
  AiOutlineFileText, 
  AiOutlinePicture, 
  AiOutlineTool,
  AiOutlineMail,
  AiOutlineTrophy,
  AiOutlineStar
} from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="w-72 bg-gray-900 text-white h-screen p-6 flex flex-col">
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full w-24 h-24 border-4 border-gray-700 mb-4"
        />
        <h2 className="text-xl font-semibold mb-4">Alex Smith</h2>
        {/* Social Icons */}
        <div className="flex space-x-4 mb-10">
          <FaFacebook className="text-gray-400 hover:text-white cursor-pointer text-xl transition-colors" />
          <FaInstagram className="text-gray-400 hover:text-white cursor-pointer text-xl transition-colors" />
          <FaSkype className="text-gray-400 hover:text-white cursor-pointer text-xl transition-colors" />
          <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer text-xl transition-colors" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-6">
          <li className="flex items-center space-x-3 cursor-pointer text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800">
            <AiOutlineHome size={20} /> <span className="text-lg">Home</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800">
            <AiOutlineUser size={20} /> <span className="text-lg">About</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800">
            <AiOutlineFileText size={20} /> <span className="text-lg">Resume</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800">
            <AiOutlinePicture size={20} /> <span className="text-lg">Portfolio</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800">
            <AiOutlineTool size={20} /> <span className="text-lg">Skills</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800">
            <AiOutlineTrophy size={20} /> <span className="text-lg">Certifications</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800">
            <AiOutlineMail size={20} /> <span className="text-lg">Contact</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

