import React from "react";
import Card from "./Card";
import { cardsData } from "../utils/cardsData";

const CardList = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-3 mx-auto p-2 md:p-5">
      {cardsData.map((card) => (
        <Card
          key={card.title}
          image={card.image}
          title={card.title}
          description={card.description}
          ordinalNumber={card.ordinalNumber}
        />
      ))}
    </div>
  );
};

export default CardList;
