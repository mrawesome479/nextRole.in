import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-8 text-center">
      <div className="flex justify-center space-x-6 mb-4 text-blue-600 cursor-pointer">
        <FaFacebook className="hover:scale-125 transition duration-300 ease-in-out" />
        <FaTwitter className="hover:scale-125 transition duration-300 ease-in-out:scale-125" />
        <FaLinkedin className="hover:scale-125 transition duration-300 ease-in-out:scale-125" />
        <FaInstagram className="hover:scale-125 transition duration-300 ease-in-out:scale-125" />
      </div>
      <p className="text-gray-600">© 2025 NxtRole.AI — All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
