import { useGSAP } from "@gsap/react";
import type { MetaFunction } from "@remix-run/node";
// eslint-disable-next-line import/no-named-as-default
import gsap from "gsap";
import lodash from "lodash";
import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import Timeline from "~/components/Timeline";

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
  const [items, setItems] = useState<string[]>([
    "item1",
    "item2",
    "item3",
    "item4",
  ]);

  const { setIsIntroDone, isIntroDone } = useOutletContext<ContextType>();

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      const newShuffledItems = lodash.shuffle(items);
      setItems(newShuffledItems);
    }, 1000);

    return () => clearInterval(shuffleInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  useEffect(() => {
    const isIntroLoaded = sessionStorage.getItem("isIntroLoaded");

    if (isIntroLoaded) {
      // Skip the intro
      setIsIntroDone(true);
    } else {
      // Show the intro
      setIsIntroDone(false);
    }
  }, [setIsIntroDone]);

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
    <div className={`relative`} ref={isIntroDone ? comp : null}>
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
      <div className="w-[90%] md:w-[80%] mx-auto">
        <Timeline />
      </div>
    </div>
  );
}
