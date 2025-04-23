import React from "react";
import Sidebar from "./Sidebar";
import TutorComponent from "./TutorComponent";


const TutorProfile = () => {
  return (
    <div className="flex">
      <Sidebar />
      <TutorComponent/>
    </div>
  );
};
export default TutorProfile;
