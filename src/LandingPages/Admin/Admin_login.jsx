import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
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
      const response = await axios.post('http://localhost:5001/admin/login', formValues);
      navigate("/admin-dashboard");
    } catch (error) {
      alert("Invalid Email or Password....!!!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-nyanza px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border border-car-blue">
        <h1 className="text-3xl font-bold text-charcoal mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="email" className="block text-base font-medium text-charcoal mb-2">
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
              className="w-full px-4 py-2 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-med-blue"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-base font-medium text-charcoal mb-2">
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
              className="w-full px-4 py-2 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-med-blue"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-med-blue hover:bg-med-blue text-white font-semibold py-2.5 rounded-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
