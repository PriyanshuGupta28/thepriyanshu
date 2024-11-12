import { json, LoaderFunction } from "@remix-run/node";
import { Await, useLoaderData, useNavigation } from "@remix-run/react";
import React, { Suspense, useTransition } from "react";
import BentoGrid from "~/components/BentoGrid";
import { getProjects, ProjectType } from "~/models/project.server";

export const loader: LoaderFunction = async () => {
  return json({
    projects: await getProjects(),
  });
};

const Projects: React.FC = () => {
  const { projects } = useLoaderData<{ projects: ProjectType[] }>();
  const transition = useTransition();
  const isLoading = transition.state === "loading";
  console.log(transition.state === "loading", "navigation");

  return (
    <div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }
      >
        <BentoGrid projects={projects} />
      </Suspense>
    </div>
  );
};

export default Projects;
