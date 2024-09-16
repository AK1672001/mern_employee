// HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16 flex flex-col items-center justify-center">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Manage Your Team Effortlessly</h2>
          <p className="text-lg mb-6">Streamline your HR processes and keep track of employee performance with our powerful management system.</p>
          <a href="#get-started" className="bg-yellow-500 text-blue-800 py-2 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">Get Started</a>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Welcome</h2>
          <p className="text-gray-600 mb-4">
            Here you can manage employee records, generate reports, and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-blue-600">Total Employees</h3>
              <p className="text-2xl font-bold mt-2">120</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-green-600">Active Projects</h3>
              <p className="text-2xl font-bold mt-2">8</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-yellow-600">Pending Tasks</h3>
              <p className="text-2xl font-bold mt-2">15</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Employee Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
