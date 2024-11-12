import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useOutletContext } from "@remix-run/react";
interface ContextType {
  isIntroDone: boolean;
}
const HeroSection: React.FC = () => {
  const { isIntroDone } = useOutletContext<ContextType>();
  return (
    <div className="flex py-10 flex-col-reverse gap-8 md:flex-row items-center justify-between w-full md:py-0">
      {/* Text Section */}
      <div className="w-full text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold">
          Hi, my name is Priyanshu Gupta
        </h1>
        <p className="mt-4 text-base md:text-xl text-zinc-600">
          I’m a passionate software developer with expertise in building
          responsive web applications. I enjoy turning complex problems into
          simple, beautiful, and intuitive designs. Let&apos;s work together to
          create something amazing!
        </p>
        {/* Know More Button */}
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
          key={isIntroDone ? 1 : 0}
        />
      </div>
    </div>
  );
};

export default HeroSection;
