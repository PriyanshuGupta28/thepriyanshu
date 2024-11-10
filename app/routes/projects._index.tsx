import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import BentoGrid from "~/components/BentoGrid";
import { getProjects, ProjectType } from "~/models/project.server";

export const loader: LoaderFunction = async () => {
  return json({
    projects: await getProjects(),
  });
};

const Projects: React.FC = () => {
  const { projects } = useLoaderData<{ projects: ProjectType[] }>();

  console.log(projects);
  return (
    <div>
      <BentoGrid projects={projects} />
    </div>
  );
};

export default Projects;
