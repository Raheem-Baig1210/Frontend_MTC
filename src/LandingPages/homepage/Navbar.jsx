import React from "react";

const Navbar = () => {
  return (
    <div className="mb:1000 bg-charcoal text-white py-4 px-6 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold">Welcome to - Mohalla Tuition Center Program</div>
      <ul className="flex gap-6">
        <li>
          <button
            className="hover:text-gray-300 bg-light-green text-black font-bold rounded-full py-2 px-4"
          >
            Admin
          </button>
        </li>
        <li>
          <button
            className="hover:text-gray-300 bg-light-green text-black  font-bold rounded-full py-2 px-4"
          >
            Tutor
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
