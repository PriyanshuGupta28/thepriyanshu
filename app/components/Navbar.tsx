import React, { useRef } from "react";
// eslint-disable-next-line import/no-named-as-default
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IconMenu3 } from "@tabler/icons-react";
interface NavbarProps {
  isIntroDone: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isIntroDone }) => {
  const navRef = useRef(null);

  useGSAP(() => {
    if (isIntroDone) {
      gsap.to(navRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.set(navRef.current, { opacity: 0 });
    }
  }, [isIntroDone]);

  return (
    <div
      ref={navRef}
      className="bg-black/40 backdrop-blur-[6px] border border-zinc-300/20 text-zinc-600 container mx-auto w-[90%] top-2 z-20 sticky box-border py-5 rounded-[50px]"
      style={{ opacity: 0 }}
    >
      <div className="container flex justify-between mx-auto w-full px-5">
        <div className="text-purple-400 text-sm">The Priyanshu.</div>

        <div className="">
          <IconMenu3 className="h-6 w-6 text-zinc-50" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
