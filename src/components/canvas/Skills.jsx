import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CircularElement = ({ imgUrl, proficiency }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ strokeDashoffset: Math.PI * 2 * 50 - (proficiency / 100) * Math.PI * 2 * 50 });
    } else {
      controls.start({ strokeDashoffset: Math.PI * 2 * 50 });
    }
  }, [inView, controls, proficiency]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative", // Enable positioning for the progress bar
        width: "120px", // Outer size of the circle with the progress bar
        height: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Circular Progress Bar */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        width="120"
        height="120"
      >
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="5"
          fill="none"
        />
        {/* Foreground circle (progress) */}
        <motion.circle
          cx="60"
          cy="60"s
          r="50"
          stroke="#ff4848" // Customize the progress bar color
          strokeWidth="4"
          fill="none"
          strokeDasharray={`${Math.PI * 2 * 50}`} // Full circumference
          initial={{ strokeDashoffset: Math.PI * 2 * 50 }} // Start from 0%
          animate={controls}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.5s ease", // Smooth animation
          }}
        />
      </svg>

      {/* Inner circular content */}
      <div
        style={{
          width: "100px", // Inner circle size
          height: "100px",
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Glass effect with transparency
          borderRadius: "50%", // Make it circular
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 10px rgba(255, 255, 255, 0.2)", // Subtle shadow for depth
          // backdropFilter: "blur(10px)", // Glassmorphism effect
          WebkitBackdropFilter: "blur(10px)", // Safari support
        }}
      >
        {/* Embedded logo */}
        <img
          src={imgUrl}
          alt="Logo"
          style={{
            width: "50%",
            height: "50%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

const SquareCanvas = ({ icon, proficiency }) => {
  return (
    <div>
      <CircularElement imgUrl={icon} proficiency={proficiency} />
    </div>
  );
};

export default SquareCanvas;
