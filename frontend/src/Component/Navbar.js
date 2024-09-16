import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const[success,setSuccess]=useState(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      try {
        const decodedPayload = jwtDecode(token);
        const userName = decodedPayload.name;
        if (userName) {
          setUsername(userName);
        } else {
          console.log("Name not found in token");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
        setToken(null);
      }
    }
  }, [token]);

  const handleLogout = async () => {
    try {
     const response= await axios.get('/logout', {}, { withCredentials: true });
      localStorage.removeItem('token');
      setToken(null);
      setUsername("");
      setSuccess(response.data.msg);
      setTimeout(()=>{
          setSuccess();
      },3000)
      navigate('/signin');
      setTimeout(()=>{
        navigate('/back')
      },4000)
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Logo and Title */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="flex items-center space-x-2">
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
          {isMobile && (
            <button
              className="md:hidden flex items-center px-2 py-1 text-white"
              onClick={handleMenuToggle}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className={`w-full md:flex md:items-center md:space-x-4 ${isMobile && !isMenuOpen ? "hidden" : "flex"}`}>
          <ul className="flex flex-col md:flex-row items-center w-full gap-4">
            {/* Push the navigation items to the right */}
            <div className="flex-grow"></div>
            {username ?(
              <>
                  <li>
              <Link to="/dash" className="hover:text-gray-200">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/allemployee" className="hover:text-gray-200">
                Employees List
              </Link>
            </li>
              </>
            ):(
              ""
            )}
           
            {username ? (
              <>
                <li className="flex items-center space-x-2 font-bold hover:text-gray-200">
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
                  <span>{username}</span>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-yellow-500 text-blue-800 py-2 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="hover:text-gray-200">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
      {success && <p className="text-white mt-14 justify-center font-bold text-3xl items-center ml-96">{success}</p>}

    </header>
  );
};

export default Navbar;
