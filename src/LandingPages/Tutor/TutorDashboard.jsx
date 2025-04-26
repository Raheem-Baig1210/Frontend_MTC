import React from "react";
import { useNavigate } from "react-router-dom";

const TutorDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <div className="w-full bg-[#DAF7DC] shadow p-4 flex flex-col sm:flex-row justify-between items-center animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <span className="font-bold text-xl text-[#18425d]">Tutor Dashboard</span>
          <div className="flex gap-4 text-[#18425d]">
            <span className="cursor-pointer hover:text-black transition" onClick={() => navigate('/student-list')}>
              Students
            </span>
            <span className="cursor-pointer hover:text-black transition" onClick={() => navigate('/tutor-dashboard')}>
              Dashboard
            </span>
          </div>
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-2 sm:mt-0 bg-[#18425d] text-white py-1 px-4 rounded-lg hover:bg-[#132f43] transition"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Students", value: 156 },
            { label: "Classes Taken", value: "1,234" },
            { label: "Attendance Rate", value: "95%" },
            { label: "Hours Taught", value: "2,468" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-xl font-bold text-[#18425d]">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Attendance */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4 hover:shadow-lg transition">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-[#18425d]">Mark Today's Attendance</h2>
            <span className="text-sm text-gray-500">07:03</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <img
              src="https://cdn.wccftech.com/wp-content/uploads/2017/03/Google-Maps.jpg"
              alt="Map Placeholder"
              className="w-full md:w-1/2 h-48 object-cover rounded-lg"
            />
            <div className="space-y-1 text-gray-700 text-lg">
              <p><strong>Class Location:</strong> Main Campus, Room 401</p>
              <p><strong>Class Timing:</strong> 14:30 - 16:30</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="flex-1 bg-[#9EE493] text-[#18425d] py-2 rounded-lg hover:bg-[#86d680] transition">
              Mark Attendance
            </button>
            <button className="flex-1 border border-gray-400 text-[#18425d] py-2 rounded-lg hover:bg-gray-100 transition">
              Cancel
            </button>
          </div>
        </div>

        {/* Forgot Button */}
        <div className="flex justify-end">
          <button className="bg-[#18425d] text-white py-2 px-4 rounded-lg hover:bg-[#132f43] transition">
            Forgot to Mark Today’s Attendance
          </button>
        </div>
      </div>
    </>
  );
};

export default TutorDashboard;
