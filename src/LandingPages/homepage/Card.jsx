import React from "react";

const Card = ({ title, image }) => {
  return (
    <div className="w-64 h-80 bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-4">
      <img src={image} alt={title} className="w-20 h-20 mb-4" />
      <h4 className="text-lg font-bold text-center">{title}</h4>
    </div>
  );
};

export default Card;
