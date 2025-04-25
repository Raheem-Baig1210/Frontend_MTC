import Sidebar from "./Sidebar";

const Students = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f8fdf8]">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 md:p-10">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18425d] mb-6 text-center md:text-left">
          Students Overview
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Students", value: "x" },
            { label: "Active Students", value: "y" },
            { label: "Total Centers", value: "z" },
            { label: "Total Tutors", value: "z1" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 text-center cursor-pointer transform hover:-translate-y-1"
            >
              <div className="text-2xl font-bold text-[#18425d] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <input
            type="text"
            placeholder="Search Students"
            className="flex-1 max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18425d] transition"
          />
        </div>

        {/* Students List */}
        <h2 className="text-xl sm:text-2xl font-semibold text-[#18425d] mb-4 text-center sm:text-left">
          Students List
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Student 1", "Student 2", "Student 3", "Student 4"].map(
            (name, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 cursor-pointer transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-[#18425d] mb-1">
                  {name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Grade: A | Center: Example Center
                </p>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default Students;
