import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Centers = () => {

  const navigate = useNavigate()
  const handleAddCenter = () => navigate("/add-center")
  const handleDeleteCenter = () => navigate("/delete-center")

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f8fdf8]">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 md:p-10">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18425d] mb-6 text-center md:text-left">
          Centers Management
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {[
            { label: "Total Centers", value: "x" },
            { label: "Total Tutors", value: "y" },
            { label: "Total Students", value: "z" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow hover:shadow-md transition duration-300 p-6 text-center transform hover:-translate-y-1"
            >
              <div className="text-3xl font-extrabold text-[#18425d] mb-1">
                {stat.value}
              </div>
              <div className="text-[#555] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search + Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search Centers..."
            className="flex-1 max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18425d] transition"
          />


          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2 text-lg font-medium bg-green-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 transition" onClick={handleAddCenter}>
              + Add Center
            </button>
            <button className="px-5 py-2 text-lg font-medium bg-red-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 transition" onClick={handleDeleteCenter}>
              – Remove Center
            </button>
          </div>
        </div>

        {/* Center Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500">
                Center {i} Image
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-[#18425d] mb-2">
                  Center {i} Name
                </h4>
                <p className="text-gray-600 text-sm">
                  Brief description or address of the center goes here.
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
