import { useGSAP } from "@gsap/react";
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
// eslint-disable-next-line import/no-named-as-default
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { json, useFetcher, useOutletContext } from "@remix-run/react";
import Timeline from "~/components/Timeline";
import HeroSection from "~/components/HeroSection";
import Skills from "~/components/Skills";
import { TextRevealByWord } from "~/components/ui/TextRevealByWord";
import ProjectsComponent from "~/components/ProjectsComponent";
import AnimatedDivider from "~/components/AnimatedDivider";
import { SparklesText } from "~/components/ui/SparklesText";
import { sendMail } from "~/utils/email";
import { showErrorToast, showSuccessToast } from "~/utils/toast";

interface ContextType {
  isIntroDone: boolean;
  setIsIntroDone: (value: boolean) => void;
}

export const meta: MetaFunction = () => {
  return [
    { title: "The Priyanshu" },
    { name: "description", content: "Welcome to The Priyanshu!" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return json({ error: "All fields are required" });
  }
  try {
    await sendMail(name, email, message);
    return json({ message: `Hello, ${name}. Your message has been sent!` });
  } catch (error) {
    return json({ error: "Failed to send email" }, { status: 500 });
  }
}

export default function Index() {
  const comp = useRef(null);
  const { setIsIntroDone, isIntroDone } = useOutletContext<ContextType>();

  useEffect(() => {
    const isIntroLoaded = sessionStorage.getItem("isIntroLoaded");
    if (isIntroLoaded) {
      // Skip the intro
      setIsIntroDone(true);
    } else {
      // Show the intro
      setIsIntroDone(false);
    }
  }, [isIntroDone]);

  const handleStates = () => {
    setIsIntroDone(true);
    sessionStorage.setItem("isIntroLoaded", "1");
  };

  useGSAP(() => {
    const isIntroLoaded = sessionStorage.getItem("isIntroLoaded");

    if (!isIntroLoaded) {
      const ctx = gsap.context(() => {
        const t1 = gsap.timeline({
          onComplete: () => {
            handleStates();
          },
        });
        t1.from("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
          delay: 0.3,
        })
          .from(["#title-1", "#title-2", "#title-3"], {
            opacity: 0,
            y: "+=30",
            stagger: 0.5,
          })
          .to(["#title-1", "#title-2", "#title-3"], {
            opacity: 0,
            y: "-=30",
            delay: 0.3,
            stagger: 0.5,
          })
          .to("#intro-slider", {
            xPercent: "-100",
            duration: 1.3,
          })
          .from("#welcome", {
            opacity: 0,
            duration: 0.5,
          });
      }, comp);

      return () => ctx.revert();
    }
  }, []);
  const fetcher = useFetcher();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  useGSAP(() => {
    gsap.from(".contact-title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".contact-desc", { opacity: 0, x: -50, delay: 0.5, duration: 1 });
    gsap.from(".contact-form", { opacity: 0, y: 50, delay: 1, duration: 1 });
  }, []);
  useEffect(() => {
    if (fetcher.state === "idle") {
      if (fetcher.data?.message) {
        // Reset form fields on success
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        showSuccessToast(fetcher.data.message);
      } else if (fetcher.data?.error) {
        // Show error toast on failure
        showErrorToast(fetcher.data.error);
      }
    }
  }, [fetcher.state, fetcher.data]);

  const isSubmitting = fetcher.state === "idle";

  return (
    <div className={`relative`} ref={comp}>
      <div
        id="intro-slider"
        className={`h-screen p-10 bg-zinc-100 absolute top-0 left-0 font-spaceGrotesk z-50 w-full flex flex-col gap-10 tracking-tight text-zinc-900 ${
          isIntroDone ? "hidden" : "relative"
        }`}
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
          id="title-1"
        >
          Welcome To,
        </h1>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
          id="title-2"
        >
          The Priyanshu
        </h1>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
          id="title-3"
        >
          Portfolio
        </h1>
      </div>
      <div
        id="welcome"
        className={`w-[90%] md:w-[80%] mx-auto ${
          isIntroDone ? "relative" : "hidden"
        }`}
      >
        <HeroSection />
        <TextRevealByWord text="Hi, my name is Priyanshu Gupta. I am a passionate web developer with expertise in building responsive and dynamic web applications. My work focuses on creating user-centric designs with seamless functionality. I'm continuously learning and evolving in the field of technology." />
        <AnimatedDivider
          alignment="center"
          text="Skills"
          textClassName="text-3xl font-bold"
        />
        <Skills />
      </div>

      <div className={`${isIntroDone ? "relative" : "hidden"}`}>
        <AnimatedDivider
          alignment="center"
          text="Projects"
          textClassName="text-3xl font-bold"
        />
      </div>
      <div
        className={`w-[100%] mx-auto ${isIntroDone ? "relative" : "hidden"}`}
      >
        <ProjectsComponent />
      </div>

      <div
        id="welcome"
        className={`w-[90%] md:w-[80%] mx-auto ${
          isIntroDone ? "relative" : "hidden"
        }`}
      >
        <div className="py-10">
          <AnimatedDivider
            alignment="center"
            text="Work History"
            textClassName="text-3xl font-bold"
          />
        </div>
        <Timeline />
        <AnimatedDivider
          alignment="center"
          text="Contact "
          textClassName="text-3xl font-bold"
        />
        <div className="min-h-screen flex justify-center items-center p-6">
          <div className="max-w-4xl w-full">
            <h1
              className="contact-title text-5xl font-bold text-black dark:text-white
             text-center"
            >
              Get in Touch
            </h1>
            <p className="contact-desc text-zinc-400 text-center mt-4">
              I&apos;d love to hear from you! Fill out the form below and
              i&apos;ll get back to you as soon as possible.
            </p>

            <fetcher.Form
              method="post"
              className="contact-form mt-10 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    ref={nameRef}
                    className="peer w-full bg-zinc-300  dark:bg-zinc-800 text-black dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    required
                    placeholder="Full name"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    ref={emailRef}
                    placeholder="Email address"
                    className="peer w-full bg-zinc-300  dark:bg-zinc-800 text-black dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  ref={messageRef}
                  placeholder="Message"
                  className="peer w-full bg-zinc-300  dark:bg-zinc-800 text-black dark:text-white px-4 py-3 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-zinc-300 dark:bg-zinc-700  text-white dark:text-black font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-700"
                >
                  <SparklesText
                    text={!isSubmitting ? "Submitting..." : "Submit"}
                    // className="text-black dark:text-white"
                  />
                </button>
              </div>
            </fetcher.Form>
          </div>
        </div>
      </div>
    </div>
  );
}
