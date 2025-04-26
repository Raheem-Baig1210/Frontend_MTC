import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./TutorLogin.css"; // 👈 Add animation styles

const TutorLogin = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/tutor/login", formValues);
      navigate("/tutor-dashboard");
    } catch (error) {
      alert("Invalid Email or Password....!!!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4" style={{ backgroundColor: "#DAF7DC" }}>
      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-xl border"
        style={{
          backgroundColor: "#ffffff",
          borderColor: "#9EE493",
          animation: "fadeInUp 0.6s ease-out",
        }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: "#18425d" }}>
          Tutor Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: "#18425d" }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md focus:outline-none border transition shadow-sm hover:shadow-md"
              style={{
                backgroundColor: "#DAF7DC",
                borderColor: "#9EE493",
                color: "#18425d",
              }}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1" style={{ color: "#18425d" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={handleInputChange}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-md focus:outline-none border transition shadow-sm hover:shadow-md"
              style={{
                backgroundColor: "#DAF7DC",
                borderColor: "#9EE493",
                color: "#18425d",
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full font-semibold py-2.5 rounded-md transition duration-300"
            style={{
              backgroundColor: "#18425d",
              color: "white",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#9EE493";
              e.target.style.color = "#18425d";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#18425d";
              e.target.style.color = "white";
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TutorLogin;
