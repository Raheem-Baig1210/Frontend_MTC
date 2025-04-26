import TutorNavbar from "../Components/TutorNavbar";

export default function AttendanceHistory() {
  return (
    <div className="bg-[#DAF7DC] min-h-screen animate-fade-in">
      <TutorNavbar />
      <div className="p-6">
        <h2 className="text-3xl font-bold text-[#18425d] mb-8 text-center">Attendance History</h2>

        {/* Search Input */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <input
            className="border border-gray-300 px-4 py-2 rounded-lg w-full sm:w-2/3 focus:ring-[#9EE493] focus:border-[#9EE493] transition"
            placeholder="Search by student name or roll number..."
          />
          <button className="bg-[#18425d] hover:bg-[#132f43] text-white px-6 py-2 rounded-lg transition shadow">
            Search
          </button>
        </div>

        {/* Summary Card */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6 flex justify-between items-center flex-col sm:flex-row gap-6">
          <div>
            <h3 className="text-2xl font-bold text-[#18425d]">Raheem</h3>
            <p className="text-sm text-gray-700">
              Roll Number: <strong>STD001</strong><br />
              Class: <strong>VI-A</strong>
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-4xl font-extrabold text-[#18425d]">98%</p>
            <p className="text-sm text-gray-500">Overall Attendance</p>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full table-auto">
            <thead className="bg-[#9EE493] text-[#18425d]">
              <tr>
                <th className="p-3 text-left font-medium">Date</th>
                <th className="p-3 text-left font-medium">Status</th>
                <th className="p-3 text-left font-medium">Marked By</th>
                <th className="p-3 text-left font-medium">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="p-3">Apr 18, 2025</td>
                <td className="p-3 text-green-600 font-bold">Present</td>
                <td className="p-3">Naser</td>
                <td className="p-3">On time</td>
              </tr>
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="p-3">Apr 17, 2025</td>
                <td className="p-3 text-red-500 font-bold">Absent</td>
                <td className="p-3">Zain</td>
                <td className="p-3">Medical leave</td>
              </tr>
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="p-3">Apr 16, 2025</td>
                <td className="p-3 text-yellow-600 font-bold">Late</td>
                <td className="p-3">Abdul-Rahman</td>
                <td className="p-3">15 minutes late</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
