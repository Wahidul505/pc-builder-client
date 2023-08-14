import Image from "next/image";
import React from "react";
import RatingStar from "./RatingStar";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToPcBuilder } from "@/redux/features/pcBuilder/pcBuilderSlice";

const ChooseCard = ({ pcPart }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleAddToPcBuilder = () => {
    dispatch(addToPcBuilder(pcPart));
    router.push("/pcBuilder");
  };
  const components = useSelector((state) => state.pcBuilder.components);
  return (
    <div className="bg-[#EFEAE6] p-2 flex justify-between items-center m-4 flex-col md:flex-row">
      <div className="flex items-center space-x-2 flex-col md:flex-row">
        <Image
          src={pcPart.image}
          alt=""
          height={200}
          width={250}
          className="w-52 h-40"
        />
        <div className="flex flex-col md:justify-between h-40">
          <div>
            <p className="text-lg md:text-xl text-gray-700 break-all">
              {pcPart.productName}
            </p>
            <span
              className={`  badge ${
                pcPart.status.toLowerCase() === "in stock"
                  ? "badge-primary"
                  : "badge-error"
              }`}
            >
              {pcPart.status}
            </span>
            <RatingStar rating={pcPart.averageRating} />
          </div>
          <div className="text-sm border border-gray-500 rounded-full w-fit px-1 my-2 text-gray-500">
            {pcPart.category}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl">{pcPart.price} $</h3>
        <button
          onClick={() => handleAddToPcBuilder()}
          className="bg-primary py-1 md:py-4 px-2 rounded w-52 md:w-full"
        >
          Add to Builder
        </button>
      </div>
    </div>
  );
};

export default ChooseCard;
