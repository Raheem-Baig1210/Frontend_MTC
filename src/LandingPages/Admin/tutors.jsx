import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Tutors = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f8fdf8]">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 md:p-10">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18425d] mb-6 text-center md:text-left">
          Tutors Management
        </h1>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <input
            type="text"
            placeholder="Search Tutors"
            className="flex-1 max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18425d] transition"
          />

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => navigate("/add-tutor")}
              className="bg-[#4CAF50] hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow hover:shadow-md transition transform hover:scale-105"
            >
              + Add Tutor
            </button>
            <button
              onClick={() => navigate("/delete-tutor")}
              className="bg-[#f44336] hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow hover:shadow-md transition transform hover:scale-105"
            >
              – Remove Tutor
            </button>
          </div>
        </div>

        {/* Tutors List */}
        <h2 className="text-xl sm:text-2xl font-semibold text-[#18425d] mb-4 text-center sm:text-left">
          Tutors List
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Tutor 1", "Tutor 2", "Tutor 3", "Tutor 4"].map((name, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 cursor-pointer transform hover:-translate-y-1"
             onClick={() => navigate("/tutor-profile")}>
              <h3 className="text-lg font-bold text-[#18425d] mb-1">{name}</h3>
              <p className="text-gray-600 text-sm">
                Email: tutor{idx + 1}@gmail.com
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tutors;
