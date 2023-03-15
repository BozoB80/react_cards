import React from "react";

const Card = ({ image, title, description, ordinalNumber }) => {
  return (
    <div className="flex flex-col bg-white shadow-md h-auto sm:w-60 rounded-md cursor-pointer hover:scale-105 transition ease-in-out delay-150">
      <img
        src={image}
        alt={title}
        className="w-full h-40 sm:h-[300px] object-cover rounded-t-md"
      />
      <div className="flex flex-col justify-between items-start text-sm p-1 space-y-2">
        <h2>
          <span className="font-bold uppercase text-sm">Title: </span>
          {title}
        </h2>
        <p className="line-clamp-4">
          <span className="font-bold uppercase text-sm">Description: </span>
          {description}
        </p>
        <span>
          <span className="font-bold uppercase text-sm">Ordinal number: </span>
          {ordinalNumber}
        </span>
      </div>
    </div>
  );
};

export default Card;
