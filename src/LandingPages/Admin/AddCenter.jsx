import React from 'react'
import {Formik, Form,Field,ErrorMessage} from "formik"
import * as Yup from "yup"
// import axios from 'axios'

function AddCenter() {
  return (
    <>
    <div className='w-[100vw] h-[100vh] bg-[#302f2f]'>
      <h1 className="block mb-5 text-4xl p-4 font-large text-gray-900 text-white text-center">Add A New Center</h1>
    <Formik
      initialValues={{
        name:"",
        code:"",
        address:"",
        city:"",
        number:"",
        images:""
      }}
      validationSchema={Yup.object({
        name:Yup.string().required("Please enter the name"),
        code:Yup.string().required("Please enter the code"),
        address:Yup.string().required("Please enter the address"),
        city:Yup.string().required("Please enter the city"),
        number:Yup.string().matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, "Enter a valid phone number").required("Please enter the contact number"),
        images:Yup.string().required("Please add the images"),
      })}
      onSubmit={(values) => {console.log(values)}}
    >
    <Form className="max-w-sm mx-auto">
  <div className="mb-5 ">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <Field type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Name" required />
    <div className='text-sm text-red-500'>
      <ErrorMessage name="name"/>
    </div>
  </div>
  <div className="mb-5 ">
    <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code</label>
    <Field type="text" name="code" id="code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Code" required />
    <div className='text-sm text-red-500'>
      <ErrorMessage name='code'/>
    </div>
  </div>
  <div className="mb-5 ">
    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
    <Field type="text" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Address" required />
    <div className='text-sm text-red-500'>
      <ErrorMessage name='address'/>
    </div>
  </div>
  <div className="mb-5 ">
    <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
    <Field type="text" name="city" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter City" required />
    <div className='text-sm text-red-500'>
      <ErrorMessage name='city'/>
    </div>
  </div>
  <div className="mb-5 ">
    <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
    <Field type="tel" name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Number" required />
    <div className='text-sm text-red-500'>
      <ErrorMessage name='number'/>
    </div>
  </div>
  <div className="mb-5 ">
    <label htmlFor="images" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Images</label>
    <Field type="file" name="images" id="images" accept=".jpg" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Upload .jpg Files Only" multiple required />
    <div className='text-sm text-red-500'>
      <ErrorMessage name='images'/>
    </div>
  </div>
  
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Center</button>
</Form>
</Formik>
</div>
    </>
  )
}

export default AddCenter
