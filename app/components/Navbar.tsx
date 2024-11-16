import React, { useRef, useState } from "react";
// eslint-disable-next-line import/no-named-as-default
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IconMenu3 } from "@tabler/icons-react";
import logo from "~/assets/logo.png";
import { Link, useNavigate } from "@remix-run/react";
interface NavbarProps {
  isIntroDone: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isIntroDone }) => {
  const navRef = useRef(null);
  const navigate = useNavigate();

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
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <>
      <div
        ref={navRef}
        className="bg-black/40 backdrop-blur-[6px] border border-zinc-300/20 text-zinc-600 container mx-auto w-[90%] top-2 z-20 sticky box-border py-1 rounded-[50px]"
        style={{ opacity: 0 }}
      >
        <div className="container flex justify-between mx-auto w-full px-5">
          <div className="">
            <img
              src={logo}
              alt="logo"
              className="h-16 w-16"
              onClick={() => navigate("/")}
            />
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md focus:outline-none"
            aria-haspopup="dialog"
            aria-expanded={isOffcanvasOpen}
            aria-controls="hs-offcanvas-right"
            onClick={toggleOffcanvas}
          >
            <IconMenu3 className="h-9 w-9 text-zinc-50" />
          </button>
        </div>
      </div>

      <div
        id="hs-offcanvas-right"
        className={`hs-overlay ${
          isOffcanvasOpen ? "translate-x-0" : "translate-x-full hidden"
        } fixed top-0 end-0 transition-all duration-300 transform ease-in-out h-full border border-l-zinc-500 max-w-xs w-full z-[80] bg-black/80 backdrop-blur-[6px] dark:bg-black/80 dark:border-neutral-700`}
        role="dialog"
        tabIndex={-1}
        aria-labelledby="hs-offcanvas-right-label"
      >
        <div className="flex justify-end items-center py-3 px-4">
          <button
            type="button"
            className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
            aria-label="Close"
            onClick={toggleOffcanvas}
          >
            <span className="sr-only">Close</span>
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <Link
            to="/"
            className="text-slate-300 text-lg"
            onClick={toggleOffcanvas}
          >
            Home
          </Link>
          <Link
            to="/resume"
            className="text-slate-300 text-lg"
            onClick={toggleOffcanvas}
          >
            Resume
          </Link>
          <Link
            to="/projects"
            className="text-slate-300 text-lg"
            onClick={toggleOffcanvas}
          >
            Projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
