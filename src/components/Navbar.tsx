import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setPrevScrollPos(window.pageYOffset);
    
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      
      setVisible(isScrollingUp || currentScrollPos < 10);
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav 
      className={`w-full bg-gray-900 z-50 h-[8.5vh] sticky top-0 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-center items-center h-full">
          <div className="hidden md:flex space-x-8 text-xl">
            <a href="/#about" className="text-white hover:text-green-500">
              About Me
            </a>
            <a href="/#experience" className="text-white hover:text-green-500">
              Experience
            </a>
            <a href="/#projects" className="text-white hover:text-green-500">
              Projects
            </a>
            <a href="/#skills" className="text-white hover:text-green-500">
              Skills
            </a>
            <a href="/#contact" className="text-white hover:text-green-500">
              Contact
            </a>
          </div>
          <button
            className="w-full justify-items-end md:hidden text-white"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <Menu />
          </button>
        </div>
      </div>
      <div
        className={`h-screen bg-gray-900 opacity-90 ${
          !menuOpen ? "hidden" : "block"
        }`}
      >
        <div className="flex flex-col space-y-4 text-xl text-end mr-10 p-5">
          <a href="#about" className="text-white hover:text-green-500" onClick={() => {setMenuOpen(false)}}>
            ABOUT ME
          </a>
          <a href="#experience" className="text-white hover:text-green-500" onClick={() => {setMenuOpen(false)}}>
            EXPERIENCE
          </a>
          <a href="#projects" className="text-white hover:text-green-500" onClick={() => {setMenuOpen(false)}}>
            PROJECTS
          </a>
          <a href="#skills" className="text-white hover:text-green-500" onClick={() => {setMenuOpen(false)}}>
            SKILLS
          </a>
          <a href="#contact" className="text-white hover:text-green-500" onClick={() => {setMenuOpen(false)}}>
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;