import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const ServicesSummary = () => {
  // GSAP-STUFFS
  useGSAP(() => {
    // service-1
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        trigger: "#title-service-1",
        scrub: true,
        immediateRender: false,
      },
    });
    //   service-2
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        trigger: "#title-service-2",
        scrub: true,
        immediateRender: false,
      },
    });

    //   service-3
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        trigger: "#title-service-3",
        scrub: true,
        immediateRender: false,
      },
    });

    //   service-4
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        trigger: "#title-service-4",
        scrub: true,
        immediateRender: false,
      },
    });
  }, []);

  //  RENDERIN-STUFFS
  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
      <div id="title-service-1">
        <p className="">Architucture</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal">Development</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Deployment</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p>APIs</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p className="italic">Frontends</p>
        <div className="w-10 h-1 md:w-32 bg-gold" />
        <p>Scalability</p>
      </div>
      <div id="title-service-4" className="translate-x-48">
        <p>Responsive Design</p>
      </div>
    </section>
  );
};

export default ServicesSummary;
