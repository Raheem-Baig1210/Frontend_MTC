import TutorNavbar from "../Components/TutorNavbar";
export default function AllAttendance() {
  return (
    <div>
      <TutorNavbar />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">All Students Attendance</h2>
        <div className="flex gap-4 mb-4">
          <select className="border px-2 py-1 rounded">
            <option>All Classes</option>
          </select>
          <input type="date" className="border px-2 py-1 rounded" />
          <input type="date" className="border px-2 py-1 rounded" />
          <button className="bg-black text-white px-4 py-1 rounded">Apply</button>
          <button className="bg-gray-200 px-4 py-1 rounded">Reset</button>
        </div>
        {/* Table */}
        <table className="w-full border rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Roll No.</th>
              <th className="p-2">Name</th>
              <th className="p-2">Class</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">001</td>
              <td className="p-2 flex items-center gap-2">Raheem</td>
              <td className="p-2">Class VI-A</td>
              <td className="p-2">2025-04-18</td>
              <td className="p-2 text-green-600 font-bold">Present</td>
            </tr>
            <tr>
              <td className="p-2">002</td>
              <td className="p-2 flex items-center gap-2">Abdul Rahman</td>
              <td className="p-2">Class X-A</td>
              <td className="p-2">2025-04-18</td>
              <td className="p-2 text-red-500 font-bold">Absent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
