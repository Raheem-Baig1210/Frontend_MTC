import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Dashboard", path: "/admin-dashboard" },
    { label: "Centers", path: "/centers" },
    { label: "Tutors", path: "/tutors" },
    { label: "Students", path: "/students" },
    { label: "Attendance", path: "/attendance" },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      {/* Mobile Top Nav */}
      <nav className="md:hidden bg-white border-b border-gray-200 px-4 py-3 shadow-sm space-y-2">
        {/* Row 1: Title + Logout (flex wrap if needed) */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="text-[#18425d] font-bold text-lg">Admin Dashboard</div>
          <button
            onClick={handleLogout}
            className="text-white bg-[#18425d] hover:bg-[#9EE493] hover:text-[#18425d] px-4 py-1.5 rounded-md shadow transition"
          >
            Logout
          </button>
        </div>

        {/* Row 2: Nav Buttons */}
        <div className="flex flex-wrap gap-2 justify-center">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => navigate(item.path)}
              className="px-3 py-1 text-sm font-medium text-[#18425d] bg-[#9EE493] rounded-md hover:bg-[#18425d] hover:text-white transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col justify-between w-1/5 min-h-screen bg-white border-r border-gray-200 shadow-md py-6 px-4">
        <div>
          <div className="bg-[#9EE493] py-5 px-4 rounded-lg shadow-md mb-6">
            <h1 className="text-[#18425d] text-2xl font-bold text-center">Admin Dashboard</h1>
          </div>
          <nav className="flex flex-col space-y-3">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => navigate(item.path)}
                className="text-base text-[#18425d] font-medium bg-[#DAF7DC] hover:bg-[#18425d] hover:text-white py-3 px-4 rounded-md shadow-sm transition duration-300 text-left"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-8 bg-[#18425d] hover:bg-[#9EE493] hover:text-[#18425d] text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300"
        >
          Logout
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
