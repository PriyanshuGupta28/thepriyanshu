import React from "react";

const Timeline: React.FC = () => {
  const experiences = [
    {
      title: "Front End Developer",
      company: "Bapa sita innovation and technologies",
      location: "Gujarat, Vadodara",
      date: "06/2024 - Present",
      description:
        "Led the design and development of the complete architecture for rgav.in, a fully functional eCommerce website specializing in Ayurvedic products.",
    },
    {
      title: "React.js Developer",
      company: "Eshkon",
      location: "Gujarat, Ahmedabad",
      date: "07/2023 - 06/2024",
      description:
        "Spearheaded the development and maintenance of over 20 custom, reusable UI components using Next.js, TypeScript, and Redux.",
    },
    {
      title: "Front End Developer",
      company: "Echnotech pvt ltd",
      location: "Karnataka, Bangalore",
      date: "01/2023 - 06/2023",
      description:
        "Led the development of highly responsive and user-centric web applications using React, Redux, JavaScript, HTML5, and Material-UI.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Work History</h2>
      <div className="relative border-l-4 border-purple-800">
        {experiences.map((experience, idx) => (
          <div className="mb-8 pl-8" key={idx}>
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] mt-1"></div>
            <p className="text-sm text-gray-600">{experience.date}</p>
            <h3 className="text-xl font-semibold">{experience.title}</h3>
            <p className="text-md font-medium text-purple-500">
              {experience.company}, {experience.location}
            </p>
            <p className="text-zinc-500">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
