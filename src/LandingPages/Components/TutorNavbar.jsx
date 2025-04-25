import { Link, useNavigate } from "react-router-dom";

export default function TutorNavbar() {
  const navigate = useNavigate();
  const handleLogout = () => navigate('/');

  return (
    <nav className="w-full bg-[#DAF7DC] shadow p-4 flex flex-wrap justify-between items-center animate-fade-in">
      {/* Left Section: Title + Links */}
      <div className="flex items-center gap-6 flex-wrap">
        <span className="font-bold text-lg sm:text-xl text-[#18425d]">Tutor Dashboard</span>
        <div className="flex gap-4 text-[#18425d] text-sm sm:text-base">
          <Link to="/student-list" className="hover:text-black transition">
            Students
          </Link>
          <Link to="/tutor-dashboard" className="hover:text-black transition">
            Dashboard
          </Link>
        </div>
      </div>

      {/* Right Section: Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-[#18425d] text-white py-1.5 px-4 rounded-lg hover:bg-[#132f43] transition text-sm sm:text-base mt-2 sm:mt-0"
      >
        Logout
      </button>
    </nav>
  );
}
