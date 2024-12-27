import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full h-fit bg-[#000004] text-center py-12 text-white border-t border-gray-900">
      {/* Contenido del Footer */}
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center space-x-2 opacity-60">
          <AiFillTool className="text-2xl mb-2 text-gray-400" />
          <p className="text-sm">Sitio Web en Construcción</p>
        </div>
        <p className="text-xs mt-2 opacity-60">© 2024 Jonathan Guidi. Todos los derechos reservados.</p>
        
        {/* Enlaces a Redes Sociales */}
        <div className="flex justify-center mt-4 space-x-6 opacity-60">
          <a
            href="https://www.linkedin.com/in/jonathanguidi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300 flex items-center space-x-2"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://x.com/JonaaGuidi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300 flex items-center space-x-2"
          >
            <FaTwitter className="text-xl" />
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
