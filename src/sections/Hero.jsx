import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  // MEDIA-QUERIES
  const isMobile = useMediaQuery({ maxWidth: 853 });

  //
  const text =
    "I help growing brands and startups gain an\nunfair advantage through\npremium results driven web/apps";

  // RENDERIN-STUFFS
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen, ">
      {/* Masked-container */}
      <AnimatedHeaderSection
        subTitle={"404 No Bugs Found"}
        title={isMobile ? "Bala" : "Sakthibala"}
        text={text}
        textColor={"text-black"}
      />

      {/* 3D MODEL SECTION */}

      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100%", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.7 : 1} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              {/* 1 */}
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              {/* 2 */}
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              {/* 3 */}
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              {/* 4 */}
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
