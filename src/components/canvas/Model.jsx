import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Model = () => {
  const { scene } = useGLTF("./soulless/scene.gltf");
  const modelRef = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mousePosition.current = { x, y };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      const { x, y } = mousePosition.current;
      modelRef.current.rotation.x += (-y * 0.5 - modelRef.current.rotation.x) * 0.08;
      modelRef.current.rotation.y += (x * 0.8 - modelRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <mesh ref={modelRef}>
      <directionalLight
        position={[5, 0, 10]} // Placed directly in front of the model
        intensity={4}
        color="#fffdf1"
        castShadow
        shadow-mapSize={1024}
      />

      <pointLight
        position={[-1, 0, 3]}
        intensity={12}
        angle={1}
        penumbra={0}
        color="#ffc500"
        castShadow
      />
      <spotLight
        position={[0, -1, 2]}
        intensity={4}
        angle={1.5}
        penumbra={1}
        color="#ff5900"
        castShadow
      />
      {/* 3D Model */}
      <primitive
        object={scene}
        scale={0.007}
        position={[0, -1.6, 0]}
        rotation={[0.1, 0.5, -0.1]}
        castShadow
        receiveShadow
      />
    </mesh>
  );
};

const SkullModel = () => (
  <div className="absolute top-0 right-0 h-full w-1/2">
    <Canvas shadows dpr={[1, 2]} camera={{ position: [5, -3, 5], fov: 28 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <Model />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default SkullModel;

