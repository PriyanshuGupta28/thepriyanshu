import { useGSAP } from "@gsap/react";
import { Link } from "@remix-run/react";
// eslint-disable-next-line import/no-named-as-default
import gsap from "gsap";
import { useRef } from "react";

interface GridItem {
  src: string;
  alt: string;
  title: string;
  description?: string;
  colSpan?: string;
  rowSpan?: string;
}

export default function BentoGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate each grid item with a stagger effect when the component mounts
    gsap.fromTo(
      gridRef.current?.children,
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
  const items: GridItem[] = [
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add image URL here
      alt: "Nature",
      title: "Explore Nature",
      description: "Discover the beauty of the natural world",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add image URL here
      alt: "Food",
      title: "Culinary Delights",
      description: "Discover the beauty of the natural world",
    },
    {
      src: "https://images.unsplash.com/photo-1431440869543-efaf3388c585?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add image URL here
      alt: "Technology",
      title: "Tech Innovations",
      description: "Discover the beauty of the natural world",
    },
    {
      src: "https://images.unsplash.com/photo-1488711500009-f9111944b1ab?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add image URL here
      alt: "Travel",
      title: "Travel Adventures",
      description: "Discover the beauty of the natural world",
    },
    {
      src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add image URL here
      alt: "Art",
      title: "Artistic Expressions",
      description: "Discover the beauty of the natural world",
    },
    {
      src: "https://images.unsplash.com/photo-1473800447596-01729482b8eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add image URL here
      alt: "Swimming",
      title: "Swimming",
      description: "Discover the beauty of the natural world",
    },
    {
      src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add image URL here
      alt: "Chess",
      title: "Chess",
      description: "Discover the beauty of the natural world",
    },
    {
      src: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add image URL here
      alt: "Football",
      title: "Football",
      description: "Discover the beauty of the natural world",
    },
    {
      src: "https://images.unsplash.com/photo-1459664018906-085c36f472af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add image URL here
      alt: "Cricket",
      title: "Cricket",
      description: "Discover the beauty of the natural world",
    },
  ];

  return (
    <div className="">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bento Grid Layout with Images
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4" ref={gridRef}>
          {items.map((item, index) => (
            <Link
              to={`${index}`}
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer ${
                item.colSpan ? item.colSpan : ""
              } ${item.rowSpan ? item.rowSpan : ""}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full ${
                  item.colSpan ? "h-full" : "h-full"
                } object-cover`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-white">{item.description}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
