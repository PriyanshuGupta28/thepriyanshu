import { useParams } from "@remix-run/react";
import React from "react";
import ProjectDetails from "~/components/ProjectDetails";

const ConcertsId: React.FC = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <ProjectDetails
        title={dummyProjectData.title}
        description={dummyProjectData.description}
        technologies={dummyProjectData.technologies}
        imageUrl={dummyProjectData.imageUrl}
        gallery={dummyProjectData.gallery}
        liveUrl={dummyProjectData.liveUrl}
        githubUrl={dummyProjectData.githubUrl}
      />
    </div>
  );
};

export default ConcertsId;
const dummyProjectData = {
  title: "Awesome Portfolio Website",
  description:
    "A modern and responsive portfolio website to showcase my projects and skills. Built with React, Tailwind CSS, and GSAP for animations.",
  technologies: ["React", "Tailwind CSS", "GSAP", "TypeScript"],
  imageUrl:
    "https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  gallery: [
    "https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  liveUrl: "https://your-live-portfolio-url.com",
  githubUrl: "https://github.com/yourusername/portfolio-website",
};
