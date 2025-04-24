import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 80) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full z-50 transition-transform duration-500 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      } sticky top-0 md:static md:block`}
    >
      <div className="bg-white shadow-md md:shadow-none h-20 px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="h-full flex items-center">
          <img
            src="https://thequranfoundation.org/wp-content/uploads/2024/02/The_Quran_Foundation_TQF_Organization_Charity_Donation_Logo.png"
            alt="Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Title - Hidden on phones */}
        <div className="hidden md:block text-sky-900 text-2xl font-bold text-center">
          Welcome to - Mohalla Tuition Center Program
        </div>

        {/* Buttons */}
        <ul className="flex gap-2 md:gap-4">
          <li>
            <button
              className="bg-green-300 text-sky-900 font-bold rounded-full py-1 px-3 md:py-2 md:px-4 hover:bg-sky-700 hover:text-white transition text-sm md:text-base"
              onClick={() => navigate("/login-admin")}
            >
              Admin
            </button>
          </li>
          <li>
            <button
              className="bg-green-300 text-sky-900 font-bold rounded-full py-1 px-3 md:py-2 md:px-4 hover:bg-sky-700 hover:text-white transition text-sm md:text-base"
              onClick={() => navigate("/login-tutor")}
            >
              Tutor
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
