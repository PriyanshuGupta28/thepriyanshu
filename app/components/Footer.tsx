import React, { useRef } from "react";
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

      <p className="text-lg mt-4">© 2024 Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
