import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.JPG";
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
          <li className="font-semibold list-none my-2 px-2 py-2 lg:my-0 lg:px-4  rounded-lg  hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700 text-green-700">
            <Link to="/reviews">My Reviews</Link>
          </li>
          <li className="font-semibold list-none my-2 px-2 py-2 lg:my-0 lg:px-4  rounded-lg  hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700 text-green-700">
            <Link to="/addService">Add Service</Link>
          </li>
          <button
            className="font-semibold list-none my-2 px-2 py-2 lg:my-0 lg:px-4  rounded-lg  hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </>
      ) : (
        <li className="font-semibold list-none">
          <Link
            to="/login"
            className="font-semibold list-none my-2 px-2 py-2 lg:my-0 lg:px-4  rounded-lg  hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="font-semibold list-none my-2 px-2 py-2 lg:my-0 lg:px-4  rounded-lg  hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
          >
            Register
          </Link>
        </li>
      )}
    </>
  );

  return (
    <header
      className="bg-cyan-600 text-gray-100 text-xl py-1 dark:bg-gray-800 dark:text-gray-100"
      style={{ backgroundColor: "#0066CC" }}
    >
      <div className="container lg:px-20 flex justify-between lg:py-1 mx-auto">
        <div className="flex">
          <Link
            rel="noopener noreferrer"
            to="/"
            aria-label="Back to homepage"
            className="flex items-center px-4 py-0 lg:mr-4 bg-white rounded-sm"
          >
            <img src={logo} alt="" style={{ height: "40px" }} />
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/"
                className="flex items-center px-4 py-2 dark:border-transparent rounded-lg  hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/allServices"
                className="flex items-center px-4  rounded-lg  hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
              >
                Survices
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/blog"
                className="flex items-center px-4 mb-1  dark:border-transparent  rounded-lg  hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
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
            className="p-2 mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600 bg-white" viewBox="0 0 24 24">
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
              <div className="p-8 bg-white dark:bg-violet-400 dark:text-gray-900 border rounded shadow-sm">
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
                  <ul className="space-y-4 px-8">
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
                    <li className="text-green-800 bg-purple-400 inline-block">
                      {menuItems}
                    </li>
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
