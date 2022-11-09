import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.jpg";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const menuItems = (
    <>
      {user?.email ? (
        <>
          <li className="font-semibold list-none lg:px-4 hover:bg-violet-400 hover:p-2">
            <Link to="/reviews">My Reviews</Link>
          </li>
          <li className="font-semibold list-none lg:px-4 hover:bg-violet-400 hover:p-2 hover:mx-2">
            <Link to="/addService">Add Service</Link>
          </li>
          <li className="font-semibold list-none lg:px-4 hover:bg-violet-400 hover:p-2 hover:mx-2">
            <button onClick={handleLogOut} className="btn-ghost">
              Log Out
            </button>
          </li>
        </>
      ) : (
        <li className="font-semibold list-none">
          <Link
            to="/login"
            className="px-8 py-3 mx-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900  md:px-5 md:py-2 md:mt-4 md:font-semibold md:dark:bg-violet-700 md:dark:text-gray-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-8 py-3 mx-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900  md:px-5 md:py-2 md:mt-4 md:font-semibold md:dark:bg-violet-700 md:dark:text-gray-200"
          >
            Register
          </Link>
        </li>
      )}
    </>
  );

  return (
    <header className="bg-gray-800 text-gray-100 p-3 dark:bg-gray-800 dark:text-gray-100">
      <div className="container lg:px-20 flex justify-between h-16 mx-auto">
        <div className="flex">
          <Link
            rel="noopener noreferrer"
            to="/"
            aria-label="Back to homepage"
            className="flex items-center px-4 py-0 lg:mr-4 bg-white"
          >
            <img src={logo} alt="" style={{ height: "40px" }} />
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/"
                className="flex items-center px-4 -mb-1  dark:border-transparent"
                // className={({ isActive }) =>
                //           isActive
                //             ? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
                //             : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                //         }
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/allServices"
                className="flex items-center px-4 -mb-1 "
              >
                Survices
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/blog"
                className="flex items-center px-4 -mb-1  dark:border-transparent"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {menuItems}
        </div>

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white dark:bg-violet-400 dark:text-gray-900 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      rel="noopener noreferrer"
                      to="/"
                      aria-label="Back to homepage"
                      className="flex items-center px-1 lg:mr-4"
                    >
                      <img src={logo} alt="" style={{ height: "40px" }} />
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/"
                        aria-label="Home"
                        title="Home"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/allServices"
                        aria-label="Books"
                        title="Books"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        aria-label="About Us"
                        title="About Us"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>{menuItems}</li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
