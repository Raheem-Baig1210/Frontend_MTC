import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddCenter() {
  return (
    <div className="min-h-screen bg-[#DAF7DC] flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#18425d] mb-8 text-center">
        Add A New Center
      </h1>

      <Formik
        initialValues={{
          name: "",
          code: "",
          address: "",
          city: "",
          number: "",
          images: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Please enter the name"),
          code: Yup.string().required("Please enter the code"),
          address: Yup.string().required("Please enter the address"),
          city: Yup.string().required("Please enter the city"),
          number: Yup.string()
            .matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, "Enter a valid phone number")
            .required("Please enter the contact number"),
          images: Yup.string().required("Please add the images"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 w-full max-w-md space-y-4">
            {/* Field: Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-1 font-medium text-[#18425d]"
              >
                Name
              </label>
              <Field
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18425d]"
                placeholder="Enter Name"
              />
              <div className="text-sm text-red-500 mt-1">
                <ErrorMessage name="name" />
              </div>
            </div>

            {/* Field: Code */}
            <div>
              <label
                htmlFor="code"
                className="block mb-1 font-medium text-[#18425d]"
              >
                Code
              </label>
              <Field
                type="text"
                name="code"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18425d]"
                placeholder="Enter Code"
              />
              <div className="text-sm text-red-500 mt-1">
                <ErrorMessage name="code" />
              </div>
            </div>

            {/* Field: Address */}
            <div>
              <label
                htmlFor="address"
                className="block mb-1 font-medium text-[#18425d]"
              >
                Address
              </label>
              <Field
                type="text"
                name="address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18425d]"
                placeholder="Enter Address"
              />
              <div className="text-sm text-red-500 mt-1">
                <ErrorMessage name="address" />
              </div>
            </div>

            {/* Field: City */}
            <div>
              <label
                htmlFor="city"
                className="block mb-1 font-medium text-[#18425d]"
              >
                City
              </label>
              <Field
                type="text"
                name="city"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18425d]"
                placeholder="Enter City"
              />
              <div className="text-sm text-red-500 mt-1">
                <ErrorMessage name="city" />
              </div>
            </div>

            {/* Field: Contact Number */}
            <div>
              <label
                htmlFor="number"
                className="block mb-1 font-medium text-[#18425d]"
              >
                Contact Number
              </label>
              <Field
                type="tel"
                name="number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18425d]"
                placeholder="Enter Number"
              />
              <div className="text-sm text-red-500 mt-1">
                <ErrorMessage name="number" />
              </div>
            </div>

            {/* Field: Images */}
            <div>
              <label
                htmlFor="images"
                className="block mb-1 font-medium text-[#18425d]"
              >
                Upload Images
              </label>
              <input
                type="file"
                name="images"
                accept=".jpg"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#18425d]"
                multiple
                onChange={(event) =>
                  setFieldValue("images", event.currentTarget.files[0]?.name)
                }
              />
              <div className="text-sm text-red-500 mt-1">
                <ErrorMessage name="images" />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#18425d] hover:bg-[#9EE493] hover:text-[#18425d] text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300"
            >
              Add Center
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddCenter;
