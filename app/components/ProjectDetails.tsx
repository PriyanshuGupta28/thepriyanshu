/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ProjectDetailsProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  gallery: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function ProjectDetails({
  title,
  description,
  technologies,
  imageUrl,
  gallery,
  liveUrl,
  githubUrl,
}: ProjectDetailsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current?.children,
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
    <div
      ref={containerRef}
      className="min-h-screen  text-zinc-200 py-12 px-4 lg:px-24"
    >
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden rounded-lg mb-8">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">{title}</h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About the Project</h2>
        <p className="text-lg leading-relaxed mb-8">{description}</p>

        {/* Technologies Used */}
        <h3 className="text-2xl font-semibold mb-4">Technologies Used</h3>
        <div className="flex flex-wrap gap-3 mb-8">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg transition transform hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Image Gallery */}
        <h3 className="text-2xl font-semibold mb-4">Image Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`${title} image ${index + 1}`}
                className="w-full h-64 object-cover transform transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex gap-4 justify-center">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-500 transition duration-300"
          >
            View Live
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
