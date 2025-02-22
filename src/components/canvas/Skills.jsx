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
      className="circular-element"
    >
      {/* Circular Progress Bar */}
      <svg>
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r="50"
          className="background-circle"
        />
        {/* Foreground circle (progress) */}
        <motion.circle
          cx="60"
          cy="60"
          r="50"
          className="foreground-circle"
          initial={{ strokeDashoffset: Math.PI * 2 * 50 }} // Start from 0%
          animate={controls}
          strokeLinecap="round"
        />
      </svg>

      {/* Inner circular content */}
      <div className="inner-circle">
        {/* Embedded logo */}
        <img
          src={imgUrl}
          alt="Logo"
        />
      </div>
    </div>
  );
};

const CircularRing = ({ icon, proficiency }) => {
  return (
    <div>
      <CircularElement imgUrl={icon} proficiency={proficiency} />
    </div>
  );
};

export default CircularRing;