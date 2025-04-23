import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()

  const handleAdminLogin  = () => {
    navigate('/login-admin')
}

const handleTutorLogin  = () => {
  navigate('/login-tutor')
}

  return (
    <div className="bg-charcoal text-white py-4 px-6 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold">Welcome to - Mohalla Tuition Center Program</div>
      <ul className="flex gap-6">
        <li>
          <button
            className="hover:-black-300 bg-light-green bg-red-500 text-white font-bold rounded-full py-2 px-4" onClick={handleAdminLogin}
          >
            Admin
          </button>
        </li>
        <li>
          <button
            className="hover:text-black-300 bg-red-500 text-white  font-bold rounded-full py-2 px-4"  onClick={handleTutorLogin}
          >
            Tutor
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
