import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuAlignRight } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import logo from "../../assets/logo-black-01.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed z-50 w-full mx-auto">
      <div className="bg-gray-100 bg-opacity-90 py-2 shadow-lg ">
    <div className=" relative flex justify-between items-center px-4 container">
      {/* logo section */}
      <Link to="/" className="inline-flex items-center my-3 ms-8">
        <img className="w-32" src={logo} alt="" />
      </Link>

      {/* Nav items */}

      <ul className="items-center hidden space-x-8 md:flex">
        <li className="hover:text-red-500 duration-200 font-thin text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Home
          </NavLink>
        </li>
        <li className="hover:text-red-500 duration-200 font-thin text-lg">
          <NavLink
            to="/books"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            About
          </NavLink>
        </li>
        <li className="hover:text-red-500 duration-200 font-thin text-lg">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Skills
          </NavLink>
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
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="hover:text-red-500 duration-200 font-thin text-lg">
                    <NavLink
                      to="/books"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="hover:text-red-500 duration-200 font-thin text-lg">
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Skills
                    </NavLink>
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
