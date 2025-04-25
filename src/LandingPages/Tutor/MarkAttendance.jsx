import TutorNavbar from "../Components/TutorNavbar";

export default function MarkAttendance() {
  return (
    <div className="bg-[#DAF7DC] min-h-screen animate-fade-in">
      <TutorNavbar />

      <div className="p-6">
        <h2 className="text-3xl font-bold text-[#18425d] mb-8 text-center">Mark Monthly Attendance</h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#9EE493] focus:border-[#9EE493] transition">
            <option>Select Class/Batch</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#9EE493] focus:border-[#9EE493] transition">
            <option>Select Month</option>
          </select>
          <button className="bg-[#18425d] hover:bg-[#132f43] text-white px-6 py-2 rounded-lg transition shadow">
            Mark All Present
          </button>
        </div>

        {/* Attendance Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4 mb-8">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#9EE493] text-[#18425d] text-left">
                <th className="p-3 font-medium">Roll No</th>
                <th className="p-3 font-medium">Student Name</th>
                <th className="p-3 font-medium">Attendance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="p-3">001</td>
                <td className="p-3">Raheem</td>
                <td className="p-3">
                  <input type="checkbox" className="h-5 w-5 accent-[#18425d]" />
                </td>
              </tr>
              <tr className="border-t hover:bg-gray-50 transition">
                <td className="p-3">002</td>
                <td className="p-3">Abdul Rahman</td>
                <td className="p-3">
                  <input type="checkbox" className="h-5 w-5 accent-[#18425d]" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button className="bg-[#18425d] hover:bg-[#132f43] text-white font-semibold px-8 py-3 rounded-xl transition shadow">
            Submit Attendance
          </button>
        </div>
      </div>
    </div>
  );
}
