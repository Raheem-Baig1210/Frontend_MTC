import React from "react";
import Card from "./Card"; // Check path

const CardsContainer = () => {
  const cards = [
    { title: "Social Development", image: "https://thequranfoundation.org/wp-content/uploads/2020/06/icon-1.png" },
    { title: "Educational Development", image: "https://thequranfoundation.org/wp-content/uploads/2020/06/icon-2.png" },
    { title: "Economic Development", image: "https://thequranfoundation.org/wp-content/uploads/2020/06/icon-3.png" },
    { title: "Health and Wellness", image: "https://thequranfoundation.org/wp-content/uploads/2020/06/icon-4.png" }
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsContainer;
