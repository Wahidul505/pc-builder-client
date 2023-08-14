import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const BuildCategory = ({ category }) => {
  const router = useRouter();
  const components = useSelector((state) => state.pcBuilder.components);
  const existComponent = components.find((comp) => comp.category === category);
  return (
    <div className="mb-3 border-b pb-3">
      <div className="flex  justify-between items-center">
        <div className="w-full">
          {existComponent ? (
            <div className="flex items-center justify-between w-full pr-6">
              <div className="flex items-center space-x-2">
                <Image
                  src={existComponent.image}
                  alt=""
                  height={100}
                  width={100}
                  className="w-12 h-12 md:w-16 md:h-16"
                />
                <div>
                  <h2 className="font-bold text-sm text-primary">
                    {category.toUpperCase()}{" "}
                    <span className="md:hidden text-gray-600">
                      ({existComponent.price} $)
                    </span>
                  </h2>
                  <p className="md:mt-2 text-gray-700 text-sm md:text-base">
                    {existComponent.productName}
                  </p>
                </div>
              </div>
              <div className="md:text-lg font-semibold hidden md:block">
                {existComponent.price} $
              </div>
            </div>
          ) : (
            <div className="text-sm md:text-base">{category.toUpperCase()}</div>
          )}
        </div>
        <button
          onClick={() => router.push(`/pcBuilder/choose/${category}`)}
          className="border-2 border-primary rounded bg-gray-200 p-1 text-sm md:text-base"
        >
          Choose
        </button>
      </div>
    </div>
  );
};

export default BuildCategory;
