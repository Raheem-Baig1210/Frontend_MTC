import React from "react";
import { useNavigate } from "react-router-dom";

const TutorDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      {/* Dashboard Header */}
      <div className="w-full bg-white shadow p-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <span className="font-semibold text-gray-800 text-xl">Tutor Dashboard</span>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            <div className="text-gray-600 hover:text-black cursor-pointer">
              <span>Students</span>
            </div>
            <div className="text-gray-600 hover:text-black cursor-pointer">
              <span>Dashboard</span>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div>
          <button 
            className="bg-blue-600 text-white text-lg py-2 px-4 rounded hover:bg-blue-700 transition duration-300" 
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6 space-y-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded shadow">
            <div className="p-4">
              <p className="text-sm text-gray-500">Total Students</p>
              <p className="text-xl font-bold">156</p>
            </div>
          </div>
          <div className="bg-white rounded shadow">
            <div className="p-4">
              <p className="text-sm text-gray-500">Classes Taken</p>
              <p className="text-xl font-bold">1,234</p>
            </div>
          </div>
          <div className="bg-white rounded shadow">
            <div className="p-4">
              <p className="text-sm text-gray-500">Attendance Rate</p>
              <p className="text-xl font-bold">95%</p>
            </div>
          </div>
          <div className="bg-white rounded shadow">
            <div className="p-4">
              <p className="text-sm text-gray-500">Hours Taught</p>
              <p className="text-xl font-bold">2,468</p>
            </div>
          </div>
        </div>

        {/* Attendance Section */}
        <div className="bg-white rounded shadow">
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Mark Today's Attendance</h2>
              <span className="text-sm text-gray-500">07:03</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://cdn.wccftech.com/wp-content/uploads/2017/03/Google-Maps.jpg"
                  alt="Map Placeholder"
                  className="w-full object-cover h-48 rounded-lg"
                />
              </div>
              <div className="space-y-1 text-lg">
                <p>
                  <strong>Class Location:</strong> Main Campus, Room 401
                </p>
                <p>
                  <strong>Class Timing:</strong> 14:30 - 16:30
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button className="flex-grow bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Mark Attendance
              </button>
              <button className="flex-grow border border-gray-400 text-gray-700 py-2 rounded hover:bg-gray-100 transition">
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Forgot Attendance Section */}
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-gray-800 transition">
            Forgot to Mark Today’s Attendance
          </button>
        </div>
      </div>
    </>
  );
};

export default TutorDashboard;
