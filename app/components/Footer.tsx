import { Link } from "@remix-run/react";
import React, { useRef } from "react";
import logoLight from "~/assets/logo.png";
import logoDark from "~/assets/logodark.png";
interface FooterProps {
  isIntroDone: boolean;
}
const Footer: React.FC<FooterProps> = ({ isIntroDone }) => {
  const footerRef = useRef();
  return (
    <footer
      ref={footerRef}
      className={`relative text-white py-16 text-center mt-10 ${
        isIntroDone ? "relative" : "hidden"
      }`}
    >
      {/* Fading Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent"></div>

      <div className="py-12 px-12">
        <div className="flex flex-wrap items-center sm:justify-between max-sm:flex-col gap-6">
          <div>
            <Link to="/">
              <img src={logoDark} alt="logo" className="w-44 dark:hidden" />
              <img
                src={logoLight}
                alt="logo"
                className="w-44 hidden dark:block"
              />
            </Link>
          </div>

          <ul className="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
            <li>
              <Link
                to="/"
                className="text-black dark:text-white hover:underline text-base"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="text-black dark:text-white hover:underline text-base"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-black dark:text-white hover:underline text-base"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-center text-black dark:text-white text-base">
          © thepriyanshu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
