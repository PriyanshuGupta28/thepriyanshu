import { LoaderFunction } from "@remix-run/node";
import { json, MetaFunction, useLoaderData } from "@remix-run/react";
import React from "react";
import ProjectDetails from "~/components/ProjectDetails";
import { getOneProject, ProjectType } from "~/models/project.server";

export const meta: MetaFunction = ({ params }) => {
  return [
    { title: `The Priyanshu | Project - ${params.id} ` },
    { name: "description", content: "Welcome to The Priyanshu!" },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  const projectData = await getOneProject(Number(params.id));
  if (!projectData) {
    throw new Response("Product not found", { status: 404 });
  }
  return json({ projectData });
};

const ProjectId: React.FC = () => {
  const { projectData } = useLoaderData<{ projectData: ProjectType }>();
  return (
    <div>
      <ProjectDetails projectData={projectData} />
    </div>
  );
};

export default ProjectId;
