import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddTutor() {
  return (
    <div className="min-h-screen bg-[#DAF7DC] px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 fade-in">
        <h1 className="text-3xl font-bold text-center text-[#18425d] mb-6">Add A New Tutor</h1>
        <Formik
          initialValues={{
            name: "", email: "", password: "",
            specialization: "", number: "",
            experience: "", center: "", resume: ""
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is mandatory"),
            email: Yup.string().email("Invalid email").required("Email is mandatory"),
            password: Yup.string().required("Password is mandatory"),
            specialization: Yup.string().required("Specialization is mandatory"),
            number: Yup.string().matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, "Enter a valid phone number").required("Contact number is mandatory"),
            experience: Yup.string().required("Experience is mandatory"),
            center: Yup.string().required("Center is mandatory"),
            resume: Yup.string().required("Upload Your Resume")
          })}
          onSubmit={(values) => console.log(values)}
        >
          <Form className="space-y-5">
            {[
              { label: "Full Name", name: "name", type: "text", placeholder: "Enter Full Name" },
              { label: "Email", name: "email", type: "email", placeholder: "Enter Email" },
              { label: "Password", name: "password", type: "password", placeholder: "Enter Password" },
              { label: "Specialization", name: "specialization", type: "text", placeholder: "e.g., Math, Physics" },
              { label: "Contact Number", name: "number", type: "tel", placeholder: "Enter Contact Number" },
              { label: "Experience (Years)", name: "experience", type: "number", placeholder: "e.g., 3" },
              { label: "Center Assigned", name: "center", type: "text", placeholder: "Enter Center ID" },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name}>
                <label htmlFor={name} className="block text-sm font-medium text-[#18425d] mb-1">{label}</label>
                <Field
                  type={type}
                  name={name}
                  id={name}
                  placeholder={placeholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9EE493] focus:outline-none text-sm transition duration-300 ease-in-out"
                />
                <div className="text-xs text-red-500 mt-1">
                  <ErrorMessage name={name} />
                </div>
              </div>
            ))}

            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-[#18425d] mb-1">Upload Resume</label>
              <Field
                type="file"
                name="resume"
                id="resume"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-[#9EE493] file:text-[#18425d] hover:file:bg-[#82d27c] transition"
              />
              <div className="text-xs text-red-500 mt-1">
                <ErrorMessage name="resume" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#18425d] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#133346] transition duration-300"
            >
              Add Tutor
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default AddTutor;
