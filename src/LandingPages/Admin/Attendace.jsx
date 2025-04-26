import Sidebar from "./Sidebar";
import "./Attendance.css"; // component-scoped styles

const Attendance = () => {
  const backgroundColor = "#DAF7DC";
  const accentColor = "#9EE493";
  const textColor = "#18425d";

  return (
    <div className="flex flex-col md:flex-row min-h-screen" style={{ backgroundColor }}>
      <Sidebar />

      <main className="flex-1 p-6 md:p-10">
        <h1
          className="text-3xl md:text-4xl font-semibold mb-6"
          style={{ color: textColor }}
        >
          Attendance Overview
        </h1>
        <hr className="border-gray-300 mb-6" />

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <input
            type="text"
            placeholder="Search Tutors"
            className="flex-1 max-w-md px-4 py-2 border border-gray-300 rounded-lg transition focus:outline-none focus:ring-2"
            style={{
              color: textColor,
              borderColor: accentColor,
              backgroundColor: "#fff",
            }}
          />
        </div>

        {/* Attendance List */}
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ color: textColor }}
        >
          Tutors Attendance List
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Tutor 1", "Tutor 2", "Tutor 3", "Tutor 4"].map((name, idx) => (
            <div
              key={idx}
              className="attendance-card"
              style={{ borderLeft: `5px solid ${accentColor}` }}
            >
              <h3 className="text-xl font-medium mb-2" style={{ color: textColor }}>
                {name}
              </h3>
              <p className="text-sm" style={{ color: textColor }}>
                Present: 16 / 20 sessions
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Attendance;
