import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTextLines = ({ text, className }) => {
  // Split into lines, remove empty ones
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  // Refs
  const containerRef = useRef(null);
  const linesRefs = useRef([]);

  // GSAP STUFFS
  useGSAP(() => {
    if (linesRefs.current.length > 0) {
      gsap.from(linesRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }
  }, []);

  // Rendering
  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, idx) => (
        <span
          key={idx}
          ref={(el) => (linesRefs.current[idx] = el)}
          className="block leading-relaxed tracking-wide text-pretty"
        >
          {line}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTextLines;
