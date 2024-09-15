// src/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome, Admin!</h1>
          <p className="text-gray-600 mb-6">
            Here you can manage and monitor the system. Explore the features and options available in the sidebar.
          </p>
          <div className="mb-6">
            <Link to={'/createemployee'}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
            >
              Create Employee
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Widget 1</h2>
              <p className="text-gray-600">Details for widget 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Widget 2</h2>
              <p className="text-gray-600">Details for widget 2.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Widget 3</h2>
              <p className="text-gray-600">Details for widget 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
