import React, { useState } from "react";

const Header = ({ menuOpen, setMenuOpen }) => {
  const [active, setActive] = useState("home");

  const handleNavClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src="/nxtRole.svg" alt="NxtRole" className="w-20 h-15" />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex font-mono space-x-10 text-xl text-gray-700 relative">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => handleNavClick(item.id)}
            className={`relative pb-1 transition duration-300 ease-in-out ${
              active === item.id ? "text-blue-600 font-semibold" : ""
            } hover:text-blue-600 `}
          >
            {item.label}

            <span
              className={`absolute left-0 bottom-0 h-[0.5vh] bg-blue-600 transition-all duration-300 ${
                active === item.id ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
        ))}
      </nav>

      <button className="hover:scale-110 transition duration-200 ease-in-out bg-linear-to-r from-blue-500 to-blue-700 cursor-pointer shadow-md/30 text-shadow-lg/30 hidden md:block text-white px-5 py-2 rounded-lg">
        Get Started
      </button>

      <button
        className="md:hidden text-gray-700 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-16 left-0 font-mono text-black w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`text-lg transition duration-200 ${
                active === item.id
                  ? "text-blue-600 font-semibold"
                  : "text-gray-800"
              } hover:text-blue-600`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
