import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
          <li className="font-semibold">
            <Link to="/reviews">My Reviews</Link>
          </li>
          <li className="font-semibold">
            <Link to="/addService">Add Service</Link>
          </li>
          <li className="font-semibold">
            <button onClick={handleLogOut} className="btn-ghost">
              Log Out
            </button>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link
            to="/login"
            className="px-8 py-3 mx-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900  md:px-5 md:py-2 md:mt-4 md:font-semibold md:dark:bg-violet-700 md:dark:text-gray-200"
          >
            Login
          </Link>
          <Link
            to="/registration"
            className="px-8 py-3 mx-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900  md:px-5 md:py-2 md:mt-4 md:font-semibold md:dark:bg-violet-700 md:dark:text-gray-200"
          >
            Registration
          </Link>
        </li>
      )}
    </>
  );

  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <Link
            rel="noopener noreferrer"
            to="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-8 h-8 dark:text-violet-400"
            >
              <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
              <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
            </svg>
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Survices
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                Blog
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Link
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Link
              </Link>
            </li>
          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {menuItems}
        </div>
        {/* <div className="dropdown">
            <div className="w-full">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-72"
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
                </li>
              </ul>
            </div>
          </div> */}

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
                      to="/"
                      aria-label="proReader"
                      title="proReader"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        proReader
                      </span>
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
                        to="/books"
                        aria-label="Books"
                        title="Books"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
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
