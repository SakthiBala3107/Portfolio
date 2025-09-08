import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  // REFS
  const imgRef = useRef(null);

  // CONSTANTS
  const text =
    "Passionate about clean architecture\nI build scalable, high-performance solutions\nfrom prototype to production";

  const aboutText = `Obsessed with building fast, intuitive apps—from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is a promise: quality that users feel.
  When I’m not shipping:
⚡️ Open-sourcing my latest experiment (or hacking on yours)
🔍 Reverse-engineering apps (to uncover what makes them tick)  
📸 Capturing everyday moments (and framing them like stories)  
🌍 Chasing the “what if?” (exploring how tech reshapes how we live)  
`;

  // GSAP-STUFFS
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  // RENDERIN-STUFFS
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        className={"w-full"}
        textColor={"text-white"}
      />
      {/*  */}
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="/images/sakthibala-profile-phot.jpeg"
          alt="man"
          className="w-md rounder-3xl"
        />
        <AnimatedTextLines text={aboutText} />
      </div>
    </section>
  );
};

export default About;
