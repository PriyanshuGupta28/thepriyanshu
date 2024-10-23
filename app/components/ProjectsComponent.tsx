import { Link } from "@remix-run/react";
import React from "react";
import { SparklesText } from "./ui/SparklesText";

const ProjectsComponent: React.FC = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-28 md:py-[10rem] space-y-24 flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Project Image Links */}
            <Link
              to="projects/1"
              className="relative group rounded-xl rotate-6 hover:rotate-0 transform origin-bottom duration-500 hover:-translate-y-12 h-[300px] w-[230px] sm:h-[300px] sm:w-[230px] bg-cover bg-center hover:scale-150"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xl font-bold">Project 1</span>
              </div>
            </Link>

            <Link
              to="projects/1"
              className="relative group rounded-xl -rotate-12 hover:rotate-0 transform origin-bottom duration-500 hover:-translate-y-12 h-[200px] w-[300px] sm:h-[200px] sm:w-[350px] bg-cover bg-center hover:scale-150"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&amp;w=2672&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xl font-bold">Project 2</span>
              </div>
            </Link>

            <Link
              to="projects/1"
              className="relative group rounded-xl rotate-6 hover:rotate-0 transform origin-bottom duration-500 hover:-translate-y-12 h-[300px] w-[250px] sm:h-[300px] sm:w-[250px] bg-cover bg-center hover:scale-150"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xl font-bold">Project 3</span>
              </div>
            </Link>

            <Link
              to="projects/1"
              className="relative group rounded-xl -rotate-12 hover:rotate-0 transform origin-bottom duration-500 hover:-translate-y-12 h-[200px] w-[300px] sm:h-[200px] sm:w-[350px] bg-cover bg-center hover:scale-150"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xl font-bold">Project 4</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <p className="text-center text-lg text-zinc-50 -mt-14">
        <Link to="/projects">
          <SparklesText text="See All" />
        </Link>
      </p>
    </>
  );
};

export default ProjectsComponent;
