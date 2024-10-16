import React, { useEffect, useState } from "react";
import lodash from "lodash";
import { Flipped, Flipper } from "react-flip-toolkit";
import {
  SiRemix,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiVite,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { RiCss3Fill } from "react-icons/ri";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { CgVercel } from "react-icons/cg";

const Skills: React.FC = () => {
  const skillItems = [
    { title: "React", icon: <FaReact className="text-blue-500" /> },
    { title: "Next.js", icon: <TbBrandNextjs className="text-white" /> },
    { title: "Redux", icon: <TbBrandRedux className="text-purple-600" /> },
    { title: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { title: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { title: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { title: "CSS3", icon: <RiCss3Fill className="text-blue-500" /> },
    { title: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { title: "Express", icon: <SiExpress className="text-white" /> },
    { title: "Vite", icon: <SiVite className="text-purple-500" /> },
    { title: "Remix", icon: <SiRemix className="text-cyan-500" /> },
    { title: "MongoDB", icon: <BiLogoMongodb className="text-green-600" /> },
    { title: "Vercel", icon: <CgVercel className="text-white" /> },
  ];

  const [items, setItems] = useState(skillItems);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      const newShuffledItems = lodash.shuffle(items);
      setItems(newShuffledItems);
    }, 1000); // shuffle every 3 seconds

    return () => clearInterval(shuffleInterval);
  }, [items]);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8 text-zinc-100">
        Skills
      </h2>
      <Flipper flipKey={items.map((item) => item.title).join("")}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <Flipped key={item.title} flipId={item.title}>
              <div className="flex flex-col items-center p-4 rounded-lg transition-transform transform hover:scale-105 bg-transparent">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="text-lg font-semibold text-zinc-100">
                  {item.title}
                </h3>
              </div>
            </Flipped>
          ))}
        </div>
      </Flipper>
    </div>
  );
};

export default Skills;
