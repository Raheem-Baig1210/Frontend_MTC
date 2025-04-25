// pages/MarkAttendance.jsx
import TutorNavbar from "../Components/TutorNavbar";

export default function MarkAttendance() {
  return (
    <div>
      <TutorNavbar/>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Mark Monthly Attendance</h2>
        <div className="flex gap-4 mb-4">
          <select className="border px-2 py-1 rounded">
            <option>Select Class/Batch</option>
          </select>
          <select className="border px-2 py-1 rounded">
            <option>Select Month</option>
          </select>
          <button className="bg-gray-200 px-4 py-1 rounded cursor-pointer">Mark All Present</button>
        </div>
        <table className="w-full border rounded mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Roll No</th>
              <th className="p-2">Student Name</th>
              <th className="p-2">Attendance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">001</td>
              <td className="p-2">Raheem</td>
              <td className="p-2 cursor-pointer"><input type="checkbox" /></td>
            </tr>
            <tr>
              <td className="p-2">002</td>
              <td className="p-2">Abdul Rahman</td>
              <td className="p-2 cursor-pointer"><input type="checkbox" /></td>
            </tr>
          </tbody>
        </table>
        <button className="bg-med-blue text-white px-4 py-2 rounded cursor-pointer">Submit Attendance</button>
      </div>
    </div>
  );
}
