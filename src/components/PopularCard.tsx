import React from "react";

type GamesCardProps = {
  name: string;
  price: string;
  imageUrl: string;
};

const GamesCard: React.FC<GamesCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div className="relative 2xl:w-60 2xl:h-80 xl:w-36 xl:h-48 rounded-4xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-rotate-4 hover:scale-104">
      <img
        src={imageUrl}
        alt={name}
        className="absolute 2xl:rounded-4xl xl:rounded-2xl opacity-30 transition delay-100 duration-300 ease-in-out hover:opacity-70"
      ></img>
      <h2 className="absolute font-[poppins] font-bold 2xl:text-lg xl:text-xs 2xl:bottom-20 2xl:pl-7 2xl:pr-7 xl:bottom-12 xl:pl-4 xl:pr-2">
        {name}
      </h2>
      <div className="absolute flex flex-row gap-2 items-center 2xl:bottom-12 2xl:pl-7 2xl:pr-7 xl:bottom-7 xl:pl-4 xl:pr-2">
        <h2 className="font-[poppins] font-medium 2xl:text-lg xl:text-xs">
          {price}
        </h2>
        <i className="pi pi-plus-circle 2xl:text-1xl xl:text-xs"></i>
      </div>
    </div>
  );
};

export default GamesCard;
