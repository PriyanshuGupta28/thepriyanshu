import React, { Suspense, useRef } from "react";
import { LoaderFunction } from "@remix-run/node";
// eslint-disable-next-line import/no-named-as-default
import gsap from "gsap";
import { Await, defer, Link, useLoaderData } from "@remix-run/react";
import { getProjects, ProjectType } from "~/models/project.server";
import { useGSAP } from "@gsap/react";
import Loader from "~/components/Loader/Loader";

export const loader: LoaderFunction = () => {
  return defer({
    projects: getProjects(),
  });
};

const Projects: React.FC = () => {
  const { projects } = useLoaderData<{ projects: Promise<ProjectType[]> }>();
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate each grid item with a stagger effect when the component mounts
    gsap.fromTo(
      gridRef.current?.children,
      { opacity: 0, y: 50 },
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
    <div>
      <Suspense
        fallback={
          <div className="w-full h-screen flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <div className="">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
            <div
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
              ref={gridRef}
            >
              <Await
                resolve={projects as ProjectType[]}
                errorElement={<p className="text-red-500">error</p>}
              >
                {(resolvedProjects: ProjectType[]) => (
                  <>
                    {resolvedProjects?.map((item, index) => (
                      <Link
                        to={`${item.id}`}
                        key={index}
                        prefetch="intent"
                        className={`relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer ${
                          item?.colSpan || ""
                        } ${item?.rowSpan || ""}`}
                      >
                        <img
                          src={item?.mainImage}
                          alt={item?.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-2xl font-bold text-white">
                              {item?.title}
                            </h3>
                            {item?.description && (
                              <p className="text-white">
                                {item.description[0]?.content
                                  .split(" ")
                                  .slice(0, 6)
                                  .join(" ") + "..."}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </>
                )}
              </Await>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Projects;
