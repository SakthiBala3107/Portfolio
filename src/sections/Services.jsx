import React, { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { div } from "three/tsl";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  const text = `I build secure, high-performance frontend-stuffs\nwith smooth UX to drive growth\nnot headaches.`;
  const isDesktop = useMediaQuery({ minWidth: "48rem" });
  // REFS
  const serviceRefs = useRef([]);

  // GSAP-STUFFS
  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        duration: 1,
        ease: "circ.out",
        scrollTrigger: { trigger: el, start: "top  80%" },
      });
    })
  }, []);

  // RENDERIN-STUFFS
  return (
    <section id="services" className="bg-black rounded-t-4xl min-h-screen ">
      {" "}
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Service"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {/*  */}
      {servicesData.map((service, idx) => (
        <div
          key={idx}
          ref={(el) => (serviceRefs.current[idx] = el)}
          className=" sticky  px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={{
            ...(isDesktop
              ? {
                  top: `calc(10vh + ${idx * 5}rem)`,
                  marginBottom: `${(servicesData.length - idx - 1) * 5}rem`,
                }
              : { top: "0" }),
          }}
        >
          {" "}
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {service.description}
              </p>

              {/*  */}
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIdx) => (
                  <div key={`item-${idx}-${itemIdx}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIdx + 1}
                      </span>
                      {item.title}
                    </h3>
                    {itemIdx < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
