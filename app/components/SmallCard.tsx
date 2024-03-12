import React from "react";
import { ExploreItem } from "./types/app";
import Image from "next/image";

type SmallCardProps = ExploreItem;
const SmallCard = ({ location, distance, img }: SmallCardProps) => {
  return (
    <div className="flex items-center  m-2 mt-5 space-x-4 cursor-poiner
    hover:bg-gray-200 transition-all rounded-md duration-500 ease-in-out hover:shadow-md">
      <div className="relative w-16 h-16">
        <Image src={img} alt="img-card" className="rounded-md" fill/>
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-400">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
