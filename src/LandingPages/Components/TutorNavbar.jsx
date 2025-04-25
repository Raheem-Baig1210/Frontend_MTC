import { Link } from "react-router-dom";

export default function TutorNavbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-lg font-semibold">Student Management</div>
      <div className="flex  gap-6">
        <Link to="/student-list" className="hover:underline">Students</Link>
        <Link to="/tutor-dashboard" className="hover:underline">Dashboard</Link>
      </div>
      <div>
    <button className="bg-blue-600 text-white text-lg py-1 px-2 rounded hover:bg-blue-700 transition duration-300">Logout</button>
      </div>
    </nav>
  );
}