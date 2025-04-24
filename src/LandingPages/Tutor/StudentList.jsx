
import { useNavigate } from "react-router-dom";
import TutorNavbar from "../Components/TutorNavbar";

export default function StudentList() {
  const navigate = useNavigate();

  return (
    <div>
      <TutorNavbar />
      <div className="p-4">
        <div className="flex gap-4 mb-4">
          <button className="bg-med-blue text-white px-4 py-2 rounded cursor-pointer" onClick={() => navigate("/mark")}>
            Add Student
          </button>
          <button className="bg-med-blue text-white px-4 py-2 rounded cursor-pointer" onClick={() => navigate("/mark-attendance")}>
            Mark Attendance
          </button>
          <button className="bg-med-blue text-white px-4 py-2 rounded cursor-pointer" onClick={() => navigate("/all-attendance")}>
            All Students Attendance
          </button>
          <button className="bg-med-blue text-white px-4 py-2 rounded cursor-pointer" onClick={() => navigate("/attendance-history")}>
            Attendance History
          </button>
        </div>

        <table className="w-full border rounded">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Class</th>
              <th className="p-2">Attendance %</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">001</td>
              <td className="p-2 flex items-center gap-2">Raheem</td>
              <td className="p-2">Class VI-A</td>
              <td className="p-2">98%</td>
              <td className="p-2 flex gap-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
