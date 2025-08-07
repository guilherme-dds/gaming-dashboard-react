import React from "react";

type RecentlyCardProps = {
  imageUrl: string;
  name: string;
  timePlayed: number;
};

const RecentlyCard: React.FC<RecentlyCardProps> = ({
  imageUrl,
  name,
  timePlayed,
}) => {
  return (
    <div className="2xl:w-140 2xl:h-19 xl:w-90 xl:h-12 bg-[#00453F] rounded-2xl">
      <div className="flex flex-row justify-between items-center pl-4 pr-7 2xl:pt-1 xl:pt-0.5">
        <div className="flex flex-row items-center gap-4 pt-1">
          <img
            src={imageUrl}
            className="2xl:h-15 xl:h-9 2xl:rounded-xl xl:rounded-md"
          ></img>
          <p className="font-[poppins] font-medium 2xl:text-base xl:text-xs">
            {name}
          </p>
        </div>
        <h1 className="font-[poppins] font-bold 2xl:text-base xl:text-sm">
          {timePlayed} horas
        </h1>
      </div>
    </div>
  );
};

export default RecentlyCard;
