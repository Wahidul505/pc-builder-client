import RootLayout from "@/components/Layouts/RootLayout";
import RatingStar from "@/components/UI/RatingStar";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ProductDetailsPage = ({ product }) => {
  return (
    <RootLayout>
      <div className="p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          <div>
            <Image
              className="lg:w-96"
              src={product?.data?.image}
              alt=""
              width={300}
              height={300}
            />
          </div>
          <div className="">
            <div className="shadow-2xl p-3 rounded-lg">
              <h1 className="text-3xl text-gray-700">
                {product?.data?.productName}
              </h1>
              <div className="md:flex mt-3 space-y-2 md:space-y-0 md:space-x-2">
                <div className="bg-gray-300 rounded-xl px-2 text-sm flex items-center justify-center">
                  Price:{" "}
                  <span className="font-semibold"> {product?.data?.price}</span>
                </div>
                <div className="bg-gray-300 rounded-xl px-2 text-sm flex items-center justify-center">
                  Category:{" "}
                  <span className="font-semibold">
                    {product?.data?.category}
                  </span>
                </div>
                <div className="bg-gray-300 rounded-xl px-2 text-sm flex items-center justify-center">
                  Status:{" "}
                  <span className="font-semibold">{product?.data?.status}</span>
                </div>
              </div>
              <div className="mt-4">
                <h1 className="text-xl font-semibold">Key Features:</h1>
                <div>
                  {product?.data?.keyFeatures?.map((feature, index) => (
                    <div key={index} className="text-gray-700">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3">
          <h1 className="text-xl font-semibold">Description:</h1>
          <p>{product?.data?.description}</p>
        </div>
        <div className="my-3">
          {product?.data?.individualRating && (
            <div className="">
              <h2 className="text-xl font-semibold">Individual Rating:</h2>
              <RatingStar rating={product?.data?.individualRating} />
            </div>
          )}
        </div>
        <div className="my-3">
          {product?.data?.averageRating && (
            <div className="">
              <h2 className="text-xl font-semibold">Average Rating:</h2>
              <RatingStar rating={product?.data?.averageRating} />
            </div>
          )}
        </div>
        <div className="my-3">
          <h1 className="text-xl font-semibold">Reviews:</h1>
          <div>
            {product?.data?.reviews &&
              product?.data?.reviews?.map((review, index) => (
                <div key={index} className="chat chat-start">
                  <div className="chat-bubble bg-gray-300 text-black">
                    {review}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default ProductDetailsPage;

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-server-lovat.vercel.app/api/v1/pc-part"
  );
  const products = await res.json();
  const paths = products.data.map((product) => ({
    params: { productId: product._id.toString() },
  }));
  return { paths, fallback: true };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-lovat.vercel.app/api/v1/pc-part/${params.productId}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
