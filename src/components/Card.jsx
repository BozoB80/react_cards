import React from "react";

const Card = ({ image, title, description, ordinalNumber }) => {
  return (
    <div className="flex flex-col bg-white shadow-md h-auto rounded-md cursor-pointer hover:scale-105 transition ease-in-out delay-150">
      <img
        src={image}
        alt={title}
        className="w-full h-[114px] md:h-[236px] xl:h-[250px] object-cover rounded-t-md"
      />
      <div className="flex flex-col justify-between items-start text-xs sm:text-sm p-1 sm:space-y-2">
        <h2>
          <span className="font-bold uppercase text-xs sm:text-sm">Title: </span>
          {title}
        </h2>
        <p className="line-clamp-3 sm:line-clamp-4">
          <span className="font-bold uppercase text-xs sm:text-sm">Description: </span>
          {description}
        </p>
        <span>
          <span className="font-bold uppercase text-xs sm:text-sm">Ordinal number: </span>
          {ordinalNumber}
        </span>
      </div>
    </div>
  );
};

export default Card;
