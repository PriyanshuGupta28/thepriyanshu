import { useGSAP } from "@gsap/react";
import type { MetaFunction } from "@remix-run/node";
// eslint-disable-next-line import/no-named-as-default
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useOutletContext } from "@remix-run/react";
import Timeline from "~/components/Timeline";
import HeroSection from "~/components/HeroSection";
import Skills from "~/components/Skills";

// Define the context type
interface ContextType {
  isIntroDone: boolean;
  setIsIntroDone: (value: boolean) => void;
}

export const meta: MetaFunction = () => {
  return [
    { title: "The Priyanshu" },
    { name: "description", content: "Welcome to The Priyanshu!" },
  ];
};

export default function Index() {
  const comp = useRef(null);

  const { setIsIntroDone, isIntroDone } = useOutletContext<ContextType>();

  useEffect(() => {
    const isIntroLoaded = sessionStorage.getItem("isIntroLoaded");
    console.log(isIntroDone, "isIntroDoneIndex");
    if (isIntroLoaded) {
      // Skip the intro
      setIsIntroDone(true);
    } else {
      // Show the intro
      setIsIntroDone(false);
    }
  }, [isIntroDone]);

  const handleStates = () => {
    setIsIntroDone(true);
    sessionStorage.setItem("isIntroLoaded", "1");
  };

  useGSAP(() => {
    const isIntroLoaded = sessionStorage.getItem("isIntroLoaded");

    if (!isIntroLoaded) {
      const ctx = gsap.context(() => {
        const t1 = gsap.timeline({
          onComplete: () => {
            handleStates();
          },
        });
        t1.from("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
          delay: 0.3,
        })
          .from(["#title-1", "#title-2", "#title-3"], {
            opacity: 0,
            y: "+=30",
            stagger: 0.5,
          })
          .to(["#title-1", "#title-2", "#title-3"], {
            opacity: 0,
            y: "-=30",
            delay: 0.3,
            stagger: 0.5,
          })
          .to("#intro-slider", {
            xPercent: "-100",
            duration: 1.3,
          })
          .from("#welcome", {
            opacity: 0,
            duration: 0.5,
          });
      }, comp);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div className={`relative`} ref={comp}>
      <div
        id="intro-slider"
        className={`h-screen p-10 bg-zinc-100 absolute top-0 left-0 font-spaceGrotesk z-50 w-full flex flex-col gap-10 tracking-tight text-zinc-900 ${
          isIntroDone ? "hidden" : "relative"
        }`}
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
          id="title-1"
        >
          Welcome To,
        </h1>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
          id="title-2"
        >
          The Priyanshu
        </h1>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
          id="title-3"
        >
          Portfolio
        </h1>
      </div>
      <div
        id="welcome"
        className={`w-[90%] md:w-[80%] mx-auto ${
          isIntroDone ? "relative" : "hidden"
        }`}
      >
        <HeroSection />
        <Timeline />
        <Skills />
      </div>
    </div>
  );
}
