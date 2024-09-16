
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const EmployeeList = () => {
  // Initialize as an empty array
  const [employees, setEmployees] = useState([]);
  const[success,setSuccess]=useState(null)
  const navigate=useNavigate();
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/empalldetails");
        setEmployees(response.data.user);
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };
    fetchEmployees();
  }, [success]);

  const handleEdit = (id) => {
    console.log(`Edit employee with ID: ${id}`);
    navigate(`/empupdate/${id}`)
    
  };

  const handleDelete = async (id) => {
   try {
    const response=await axios.post(`http://localhost:5000/empdelete/${id}`)
    if (response.status >= 200 && response.status < 300) {
      setEmployees((prevEmployees) => prevEmployees.filter(employee => employee.id !== id));
      setSuccess("User deleted successfully!");
      setTimeout(() => {
        setSuccess(null);
      }, 2000);
    }
   } catch (error) {
    
   }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="container mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Employee List</h2>
        {success && <p className="text-green-500">{success}</p>}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-100">
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Photo</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Name</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Phone</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Gender</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Course</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Email</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Designation</th>
                <th className="py-3 px-6 text-left text-gray-600 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr key={employee.id} className="border-b border-gray-200">
                  <td className="py-4 px-6">
                    <img src={`http://localhost:5000/images/${employee.ImgUpload}`}  alt={employee.name} className="w-12 h-12 rounded-full object-cover" />
                  </td>
                  <td className="py-4 px-6 text-gray-700">{employee.name}</td>
                  <td className="py-4 px-6 text-gray-700">{employee.phone}</td>
                  <td className="py-4 px-6 text-gray-700">{employee.gender}</td>
                  <td className="py-4 px-6 text-gray-700">{employee.course}</td>
                  <td className="py-4 px-6 text-gray-700">{employee.email}</td>
                  <td className="py-4 px-6 text-gray-700">{employee.designation}</td>
                  <td className="py-4 px-6 flex space-x-2">
                    <button
                      onClick={() => handleEdit(employee._id)}
                      className="px-3 py-1 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(employee._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
