import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import TutorNavbar from '../Components/TutorNavbar'

function DeleteStudent() {
  return (
    <>
      <TutorNavbar />
      <div className="w-full min-h-screen bg-[#DAF7DC] flex flex-col items-center py-10 animate-fade-in">
        <h1 className="text-4xl font-bold text-[#18425d] mb-8 text-center">Delete Student</h1>

        <Formik
          initialValues={{
            StudentId: ""
          }}
          validationSchema={Yup.object({
            StudentId: Yup.string().required("StudentId is mandatory"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
            <div className="mb-6">
              <label htmlFor="StudentId" className="block mb-2 text-sm font-medium text-[#18425d]">Student ID</label>
              <Field
                type="text"
                name="StudentId"
                id="StudentId"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#9EE493] focus:border-[#9EE493] block w-full p-3"
                placeholder="Enter Student ID"
              />
              <div className="text-sm text-red-500 mt-1">
                <ErrorMessage name="StudentId" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#18425d] hover:bg-[#132f43] text-white font-semibold py-3 rounded-xl transition"
            >
              Delete Student
            </button>
          </Form>
        </Formik>
      </div>
    </>
  )
}

export default DeleteStudent
