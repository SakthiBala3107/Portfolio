import AnimatedTextLines from "../components/AnimatedTextLines";

import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedHeaderSection = ({ subTitle, title, text, textColor, withScrollTrigger=false}) => {
  // refs
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  const className = "font-light uppercase value-text-responsive";

  //  GSAP-STUFFS
  useGSAP(() => {
    // timeline
    const tl = gsap.timeline({scrollTrigger: withScrollTrigger ?{trigger:contextRef.current}: undefined});

    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    })

      //   clipath-area
      .from(
        headerRef.current,
        {
          y: 200,
          duration: 1,
          opacity: 0,
          ease: "circ.out",
        },
        "<+0.2"
      );

    return () => tl.kill();
  }, []);

  //   RENDERING-STUFFS
  return (
    <div className="" ref={contextRef}>
      {/* mask */}
      <div
        className=""
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        {/* masked-stuffs */}
        <div
          ref={headerRef}
          className="flex  flex-col justify-center gap-12 pt-16 sm:gap-16"
        >
          <p
            className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
          >
            {/* bugs-title */}
            {subTitle}
          </p>
          {/* title */}
          <div className="px-10">
            <h1
              className={`flex flex-col  flex-wrap gap-12 sm:gap-16 md:block ${textColor} uppercase banner-text-responsive`}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* NEXT-SECTION-CONTENT */}
      <div className={`relative px-10 ${textColor}`}>
        {/* line */}
        <div className="absolute inset-x-0 border-t-2" />

        {/* content */}
        <div className="py-12 sm:py-16 text-end">
          {/* motives */}
          <AnimatedTextLines
            text={text}
            className={className}
          ></AnimatedTextLines>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
