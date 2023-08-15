import RootLayout from "@/components/Layouts/RootLayout";
import PcPartCard from "@/components/UI/PcPartCard";
import Image from "next/image";
import React from "react";

const src = "https://i.ibb.co/R4X1zNT/8106268-removebg-preview.png";

const HomePage = ({ data }) => {
  return (
    <RootLayout>
      <div>
        <div className="hero min-h-screen bg-base-200 px-6 z-0">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              loader={() => src}
              src={src}
              alt=""
              width={500}
              height={500}
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <p className="my-8 text-3xl text-gray-600 text-center">
          Featured Products
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-3 justify-center">
          {data.data.map((pcPart) => (
            <PcPartCard key={pcPart._id} pcPart={pcPart} />
          ))}
        </div>
      </div>
    </RootLayout>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-lovat.vercel.app/api/v1/pc-part"
  );
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};
