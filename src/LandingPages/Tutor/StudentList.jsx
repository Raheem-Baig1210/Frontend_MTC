import { useNavigate } from "react-router-dom";
import TutorNavbar from "../Components/TutorNavbar";

export default function StudentList() {
  const navigate = useNavigate();

  const handleAddStudent = () => navigate("/add-student");
  const handleDeleteStudent = () => navigate("/delete-student");

  return (
    <div className="bg-[#DAF7DC] min-h-screen animate-fade-in">
      <TutorNavbar />

      <div className="p-6">
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            className="bg-[#18425d] text-white px-6 py-2 rounded-xl hover:bg-[#132f43] transition font-semibold"
            onClick={handleAddStudent}
          >
            Add Student
          </button>
          <button
            className="bg-[#18425d] text-white px-6 py-2 rounded-xl hover:bg-[#132f43] transition font-semibold"
            onClick={handleDeleteStudent}
          >
            Delete Student
          </button>
          <button
            className="bg-[#18425d] text-white px-6 py-2 rounded-xl hover:bg-[#132f43] transition font-semibold"
            onClick={() => navigate("/mark-attendance")}
          >
            Mark Attendance
          </button>
          <button
            className="bg-[#18425d] text-white px-6 py-2 rounded-xl hover:bg-[#132f43] transition font-semibold"
            onClick={() => navigate("/all-attendance")}
          >
            All Students Attendance
          </button>
          <button
            className="bg-[#18425d] text-white px-6 py-2 rounded-xl hover:bg-[#132f43] transition font-semibold"
            onClick={() => navigate("/attendance-history")}
          >
            Attendance History
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#9EE493] text-[#18425d] text-left">
                <th className="p-4 font-semibold">ID</th>
                <th className="p-4 font-semibold">Name</th>
                <th className="p-4 font-semibold">Class</th>
                <th className="p-4 font-semibold">Attendance %</th>
                <th className="p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-gray-100 transition">
                <td className="p-4">001</td>
                <td className="p-4 flex items-center gap-2">Raheem</td>
                <td className="p-4">Class VI-A</td>
                <td className="p-4">98%</td>
                <td className="p-4 flex gap-2 text-[#18425d]">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
