import React from "react";
import {
    Mail,
    Phone,
    UserCheck,
    Download,
    FileText,
    BookOpenText
  } from "lucide-react";
const TutorComponent = () => {
return(
    <div className="w-4/5 p-6 bg-gray-50 min-h-screen">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Tutor Profile</h2>
          <button className="text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 cursor-pointer" style={{ backgroundColor: "#336699" }}>
            <FileText className="w-4 h-4" /> Edit Profile
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM="
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">Abdul-Rahman</h3>
                <div className="text-sm text-gray-600 flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Mail className="w-4 h-4" /> abdulrahman@gmail.com
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-4 h-4" /> +91 73895 82346
                  </span>
                </div>
              </div>
            </div>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <UserCheck className="w-4 h-4" /> Active
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 my-6">
            {[
              { label: "Total Classes", value: 312 },
              { label: "Students", value: 52 },
              { label: "Hours Taught", value: 418 },
              { label: "Attendance", value:"95%"}
            ].map((item, i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="text-gray-500 text-sm">{item.label}</p>
                <p className="text-xl font-bold">
                  {item.value}
                  {item.icon || null}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Teaching Information</h4>
              <div className="mb-2">
                <p className="text-sm text-gray-600">Subjects</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Chemistry", "Biology", "Mathematics"].map((subj) => (
                    <span
                      key={subj}
                      className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">Centers</p>
              <div className="flex gap-2 mt-1">
                {["Center X", "Center Y"].map((c) => (
                  <span
                    key={c}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white border p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Qualifications</h4>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>1oth </li>
                <li>B.sc in Biology</li>
                <li>Certified Science Educator</li>
              </ul>
            </div>
            <div className="bg-white border p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Weekly Schedule</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span>9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuesday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Thursday</span>
                  <span>8:00 AM - 12:00 PM</span>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white border p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Documents</h4>
              {[
                {
                  name: "CV_Abdul Rahman.pdf",
                  icon: <FileText className="w-4 h-4 text-red-500" />,
                },
                {
                  name: "Degree_Cert.doc",
                  icon: <BookOpenText className="w-4 h-4 text-blue-500" />,
                },
              ].map((doc, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg mb-2"
                >
                  <div className="flex items-center gap-2 text-sm">
                    {doc.icon} <span>{doc.name}</span>
                  </div>
                  <Download className="w-4 h-4 cursor-pointer text-gray-600 hover:text-black" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
)
}
export default TutorComponent;