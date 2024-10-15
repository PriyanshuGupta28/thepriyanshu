import {
  IconBook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
  IconLayoutCollage,
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
// eslint-disable-next-line import/no-named-as-default
import gsap from "gsap";

interface NavbarProps {
  isIntroDone: boolean;
}

// eslint-disable-next-line react/prop-types
const FloatingDockDemo: React.FC<NavbarProps> = ({ isIntroDone }) => {
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
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
      target: "",
    },
    {
      title: "Resume",
      icon: (
        <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/resume",
      target: "",
    },
    {
      title: "Projects",
      icon: (
        <IconLayoutCollage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
      target: "",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/priyanshu-kumar-581a5a246/",
      target: "_blank",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      target: "_blank",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/28Priyanshu2001",
      target: "_blank",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/PriyanshuGupta28",
      target: "_blank",
    },
  ];

  return (
    <div
      ref={navRef}
      className="flex z-20 sticky left-4 md:items-center md:justify-center md:bottom-10 w-full"
    >
      <FloatingDock mobileClassName="md:hidden" items={links} />
    </div>
  );
};

export default FloatingDockDemo;
