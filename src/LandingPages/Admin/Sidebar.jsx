import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Dashboard",   path: "/admin-dashboard" },
    { label: "Centers",     path: "/centers" },
    { label: "Tutors",      path: "/tutors" },
    { label: "Students",    path: "/students" },
    { label: "Attendance",  path: "/attendance" },
  ];

  return (
    <>
      {/* Mobile Top Nav: two rows */}
      <nav className="md:hidden bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        {/* Row 1: Title */}
        <div className="text-blue-700 font-bold text-lg mb-2">
          Admin Dashboard
        </div>

        {/* Row 2: Nav Buttons */}
        <div className="flex flex-wrap gap-2">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => navigate(item.path)}
              className="flex-1 min-w-[80px] text-center px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Desktop Sidebar: visible on md+ */}
      <aside className="hidden md:flex md:flex-col md:w-1/5 min-h-screen bg-white border-r border-gray-200 shadow-xl py-4 px-2">
        <div className="bg-blue-700 py-6 px-4 rounded-lg shadow-md mb-6 mx-2">
          <h1 className="text-white text-2xl font-bold text-center">
            Admin Dashboard
          </h1>
        </div>
        <nav className="flex flex-col space-y-3 px-2">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => navigate(item.path)}
              className="text-lg text-gray-800 font-medium bg-gray-100 hover:bg-blue-600 hover:text-white py-3 px-4 rounded-lg shadow-sm transform transition duration-300 hover:scale-[1.02] text-left"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
