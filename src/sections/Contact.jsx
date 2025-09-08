import React from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  // CONSTANTS
  const text = `Got a question, how or project Idea?\nWE’D love to hear from you and discus further!`;
  const items = [
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
  ];

  //   GSAP-STUFFS
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "social-link",
      },
    });
  }, []);
  // RENDERIN-STUFFS
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <AnimatedHeaderSection
        subTitle={"You Dream It, I Code it"}
        title={"Contact"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {/* contatc-related-stuffs */}
      <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
        <div className="flex flex-col w-full gap-10">
          <div className="social-link">
            <h2>E-mail</h2>
            {/* line */}
            <div className="w-full h-px my-2 bg-white/30" />
            {/*  */}
            <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
              sakthibala31072004@gmail.com
            </p>
          </div>

          {/* phone */}
           {/* <div className="social-link">
            <h2>Phone</h2>
            <div className="w-full h-px my-2 bg-white/30" />
            
            <p className="text-xl lowercase md:text-2xl lg:text-3xl">
              8870969088
            </p>
          </div> */}
          {/* next-title */}
          <div className="social-link">
            <h2>Social Media</h2>
            {/* line */}
            <div className="w-full h-px my-2 bg-white/30" />
            {/*  */}
            <div className="flex flex-wrap gap-2">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                >
                  {"{"} {social.name} {"}"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;
