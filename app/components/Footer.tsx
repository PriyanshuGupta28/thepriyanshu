import { Link } from "@remix-run/react";
import React, { useRef } from "react";
import logo from "~/assets/logo.png";
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
              <img src={logo} alt="logo" className="w-44" />
            </Link>
          </div>

          <ul className="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
            <li>
              <Link to="/" className="text-gray-300 hover:underline text-base">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:underline text-base"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-300 hover:underline text-base"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:underline text-base"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-center text-gray-300 text-base">
          © thepriyanshu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
