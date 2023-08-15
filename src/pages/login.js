import RootLayout from "@/components/Layouts/RootLayout";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <RootLayout>
      <div className="flex justify-center md:h-screen w-full pt-8 md:pt-12">
        <div className="w-11/12 h-5/6 md:w-1/2 md:h-1/2 bg-primary bg-opacity-70 flex flex-col items-center py-8 rounded">
          <h1 className="font-bold text-xl md:text-4xl mb-10">
            Login to PC TANK
          </h1>
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://pc-tank-wahidul505.vercel.app/",
              })
            }
            className="border-2 border-white p-1 flex items-center md:w-80 justify-center text-lg rounded-full mb-3"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </RootLayout>
  );
};

export default LoginPage;
