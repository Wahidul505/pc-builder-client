import RootLayout from "@/components/Layouts/RootLayout";
import ChooseCard from "@/components/UI/ChooseCard";
import { useRouter } from "next/router";
import React from "react";

const ChooseCategory = ({ product }) => {
  const router = useRouter();
  return (
    <RootLayout>
      <div className="mt-6">
        <h1 className="text-3xl font-semibold mb-3 text-center">
          {router.query.chooseCategory.toUpperCase()}
        </h1>
        <div>
          {product?.data?.map((pcPart) => (
            <ChooseCard key={pcPart._id} pcPart={pcPart} />
          ))}
        </div>
      </div>
    </RootLayout>
  );
};

export default ChooseCategory;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-lovat.vercel.app/api/v1/pc-part/category/${params.chooseCategory}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
