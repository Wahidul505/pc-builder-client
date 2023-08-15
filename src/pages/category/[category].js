import RootLayout from "@/components/Layouts/RootLayout";
import PcPartCard from "@/components/UI/PcPartCard";
import { useRouter } from "next/router";
import React from "react";

const CategoryPage = ({ product }) => {
  const router = useRouter();
  return (
    <RootLayout>
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-3 justify-center">
          {product?.data?.map((pcPart) => (
            <PcPartCard key={pcPart._id} pcPart={pcPart} />
          ))}
        </div>
      </div>
    </RootLayout>
  );
};

export default CategoryPage;

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-server-lovat.vercel.app/api/v1/pc-part"
  );
  const products = await res.json();
  const paths = products.data.map((product) => ({
    params: { category: product.category.toString() },
  }));
  return { paths, fallback: true };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-lovat.vercel.app/api/v1/pc-part/category/${params.category}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
