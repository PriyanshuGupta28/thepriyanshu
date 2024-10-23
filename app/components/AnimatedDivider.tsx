import { useEffect } from "react";
import { gsap } from "gsap";

interface DividerProps {
  alignment: "left" | "center" | "right";
  text: string;
  animation?: boolean; // Optional animation flag
  textClassName?: string; // Custom text styling
}

export default function Divider({
  alignment,
  text,
  animation = true,
  textClassName = "", // Default to empty string if not provided
}: DividerProps) {
  return (
    <div
      className={`relative py-3 flex items-center text-sm text-gray-800 dark:text-white ${
        alignment === "left"
          ? "after:flex-1 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-gray-500 after:to-transparent after:ms-6 dark:after:via-neutral-600"
          : alignment === "center"
          ? "before:flex-1 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-gray-500 before:to-transparent before:me-6 after:flex-1 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-gray-500 after:to-transparent after:ms-6 dark:before:via-neutral-600 dark:after:via-neutral-600"
          : "before:flex-1 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-gray-500 before:to-transparent before:me-6 dark:before:via-neutral-600"
      }`}
    >
      <span className={`divider-text ${textClassName}`}>{text}</span>
    </div>
  );
}
