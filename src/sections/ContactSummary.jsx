import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const ContactSummary = () => {
  // CONSTANTS
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = [
    "Contact US",
    "Contact US",
    "Contact US",
    "Contact US",
    "Contact US",
  ];

  // REFS
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        pint: true,
        pinSpacing: true,
      },
    });
  }, []);

  // RENDERIN-STUFFS
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      {/* Marquee */}
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          "Let&apos;s build a <br />{" "}
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic"> inspiring</span> <br /> web application{" "}
          <span className="text-gold">together</span>"
        </p>
      </div>
      {/* marquee */}
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName={"stroke-gold stroke-2 text-primary"}
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
