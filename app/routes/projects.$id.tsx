import { LoaderFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import React from "react";
import ProjectDetails from "~/components/ProjectDetails";
import { getOneProject, ProjectType } from "~/models/project.server";

export const loader: LoaderFunction = async ({ params }) => {
  const projectData = await getOneProject(Number(params.id));
  if (!projectData) {
    throw new Response("Product not found", { status: 404 });
  }
  return json({ projectData });
};

const ProjectId: React.FC = () => {
  const { projectData } = useLoaderData<{ projectData: ProjectType }>();
  console.log(projectData, "ProjectId");
  return (
    <div>
      <ProjectDetails projectData={projectData} />
    </div>
  );
};

export default ProjectId;
// const dummyProjectData = {
//   title: "Awesome Portfolio Website",
//   description:
//     "A modern and responsive portfolio website to showcase my projects and skills. Built with React, Tailwind CSS, and GSAP for animations.",
//   technologies: ["React", "Tailwind CSS", "GSAP", "TypeScript"],
//   imageUrl:
//     "https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   gallery: [
//     "https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ],
//   liveUrl: "https://your-live-portfolio-url.com",
//   githubUrl: "https://github.com/yourusername/portfolio-website",
// };
