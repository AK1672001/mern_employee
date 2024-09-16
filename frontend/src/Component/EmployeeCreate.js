import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    gender: '',
    course: '',
    email: '',
    designation: '',
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append all form fields
    for (const key in formData) {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    }

    // Append the image file
    if (selectedImage) {
      data.append('file', selectedImage);
    }

    try {
      const response = await axios.post('https://mern-employee-7.onrender.com/empdetails', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccess(response.data.msg);
      setTimeout(() => {
        setSuccess('');
        navigate('/allemployee');
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.msg);
      setTimeout(() => {
        setError('');
      }, 2000);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-800 text-center">Create New Employee</h2>
        {success && <p className="text-green-500 text-center">{success}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-1 gap-4">
            {/* Form Fields */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1234567890"
                required
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-gray-700 font-medium mb-1">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="course" className="block text-gray-700 font-medium mb-1">Course</label>
              <input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Computer Science/BCA/MCA"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="johndoe@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="designation" className="block text-gray-700 font-medium mb-1">Designation</label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Software Engineer"
                required
              />
            </div>

            <div>
              <label htmlFor="image" className="block text-gray-700 font-medium mb-1">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                id="image"
                name="image"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
