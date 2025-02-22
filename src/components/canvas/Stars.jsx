import React from "react";
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();

  // Generate points in a sphere and filter out far points
  const [sphere] = useState(() =>
    random
      .inSphere(new Float32Array(10000), { radius: 1.2 }) // Increased number of stars
      .filter((_, i, array) => {
        const x = array[i * 3];
        const y = array[i * 3 + 1];
        const z = array[i * 3 + 2];
        const distance = Math.sqrt(x * x + y * y + z * z); // Calculate distance from origin
        return distance <= 0.6; // Only include stars within a closer radius
      })
  );

  // Rotate the star field over time to create motion
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 5; // Faster rotation on x-axis (originally `delta / 10`)
    ref.current.rotation.y -= delta / 7.5; // Faster rotation on y-axis (originally `delta / 15`)
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}> {/* Rotate the entire group */}
      <Points
        ref={ref}
        positions={sphere}
        stride={3} // Use every 3 elements as a point
        frustumCulled // Optimize rendering by culling points outside the view
        {...props}
      >
        <PointMaterial
          transparent // Allow transparency for points
          color="#FFFFFF" // Set star color to white
          size={0.006} // Increase the size for closer stars
          sizeAttenuation={true} // Make stars smaller with distance
          depthWrite={false} // Avoid depth conflicts with other elements
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

