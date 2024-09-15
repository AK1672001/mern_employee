import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const LoginSignUp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const[user,setUser]=useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUser({
        ...user,
        [e.target.name]:e.target.value
    })
    // Add your login/signup logic here
    setIsLoggedIn(true);
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 via-blue-400 to-blue-500 flex items-center justify-center p-6">
{/* Main Content */}
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          {isSignup ? 'Create an Account' : 'Login'}
        </h2>

        {/* Form */}
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {isSignup && (
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="text-gray-400" />
              </span>
              <input
                type="name"
                placeholder="Full Name"
                name="name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
                required
              />
            </div>
          )}

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaEnvelope className="text-gray-400" />
            </span>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
              required
            />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaLock className="text-gray-400" />
            </span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full  bg-yellow-500 text-blue-800 py-2 px-4 rounded-lg hover:from-pink-500 hover:to-red-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            onClick={toggleForm}
            className="text-blue-500 hover:text-purple-700 font-semibold transition duration-300 ease-in-out"
          >
            {isSignup ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignUp;
