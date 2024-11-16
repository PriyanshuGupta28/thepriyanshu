import { Link } from "@remix-run/react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "~/lib/utils";

export const FloatingDock = ({
  items,
  desktopClassName,
  toggleTheme,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    target: string;
    toggleTheme?: () => void;
  }[];
  desktopClassName?: string;
}) => {
  return (
    <FloatingDockDesktop
      items={items}
      className={desktopClassName}
      toggleTheme={toggleTheme}
    />
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  toggleTheme,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    target: string;
    toggleTheme?: () => void;
  }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-16 gap-4 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          {...item}
          toggleTheme={toggleTheme}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  target,
  toggleTheme,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  target: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    // eslint-disable-next-line prefer-const
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <>
      {title !== "Toggle Theme" ? (
        <>
          <Link
            to={title === "Toggle Theme" ? "#" : href}
            target={target}
            rel="noreferrer"
            prefetch="intent"
          >
            <motion.div
              ref={ref}
              style={{ width, height }}
              onClick={title === "Toggle Theme" ? toggleTheme : undefined}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
            >
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 2, x: "-50%" }}
                    className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
                  >
                    {title}
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                style={{ width: widthIcon, height: heightIcon }}
                className="flex items-center justify-center"
              >
                {icon}
              </motion.div>
            </motion.div>
          </Link>
        </>
      ) : (
        <>
          <motion.div
            ref={ref}
            style={{ width, height }}
            onClick={toggleTheme}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative cursor-pointer"
          >
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 2, x: "-50%" }}
                  className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
                >
                  {title}
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              style={{ width: widthIcon, height: heightIcon }}
              className="flex items-center justify-center"
            >
              {icon}
            </motion.div>
          </motion.div>
        </>
      )}
    </>
  );
}
