import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SparklesText } from "./ui/SparklesText";

export default function Contact() {
  useGSAP(() => {
    // GSAP Animations
    gsap.from(".contact-title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".contact-desc", { opacity: 0, x: -50, delay: 0.5, duration: 1 });
    gsap.from(".contact-form", { opacity: 0, y: 50, delay: 1, duration: 1 });
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="max-w-4xl w-full">
        <h1 className="contact-title text-5xl font-bold text-white text-center">
          Get in Touch
        </h1>
        <p className="contact-desc text-zinc-400 text-center mt-4">
          We&apos;d love to hear from you! Fill out the form below and
          we&apos;ll get back to you as soon as possible.
        </p>

        <form className="contact-form mt-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer w-full bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
                required
                placeholder="Full name"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="peer w-full bg-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
                required
              />
            </div>
          </div>
          <div className="relative">
            <textarea
              id="message"
              placeholder="Message"
              className="peer w-full bg-zinc-800 text-white px-4 py-3 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-zinc-700 hover:zinc-cyan-800 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-700"
            >
              <SparklesText text="Submit" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
