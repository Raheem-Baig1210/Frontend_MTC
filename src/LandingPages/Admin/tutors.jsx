import Sidebar from "./Sidebar";

const Tutors = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Tutors Management
        </h1>
        <hr className="border-gray-300 mb-6" />

        {/* Search + Actions Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search Tutors"
            className="flex-1 max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2 text-lg font-medium bg-green-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 transition">
              + Add Tutor
            </button>
            <button className="px-5 py-2 text-lg font-medium bg-red-600 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 transition">
              – Remove Tutor
            </button>
          </div>
        </div>

        {/* Tutors List */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tutors List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Tutor 1", "Tutor 2", "Tutor 3", "Tutor 4"].map((name, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 cursor-pointer transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-medium text-gray-800 mb-2">{name}</h3>
              <p className="text-gray-600 text-sm">
                {/* Replace with real details */}
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
