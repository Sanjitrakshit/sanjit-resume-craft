
import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 animate-in slide-in-from-top-4 duration-700">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Sanjit Rakshit
        </h1>
        
        <div className="flex flex-wrap justify-center gap-6 text-gray-600 mb-6">
          <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <MapPin className="w-4 h-4" />
            <span>Gurugram, Haryana</span>
          </div>
          <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <Phone className="w-4 h-4" />
            <span>8383863520</span>
          </div>
          <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <Mail className="w-4 h-4" />
            <a href="mailto:sanjitrksht@gmail.com" className="hover:underline">
              sanjitrksht@gmail.com
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/sanjit-rakshit-093844367" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a 
            href="https://github.com/Sanjitrakshit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
