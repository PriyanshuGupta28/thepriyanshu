import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const textRef = useRef(null);

  useGSAP(() => {
    const textElement = textRef.current;

    // Split text into words and wrap each word in a span
    const splitText = (element) => {
      const words = element.innerText.split(" ");
      element.innerHTML = words
        .map((word) => `<span class='word'>${word}</span>`)
        .join(" ");
    };

    splitText(textElement);

    // Select all words and animate them
    gsap.utils.toArray(".word").forEach((word, index) => {
      gsap.fromTo(
        word,
        { opacity: 0, y: 50 }, // Start state
        {
          opacity: 1,
          y: 0, // End state
          duration: 0.5,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: word,
            start: "top 100%",
            toggleActions: "play none none none",
            once: true, // Play once when it enters the viewport
          },
        }
      );
    });
  }, []);

  return (
    <section className="container mx-auto py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 reveal-text" ref={textRef}>
          Projects Title Revealed Word by Word
        </h1>
        <p className="text-lg mb-8 reveal-text" ref={textRef}>
          This is the paragraph where each word will be revealed as you scroll.
        </p>
      </div>
    </section>
  );
}
