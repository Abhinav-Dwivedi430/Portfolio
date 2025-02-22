import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Model = () => {
  const { scene } = useGLTF("./soulless/scene.gltf"); // Load the 3D model
  const modelRef = useRef(); // Reference for the 3D model

  // Mouse position state (normalized)
  const mousePosition = useRef({ x: 0, y: 0 });

  // Update mouse position on move
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize to [-1, 1]
      const y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize to [-1, 1]
      mousePosition.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Rotate the model based on mouse position
  useFrame(() => {
    if (modelRef.current) {
      const { x, y } = mousePosition.current;

      // Calculate rotation values (e.g., tilt and pan)
      const targetX = -y * 0.5; // Tilt up/down based on mouse Y
      const targetY = x * 0.8; // Rotate left/right based on mouse X
      // Smooth easing toward the target rotation
      modelRef.current.rotation.x += (targetX - modelRef.current.rotation.x) * 0.08;
      modelRef.current.rotation.y += (targetY - modelRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <mesh ref={modelRef}>
      {/* Lighting for the scene */}
      <hemisphereLight intensity={1} groundColor="#ff4848" />
      <directionalLight
        position={[-10, 5, 15]} // Position of the directional light
        intensity={4} // Brightness of the directional light
        castShadow
        shadow-mapSize={1024} // Resolution of the shadow map
        shadow-camera-far={20} // Camera distance for shadow rendering
      />

      {/* Static 3D Model */}
      <primitive
        object={scene} // The loaded 3D model
        scale={0.007} // Scale of the model
        position={[0, -1.6, 0]} // Position of the model
        rotation={[0.1, 0.5, -0.1]} // Initial rotation
        castShadow
        receiveShadow
      />
    </mesh>
  );
};

const SkullModel = () => {
  return (
    <div className="absolute top-0 right-0 h-full w-1/2">
      <Canvas
        frameloop="always" // Keep the rendering loop active
        shadows // Enable shadows in the scene
        dpr={[1, 2]} // Set the device pixel ratio for rendering
        camera={{ position: [5, -3, 5], fov: 28 }} // Configure the camera position and field of view
        gl={{ preserveDrawingBuffer: true }} // Preserve the drawing buffer for post-processing
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* Render the Model component */}
          <Model />
        </Suspense>

        <Preload all /> {/* Preload all assets for optimized performance */}
      </Canvas>
    </div>
  );
};

export default SkullModel;