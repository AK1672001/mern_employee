import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { LiaAccusoft } from "react-icons/lia";

const Navbar = () => {
  const [username, setUserName] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decodedPayload = jwtDecode(token);
      const userName = decodedPayload.name;
      if (userName) {
        setUserName(userName);
      } else {
        console.log("Name not found in token");
      }
    } else {
      console.log("No token found");
    }
  }, []);

  return (
    <>
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to={"/"} className="flex flex-row">
            <svg
              className="w-8 h-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 5a3 3 0 00-3 3v1a3 3 0 006 0V8a3 3 0 00-3-3zm0 8a3 3 0 00-3 3v1a3 3 0 006 0v-1a3 3 0 00-3-3zm6-4a3 3 0 00-3 3v1a3 3 0 006 0v-1a3 3 0 00-3-3zm-12 0a3 3 0 00-3 3v1a3 3 0 006 0v-1a3 3 0 00-3-3zm6-4a3 3 0 00-3 3v1a3 3 0 006 0V8a3 3 0 00-3-3z" />
            </svg>
            <span className="text-2xl font-semibold text-white">TaskTide</span>
          </Link>
          <nav className="items-center justify-center">
            <ul className="flex space-x-4 items-center ">
              <li>
                <a href="#dashboard" className="hover:text-gray-200">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#employees" className="hover:text-gray-200">
                  Employees List
                </a>
              </li>
              {username ? (
                <>
                  <li className="justify-center font-bold hover:text-gray-200 flex flex-row gap-1 items-center" >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z"
                        fill="white"
                      />
                    </svg>
                    <span className="text-white">{username}</span>
                  </li>
                  <button className="bg-yellow-500 text-blue-800 py-2 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">
                    Logout
                  </button>
                </>
              ) : (
                <li>
                  <a href="/login" className="hover:text-gray-200">
                    Login
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
