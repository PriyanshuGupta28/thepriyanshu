import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HeroSection: React.FC = () => {
  return (
    <div className="flex py-10 flex-col-reverse gap-8 md:flex-row items-center justify-between w-full md:py-0">
      {/* Text Section */}
      <div className="w-full text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold">
          Hi, my name is Priyanshu Gupta
        </h1>
      </div>

      {/* Lottie Animation */}
      <div className="w-full">
        <DotLottieReact
          src={
            "https://lottie.host/fbeb6c21-aa1e-4e9d-bfcf-d94393c68fe8/XIcJg8n5io.lottie"
          }
          className="w-full h-auto md:h-[500px]"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default HeroSection;
