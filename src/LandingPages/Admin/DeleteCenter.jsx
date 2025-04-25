import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

function DeleteCenter() {
  return (
    <div className="min-h-screen bg-[#DAF7DC] flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 fade-in">
        <h1 className="text-3xl font-bold text-[#18425d] text-center mb-6">Delete Center</h1>
        <Formik
          initialValues={{ CenterId: "" }}
          validationSchema={Yup.object({
            CenterId: Yup.string().required("CenterId is mandatory")
          })}
          onSubmit={(values) => { console.log(values) }}
        >
          <Form className="space-y-5">
            <div>
              <label htmlFor="CenterId" className="block text-sm font-medium text-[#18425d] mb-1">Center ID</label>
              <Field
                type="text"
                name="CenterId"
                id="CenterId"
                placeholder="Enter Center ID"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#9EE493] focus:outline-none transition duration-300"
              />
              <div className="text-xs text-red-500 mt-1">
                <ErrorMessage name="CenterId" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#18425d] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#133346] transition duration-300"
            >
              Delete Center
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default DeleteCenter
