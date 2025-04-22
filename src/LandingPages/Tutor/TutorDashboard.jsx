import React from "react";
import { useNavigate } from "react-router-dom";

const TutorDashboard = () => {
  return (
    <>
      <div class="w-full bg-white shadow p-4 flex items-center justify-between">
        <div class="flex items-center space-x-6">
          <span class="font-semibold text-gray-800">Tutor Dashboard</span>

          <div class="flex items-center space-x-1 text-gray-600 hover:text-black cursor-pointer">
            <span>Students</span>
          </div>

          <div class="flex items-center space-x-1 text-gray-600 hover:text-black cursor-pointer">
            <span>Dashboard</span>
          </div>
        </div>

        <div>
          <img
            src="data:image/jpeg;base64,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"
            alt="Avatar"
            class="w-8 h-8 rounded-full border border-gray-300"
          />
        </div>
      </div>
      <div className="p-6 space-y-6">
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

        <div className="bg-white rounded shadow jus">
          <div className="p-6 space-y-4 ">
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
              <div className="space-y-1 text-sm">
                <p>
                  <strong>Class Location:</strong> Main Campus, Room 401
                </p>
                <p>
                  <strong>Class Timing:</strong> 14:30 - 16:30
                </p>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Mark Attendance
              </button>
              <button className="w-full border border-gray-400 text-gray-700 py-2 rounded hover:bg-gray-100 transition">
                Cancel
              </button>
            </div>
          </div>
        </div>

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
