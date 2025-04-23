import React from 'react'
import {Formik, Form,Field,ErrorMessage} from "formik"
import * as Yup from "yup"

function AddTutor() {
  return (
    <>
        <div className='w-[100%] h-[100%] bg-[#302f2f]'>
          <h1 className="block mb-5 text-4xl p-4 font-large text-gray-900 text-white text-center">Add A New Tutor</h1>
        <Formik
          initialValues={{
            name:"",
            email:"",
            password:"",
            specialization:"",
            number:"",
            experience:"",
            center:"",
            resume:""
          }}
          validationSchema={Yup.object({
            name:Yup.string().required("Name is mandatory"),
            email:Yup.string().email("Invalid email").required("Email is mandatory"),
            password:Yup.string().required("Password is mandatory"),
            specialization:Yup.string().required("Specialization is mandatory"),
            number:Yup.string().matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, "Enter a valid phone number").required("Contact number is mandatory"),
            experience:Yup.string().required("Experience is mandatory"),
            center:Yup.string().required("Center is mandatory"),
            resume:Yup.string().required("Upload Your Resume")
          })}
          onSubmit={(values) => {console.log(values)}}
        >
        <Form className="max-w-sm mx-auto">
      <div className="mb-5 ">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
        <Field type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Full Name" required />
        <div className='text-sm text-red-500'>
          <ErrorMessage name="name"/>
        </div>
      </div>
      <div className="mb-5 ">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email" required />
        <div className='text-sm text-red-500'>
          <ErrorMessage name='email'/>
        </div>
      </div>
      <div className="mb-5 ">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <Field type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password" required />
        <div className='text-sm text-red-500'>
          <ErrorMessage name='password'/>
        </div>
      </div>
      <div className="mb-5 ">
        <label htmlFor="specialization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Specialization</label>
        <Field type="text" name="specialization" id="specialization" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter specialization" required />
        <div className='text-sm text-red-500'>
          <ErrorMessage name='specialization'/>
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
        <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
        <Field type="number" name="experience" id="experience" accept=".jpg" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Experience in Years" required />
        <div className='text-sm text-red-500'>
          <ErrorMessage name='experience'/>
        </div>
      </div>
      <div className="mb-5 ">
        <label htmlFor="center" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Center Assigned</label>
        <Field type="text" name="center" id="center" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Center ID" required />
        <div className='text-sm text-red-500'>
          <ErrorMessage name='center'/>
        </div>
      </div>
      <div className="mb-5 ">
        <label htmlFor="resume" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resume</label>
        <Field type="file" name="resume" id="resume" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Upload Resume" required />
        <div className='text-sm text-red-500'>
          <ErrorMessage name='resume'/>
        </div>
      </div>

      
      
      
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Tutor</button>
    </Form>
    </Formik>
    </div>
        </>
  )
}

export default AddTutor
