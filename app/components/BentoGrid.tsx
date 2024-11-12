import { useGSAP } from "@gsap/react";
import { Await, Link } from "@remix-run/react";
// eslint-disable-next-line import/no-named-as-default
import gsap from "gsap";
import { useRef } from "react";
import { ProjectType } from "~/models/project.server";

// interface GridItem {
//   src: string;
//   alt: string;
//   title: string;
//   description?: string;
//   colSpan?: string;
//   rowSpan?: string;
// }

export default function BentoGrid({ projects }: { projects: ProjectType[] }) {
  const gridRef = useRef<HTMLDivElement>(null);

  // console.log(projects, "projects");

  useGSAP(() => {
    // Animate each grid item with a stagger effect when the component mounts
    gsap.fromTo(
      gridRef.current?.children,
      { opacity: 0, y: 50 }, // Start state
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2, // Stagger animation of items
      }
    );
  }, []);
  return (
    <div className="">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bento Grid Layout with Images
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4" ref={gridRef}>
          <Await resolve={projects}>
            {projects?.map((item, index) => (
              <Link
                to={`${item.id}`}
                key={index}
                prefetch="intent"
                className={`relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer ${
                  item?.colSpan ? item?.colSpan : ""
                } ${item?.rowSpan ? item?.rowSpan : ""}`}
              >
                <img
                  src={item?.image[0]}
                  alt={item?.alt}
                  className={`w-full ${
                    item.colSpan ? "h-full" : "h-full"
                  } object-cover`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-bold text-white">
                      {item?.title}
                    </h3>
                    {item?.description && (
                      <p className="text-white">{item.description}</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </Await>
        </div>
      </div>
    </div>
  );
}
