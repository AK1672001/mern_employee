import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
     <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
        <Link to={'/'} className='flex flex-row'>
        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 5a3 3 0 00-3 3v1a3 3 0 006 0V8a3 3 0 00-3-3zm0 8a3 3 0 00-3 3v1a3 3 0 006 0v-1a3 3 0 00-3-3zm6-4a3 3 0 00-3 3v1a3 3 0 006 0v-1a3 3 0 00-3-3zm-12 0a3 3 0 00-3 3v1a3 3 0 006 0v-1a3 3 0 00-3-3zm6-4a3 3 0 00-3 3v1a3 3 0 006 0V8a3 3 0 00-3-3z"/>
      </svg>
      <span className="text-2xl font-semibold text-white">TaskTide</span>
        </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#dashboard" className="hover:text-gray-200">Dashboard</a></li>
              <li><a href="#employees" className="hover:text-gray-200">Employees List</a></li>
              <li><a href="#reports" className="hover:text-gray-200">Amit</a></li>
              <li><a href="/login" className="hover:text-gray-200">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar