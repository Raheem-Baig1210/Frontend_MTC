import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

function DeleteTutor() {
  return (
    <div className="min-h-screen bg-[#DAF7DC] flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 fade-in">
        <h1 className="text-3xl font-bold text-[#18425d] text-center mb-6">Delete Tutor</h1>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email").required("Email is mandatory")
          })}
          onSubmit={(values) => { console.log(values) }}
        >
          <Form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#18425d] mb-1">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Enter Tutor Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#9EE493] focus:outline-none transition duration-300"
              />
              <div className="text-xs text-red-500 mt-1">
                <ErrorMessage name="email" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#18425d] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#133346] transition duration-300"
            >
              Delete Tutor
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default DeleteTutor
