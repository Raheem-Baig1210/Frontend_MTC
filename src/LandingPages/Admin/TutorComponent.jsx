import React from "react";
import {
  Mail, Phone, UserCheck, Download, FileText, BookOpenText
} from "lucide-react";

const TutorComponent = () => {
  return (
    <div className="w-full px-6 py-8 bg-[#DAF7DC] min-h-screen fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-[#18425d]">Tutor Profile</h2>
          <button className="bg-[#18425d] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#133346] transition duration-300 shadow">
            <FileText className="w-4 h-4" /> Edit Profile
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          {/* Profile Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM="
                alt="Tutor"
                className="w-16 h-16 rounded-full shadow"
              />
              <div>
                <h3 className="text-xl font-bold text-[#18425d]">Abdul-Rahman</h3>
                <div className="text-sm text-gray-600 flex flex-col sm:flex-row gap-2 mt-1">
                  <span className="flex items-center gap-1">
                    <Mail className="w-4 h-4" /> abdulrahman@gmail.com
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-4 h-4" /> +91 73895 82346
                  </span>
                </div>
              </div>
            </div>
            <span className="bg-[#9EE493] text-[#18425d] px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-sm">
              <UserCheck className="w-4 h-4" /> Active
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            {[
              { label: "Total Classes", value: 312 },
              { label: "Students", value: 52 },
              { label: "Hours Taught", value: 418 },
              { label: "Attendance", value: "95%" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f0fdf4] p-4 rounded-xl text-center shadow-sm border border-[#9EE493]"
              >
                <p className="text-sm text-[#18425d]">{item.label}</p>
                <p className="text-xl font-bold text-[#18425d]">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Info Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Teaching Info */}
            <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
              <h4 className="font-semibold text-[#18425d] mb-2">Teaching Information</h4>
              <div className="mb-3">
                <p className="text-sm text-gray-600">Subjects</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Chemistry", "Biology", "Mathematics"].map((subj) => (
                    <span
                      key={subj}
                      className="bg-[#9EE493] text-[#18425d] px-3 py-1 rounded-full text-sm font-medium shadow-sm"
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
                    className="bg-[#9EE493] text-[#18425d] px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Qualifications */}
            <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
              <h4 className="font-semibold text-[#18425d] mb-2">Qualifications</h4>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li>10th</li>
                <li>B.Sc in Biology</li>
                <li>Certified Science Educator</li>
              </ul>
            </div>

            {/* Weekly Schedule */}
            <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
              <h4 className="font-semibold text-[#18425d] mb-2">Weekly Schedule</h4>
              <div className="text-sm text-gray-700 space-y-1">
                {[
                  ["Monday", "9:00 AM - 1:00 PM"],
                  ["Tuesday", "10:00 AM - 2:00 PM"],
                  ["Thursday", "8:00 AM - 12:00 PM"]
                ].map(([day, time], i) => (
                  <div key={i} className="flex justify-between">
                    <span>{day}</span>
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
              <h4 className="font-semibold text-[#18425d] mb-2">Documents</h4>
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
                  className="flex justify-between items-center bg-[#f6f6f6] px-3 py-2 rounded-lg mb-2 hover:bg-[#e9e9e9] transition"
                >
                  <div className="flex items-center gap-2 text-sm text-[#18425d]">
                    {doc.icon} <span>{doc.name}</span>
                  </div>
                  <Download className="w-4 h-4 cursor-pointer hover:text-black text-[#18425d]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorComponent;
