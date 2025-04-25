import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => navigate('/');

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            Logout
          </button>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            Centers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['cntr5.jpg', 'cntr3.jpg', 'cntr2.jpg'].map((img, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer"
              >
                <img
                  src={`/media/${img}`}
                  alt={`Center ${idx + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 font-medium py-2 px-4 rounded-full shadow transition duration-300">
                    Center {idx + 1}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            Tutors Attendance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['Tutor1', 'Tutor2', 'Tutor3'].map((tutor, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center justify-center text-lg font-medium text-gray-800"
              >
                {tutor}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
