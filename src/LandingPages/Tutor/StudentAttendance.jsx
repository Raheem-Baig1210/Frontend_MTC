import TutorNavbar from "../Components/TutorNavbar";

export default function AllAttendance() {
  return (
    <div className="bg-[#DAF7DC] min-h-screen animate-fade-in">
      <TutorNavbar />
      <div className="p-6">
        <h2 className="text-3xl font-bold text-[#18425d] mb-8 text-center">All Students Attendance</h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#9EE493] focus:border-[#9EE493] transition">
            <option>All Classes</option>
          </select>
          <input
            type="date"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#9EE493] focus:border-[#9EE493] transition"
          />
          <input
            type="date"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#9EE493] focus:border-[#9EE493] transition"
          />
          <button className="bg-[#18425d] hover:bg-[#132f43] text-white px-6 py-2 rounded-lg transition shadow">
            Apply
          </button>
          <button className="bg-[#9EE493] hover:bg-[#86d680] text-[#18425d] px-6 py-2 rounded-lg transition shadow">
            Reset
          </button>
        </div>

        {/* Attendance Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-[#9EE493] text-[#18425d]">
              <tr>
                <th className="p-3 font-medium text-left">Roll No.</th>
                <th className="p-3 font-medium text-left">Name</th>
                <th className="p-3 font-medium text-left">Class</th>
                <th className="p-3 font-medium text-left">Date</th>
                <th className="p-3 font-medium text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="p-3">001</td>
                <td className="p-3 flex items-center gap-2">Raheem</td>
                <td className="p-3">Class VI-A</td>
                <td className="p-3">2025-04-18</td>
                <td className="p-3 text-green-600 font-bold">Present</td>
              </tr>
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="p-3">002</td>
                <td className="p-3 flex items-center gap-2">Abdul Rahman</td>
                <td className="p-3">Class X-A</td>
                <td className="p-3">2025-04-18</td>
                <td className="p-3 text-red-500 font-bold">Absent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
