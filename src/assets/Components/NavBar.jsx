import React from 'react';
import { ShieldUser } from 'lucide-react';


const NavBar = () => (
  <nav className="bg-gray-900 sticky top-0 z-50 shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <h1 className="text-white text-2xl font-extrabold tracking-wide flex items-center gap-2">
  <ShieldUser className="w-6 h-6 text-blue-400" />
  Ananth <span className="text-blue-400">Surampudi</span>
</h1>

      {/* Desktop Navigation Links */}
      <div className="space-x-6 hidden md:flex">
        {["home", "about", "skills", "experience", "projects", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="text-white hover:text-blue-400 relative group transition"
          >
            <span className="group-hover:border-b-2 group-hover:border-blue-400 pb-1">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button className="text-white text-2xl focus:outline-none">
          <i className="fas fa-bars"></i> {/* You can include a hamburger icon if needed */}
        </button>
      </div>
    </div>
  </nav>
);

export default NavBar;
