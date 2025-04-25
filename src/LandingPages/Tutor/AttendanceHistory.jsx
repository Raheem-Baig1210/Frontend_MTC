import TutorNavbar from "../Components/TutorNavbar";

export default function AttendanceHistory() {
  return (
    <div>
      <TutorNavbar/>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Attendance History</h2>
        <div className="flex justify-between items-center mb-4">
          <input className="border px-2 py-1 rounded w-1/2" placeholder="Search by student name or roll number..." />
          <button className="bg-med-blue text-white px-4 py-1 rounded cursor-pointer">Search</button>
        </div>
        <div className="bg-white p-4 rounded shadow-md mb-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-lg font-bold">Raheem</h3>
              <p>Roll Number: STD001<br />Class: VI-A</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-semibold">98%</p>
            <p className="text-sm text-gray-500">Overall Attendance</p>
          </div>
        </div>
        <table className="w-full border rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Marked By</th>
              <th className="p-2">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Apr 18, 2025</td>
              <td className="p-2 text-green-600 font-bold">Present</td>
              <td className="p-2">Naser</td>
              <td className="p-2">On time</td>
            </tr>
            <tr>
              <td className="p-2">Apr 17, 2025</td>
              <td className="p-2 text-red-500 font-bold">Absent</td>
              <td className="p-2">Zain</td>
              <td className="p-2">Medical leave</td>
            </tr>
            <tr>
              <td className="p-2">Apr 16, 2025</td>
              <td className="p-2 text-yellow-600 font-bold">Late</td>
              <td className="p-2">Abdul-Rahman</td>
              <td className="p-2">15 minutes late</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
