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
                  "url('https://4kwallpapers.com/images/wallpapers/your-name-shooting-3840x2160-14938.jpg')",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xl font-bold">
                  Solar Software
                </span>
              </div>
            </Link>

            <Link
              to="projects/2"
              className="relative group rounded-xl -rotate-12 hover:rotate-0 transform origin-bottom duration-500 hover:-translate-y-12 h-[200px] w-[300px] sm:h-[200px] sm:w-[350px] bg-cover bg-center hover:scale-150"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xl font-bold">
                  Banking Software
                </span>
              </div>
            </Link>

            <Link
              to="projects/7"
              className="relative group rounded-xl rotate-6 hover:rotate-0 transform origin-bottom duration-500 hover:-translate-y-12 h-[300px] w-[250px] sm:h-[300px] sm:w-[250px] bg-cover bg-center hover:scale-150"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xl font-bold">
                  Npm Package
                </span>
              </div>
            </Link>

            <Link
              to="projects/5"
              className="relative group rounded-xl -rotate-12 hover:rotate-0 transform origin-bottom duration-500 hover:-translate-y-12 h-[200px] w-[300px] sm:h-[200px] sm:w-[350px] bg-cover bg-center hover:scale-150"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xl font-bold">E Commerce</span>
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
