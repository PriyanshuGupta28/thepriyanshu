import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "The Priyanshu | Resume" },
    { name: "description", content: "Welcome to The Priyanshu!" },
  ];
};
const Resume: React.FC = () => {
  const headerRef = useRef(null);
  const sectionsRef = useRef([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    sectionsRef.current.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
          // markers: true,
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out",
        delay: 0.3,
        stagger: 0.5,
      });
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 w-[90%] md:w-[50%]">
      {/* Header Section */}
      <div ref={headerRef} className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white">
          Priyanshu Kumar
        </h1>
        <p className="text-lg text-gray-600 dark:text-neutral-400 mt-2">
          Patna, Bihar | +91 8407053234 | 28priyanshu2001@gmail.com
        </p>
        <p className="text-md text-gray-600 dark:text-neutral-400 mt-2">
          Languages: Hindi, English
        </p>
      </div>

      {/* Summary Section */}
      <div ref={(el) => (sectionsRef.current[0] = el)} className="my-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300">
          Summary
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Self-driven Software Engineer with 3 years of hands-on expertise
          creating high-performance, user-centric web solutions. Proficient in
          React.js, Next.js, and TypeScript, having built robust, role-based
          solar management platforms and comprehensive eCommerce applications.
          Recognized for crafting advanced UI components, boosting SEO, and
          streamlining performance to satisfy business objectives. Dedicated to
          translating intricate requirements into efficient, maintainable code
          while collaborating effectively with cross-functional teams.
          <br /> <br /> Beyond professional engagements, I have undertaken
          personal initiatives that highlight creativity and technical aptitude.
          These projects range from building interactive dashboards with
          real-time data to experimenting with modern libraries—all aimed at
          refining workflows and delivering impactful results.
        </p>
      </div>

      {/* Experience Section */}
      <div className="my-10">
        <h2
          className="text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          Experience
        </h2>

        {/* Job 1: Bapa sita innovation and technologies */}
        <div className="mb-8" ref={(el) => (sectionsRef.current[2] = el)}>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Full-Stack Developer
          </h3>
          <p className="text-gray-500 dark:text-neutral-400">
            Bapa sita innovation and technologies | Gujarat, Vadodara
          </p>
          <p className="text-gray-500 dark:text-neutral-400">
            06/2024 - Present
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li>
              Led the design and development of a fully functional eCommerce
              website specializing in Ayurvedic products.
            </li>
            <li>
              Implemented key functionalities such as product display,
              add-to-cart, secure checkout, and order tracking.
            </li>
            <li>
              Integrated authentication using refresh and access tokens for
              secure user sessions.
            </li>
            <li>
              Managed payment gateway integration, user account management, and
              order history tracking.
            </li>
            <li>
              Currently managing a cross-functional team as a Tech Lead,
              ensuring high-quality standards.
            </li>
            <li>
              Scaled the platform, optimizing performance and implementing best
              security practices.
            </li>
          </ul>
        </div>

        {/* Job 2: Eshkon */}
        <div className="mb-8" ref={(el) => (sectionsRef.current[3] = el)}>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            React.js Developer
          </h3>
          <p className="text-gray-500 dark:text-neutral-400">
            Eshkon | Gujarat, Ahmedabad
          </p>
          <p className="text-gray-500 dark:text-neutral-400">
            07/2023 - 06/2024
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li>
              Developed over 20 reusable UI components using Next.js,
              TypeScript, and Redux, enhancing UI consistency.
            </li>
            <li>
              Integrated Contentful CMS, allowing non-technical teams to manage
              and deliver content easily.
            </li>
            <li>
              Optimized build processes with npm, improving efficiency and
              reducing development time.
            </li>
            <li>
              Collaborated with design and backend teams to deliver seamless
              integrations.
            </li>
            <li>
              Improved search rankings using SEO schema markup, driving organic
              traffic growth.
            </li>
            <li>
              Developed dynamic page generation and real-time data updates for
              improved user experience.
            </li>
          </ul>
        </div>

        {/* Job 3: Echnotech Pvt Ltd */}
        <div className="mb-8" ref={(el) => (sectionsRef.current[4] = el)}>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Front End Developer
          </h3>
          <p className="text-gray-500 dark:text-neutral-400">
            Echnotech Pvt Ltd | Karnataka, Bangalore
          </p>
          <p className="text-gray-500 dark:text-neutral-400">
            04/2022 - 06/2023
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
            <li>
              Led the development of highly responsive, user-centric web
              applications using React, Redux, and Material-UI.
            </li>
            <li>
              Collaborated with UI/UX designers and backend teams to deliver
              seamless integrations.
            </li>
            <li>
              Created feature-rich table components with filtration, search,
              pagination, and data export functionality.
            </li>
            <li>
              Integrated RESTful APIs for dynamic data interaction between
              frontend and backend systems.
            </li>
            <li>
              Implemented unit testing with Jest and Enzyme to guarantee code
              quality and performance.
            </li>
            <li>
              Optimized page load times and overall performance, improving user
              satisfaction and retention.
            </li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div ref={(el) => (sectionsRef.current[5] = el)} className="my-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300">
          Education
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">
            Patliputra University | Patna, Bihar
          </span>
          <br />
          Bachelor of Arts in Political Science | 04/2023
        </p>
      </div>

      {/* Skills Section */}
      <div ref={(el) => (sectionsRef.current[6] = el)} className="my-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300">
          Skills
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          HTML5, CSS3, JavaScript, React.js, Next.js, Remix.js, TypeScript,
          Redux, Sass, Tailwind CSS, Express.js, Node.js , MongoDb , GitHub,
          Material-UI, Ant Design UI, GSAP Animation, Framer Motion.
        </p>
      </div>
    </div>
  );
};

export default Resume;
