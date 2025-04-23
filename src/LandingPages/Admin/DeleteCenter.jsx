import React from 'react'
import {Formik, Form,Field,ErrorMessage} from "formik"
import * as Yup from "yup"

function DeleteCenter() {
  return (
    <>
    <div className='w-[100vw] h-[100vh] bg-[#302f2f]'>
              <h1 className="block mb-5 text-4xl p-4 font-large text-gray-900 text-white text-center">Delete Center</h1>
            <Formik
              initialValues={{
                CenterId:""
              }}
              validationSchema={Yup.object({
                CenterId:Yup.string().required("CenterId is mandatory")
              })}
              onSubmit={(values) => {console.log(values)}}
            >
            <Form className="max-w-sm mx-auto">
          <div className="mb-5 ">
            <label htmlFor="CenterId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Center ID</label>
            <Field type="text" name="CenterId" id="CenterId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Center Id" required />
            <div className='text-sm text-red-500'>
              <ErrorMessage name="CenterId"/>
            </div>
          </div>
         
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete Center</button>
        </Form>
        </Formik>
        </div>
            </>
  )
}

export default DeleteCenter
