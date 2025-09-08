import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServicesSummary from "./sections/ServicesSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei";


const App = () => {
  const { progress } = useProgress();
  const [isRead, setIsRead] = useState(false);

  // USE-EFFECT STUFFS
  useEffect(() => {
    if (progress === 100) {
      setIsRead(true);
    }
  }, [progress]);
  // RENDERING-STUFFS
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {!isRead && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          {/* progress-bar -mathematically */}

          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          {/* progress-bar -visual-container */}
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
             {/* progress-bar -visual */}
             <div className="absolute top-0 left-0 h-full transition-all duration-300 bg-white" style={{width:`${progress}%`}}></div>
          </div>
        </div>
      )}

      <div
        className={`${
          isRead ? "opacity-100" : "transition-opacity duration-1000"
        }`}
      >
        <Navbar />
        <Hero />
        <ServicesSummary />
        <Services />
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;
