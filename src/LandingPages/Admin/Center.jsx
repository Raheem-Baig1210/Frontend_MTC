import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Centers = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Centers Management
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Centers", value: "x" },
            { label: "Total Tutors", value: "y" },
            { label: "Total Students", value: "z" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center cursor-pointer transform hover:-translate-y-1"
            >
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search Centers"
            className="flex-1 max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/add-center")}
              className="px-5 py-2 text-lg font-medium bg-green-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            >
              + Add Center
            </button>
            <button
              onClick={() => navigate("/delete-center")}
              className="px-5 py-2 text-lg font-medium bg-red-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            >
              – Remove Center
            </button>
          </div>
        </div>

        {/* Centers List Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                Center {i} Image
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg text-gray-800 mb-2">
                  Center {i} Name
                </h4>
                <p className="text-gray-600 text-sm">
                  Brief description or address of the center.
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Centers;
