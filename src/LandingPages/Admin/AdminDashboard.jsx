import React from "react";
import Sidebar from "./Sidebar";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen" style={{ backgroundColor: "#DAF7DC" }}>
      <Sidebar />
      <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#18425d]">Welcome, Admin</h1>
        </header>

        {/* Centers Section */}
        <section className="mb-12 animate-fadeInUp">
          <h2 className="text-2xl font-semibold text-[#18425d] mb-4">Centers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["cntr5.jpg", "cntr3.jpg", "cntr2.jpg"].map((img, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300"
              >
                <img src={`/media/${img}`} alt={`Center ${idx + 1}`} className="w-full h-48 object-cover" />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <button className="bg-white bg-opacity-90 hover:bg-opacity-100 font-medium py-1 px-3 rounded-full shadow text-[#18425d] transition">
                    Center {idx + 1}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tutors Attendance Section */}
        <section className="animate-fadeInUp delay-150">
          <h2 className="text-2xl font-semibold text-[#18425d] mb-4">Tutors Attendance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Tutor1", "Tutor2", "Tutor3"].map((tutor, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition text-[#18425d] text-lg font-medium text-center"
                style={{ border: "1px solid #9EE493" }}
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
