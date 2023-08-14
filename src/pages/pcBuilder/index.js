import RootLayout from "@/components/Layouts/RootLayout";
import BuildCategory from "@/components/UI/BuildCategory";
import React from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const PcBuilderPage = () => {
  const components = useSelector((state) => state.pcBuilder.components);
  const handleCompleteBuild = () => {
    toast.success("You completed building your PC");
  };
  return (
    <RootLayout>
      <div className="lg:p-16 md:p-4">
        <div className="bg-white p-3">
          <BuildCategory category={"cpu"}></BuildCategory>
          <BuildCategory category={"ram"}></BuildCategory>
          <BuildCategory category={"monitor"}></BuildCategory>
          <BuildCategory category={"motherboard"}></BuildCategory>
          <BuildCategory category={"power-supply-unit"}></BuildCategory>
          <BuildCategory category={"storage-device"}></BuildCategory>
        </div>
        <div className="w-full flex justify-end pr-2 md:pr-0">
          {" "}
          {components.length > 4 && (
            <button
              onClick={() => handleCompleteBuild()}
              className="bg-[#EF715A] text-white p-2 md:text-lg rounded"
            >
              Complete Build
            </button>
          )}
        </div>
      </div>
    </RootLayout>
  );
};

export default PcBuilderPage;
