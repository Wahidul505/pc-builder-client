import Image from "next/image";
import React from "react";
import RatingStar from "./RatingStar";
import { useRouter } from "next/router";

const PcPartCard = ({ pcPart }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/productDetails/${pcPart._id}`)}
      className="flex flex-col bg-[#EFEAE6] p-2 shadow-xl relative items-center m-4 cursor-pointer hover:scale-105 transition-transform duration-150"
    >
      <Image
        src={pcPart.image}
        alt=""
        height={200}
        width={250}
        className="w-80 h-64"
      />
      <span
        className={` absolute top-0 right-0 badge ${
          pcPart.status.toLowerCase() === "in stock"
            ? "badge-primary"
            : "badge-error"
        }`}
      >
        {pcPart.status}
      </span>
      <div className="md:w-72">
        <p className="text-lg md:text-xl text-gray-700 break-all">
          {pcPart.productName}
        </p>
        <div className="text-sm border border-gray-500 rounded-full w-fit px-1 my-2 text-gray-500">
          {pcPart.category}
        </div>
        <p className="text-[#EF715A]">{pcPart.price} $</p>
        <RatingStar rating={pcPart.averageRating} />
      </div>
    </div>
  );
};

export default PcPartCard;
