import { useEffect, useState } from "react";
import { LuAlignRight } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import logo from "../../assets/name.gif";
import logo2 from "../../assets/name-white.png";
import { Link } from "react-scroll";
import resume from '../../../public/Resume.pdf'
import "./navbar.css";
import {HiSun, HiMoon} from "react-icons/hi"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [top, setTop] = useState(true);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);

  const handleTheme = () => [
    setTheme(theme === "dark" ? "light" : "dark")
  ]

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset <= 20);
    };
    window.addEventListener("scroll", scrollHandler);

    // Explicit call so that the navbar gets blurred when component mounts
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div
      className={`fixed z-50 w-full mx-auto ${
        !top &&
        "bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-blur dark:backdrop-blur"
      }`}
    >
      <div className="py-2 shadow-lg ">
        <div className=" relative flex justify-between items-center px-4 container">
          {/* logo section */}
          <Link to="/" className="inline-flex items-center my-3 ms-8">
              {
                theme == "dark" ? 
                <img className="w-32" src={logo2} alt="Logo" />
                : 
                <img className="w-32" src={logo} alt="Logo" />
              }
              
          </Link>

          {/* Nav items */}

          <ul className="items-center hidden space-x-8 md:flex dark:text-white">
            <li className="hover:text-red-500 duration-200 font-thin text-lg cursor-pointer">
              <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="hover:text-red-500 duration-200 font-thin text-lg cursor-pointer">
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={5}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="hover:text-red-500 duration-200 font-thin text-lg cursor-pointer">
              <Link
                to="skills"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={5}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="hover:text-red-500 duration-200 font-thin text-lg cursor-pointer">
              <Link
                to="projects"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={5}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="hover:text-red-500 duration-200 font-thin text-lg cursor-pointer">
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={5}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li>
            <button onClick={handleTheme} className="p-2">
                {
                  theme == "dark" ? <HiSun className="text-2xl text-yellow-500"/> : <HiMoon className="text-2xl"/> 
                }
              </button>
            </li>
            <li>
              <a href={resume} download='Resume'>
                <button className="button" type="button">
                  <span className="button__text">Download CV</span>
                  <span className="button__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 35 35"
                      id="bdd05811-e15d-428c-bb53-8661459f9307"
                      data-name="Layer 2"
                      className="svg"
                    >
                      <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                      <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                      <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                    </svg>
                  </span>
                </button>
              </a>
            </li>
          </ul>
          {/* Mobile Navber Section */}
          <div className="md:hidden">
            {/* Dropdown open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <LuAlignRight className="h-5 w-5 text-black" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* logo & Button Section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <img className="w-24" src={logo} alt="" />
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <CgClose className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li className="hover:text-red-500 duration-200 font-thin text-lg">
                        <Link
                          to="home"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={5}
                          duration={500}
                        >
                          Home
                        </Link>
                      </li>
                      <li className="hover:text-red-500 duration-200 font-thin text-lg">
                        <Link
                          to="about"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={5}
                          duration={500}
                        >
                          About
                        </Link>
                      </li>
                      <li className="hover:text-red-500 duration-200 font-thin text-lg">
                        <Link
                          to="skills"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={5}
                          duration={500}
                        >
                          Skills
                        </Link>
                      </li>
                      <li className="hover:text-red-500 duration-200 font-thin text-lg">
                        <Link
                          to="projects"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={5}
                          duration={500}
                        >
                          Projects
                        </Link>
                      </li>
                      <li className="hover:text-red-500 duration-200 font-thin text-lg">
                        <Link
                          to="contact"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
            <button onClick={handleTheme} className="p-2">
                {
                  theme == "dark" ? <HiSun className="text-2xl text-yellow-500"/> : <HiMoon className="text-2xl"/> 
                }
              </button>
            </li>
                      <li>
                        <a href={resume} download='Resume'>
                          <button className="button" type="button">
                            <span className="button__text">Download</span>
                            <span className="button__icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 35 35"
                                id="bdd05811-e15d-428c-bb53-8661459f9307"
                                data-name="Layer 2"
                                className="svg"
                              >
                                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                                <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                                <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                              </svg>
                            </span>
                          </button>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
