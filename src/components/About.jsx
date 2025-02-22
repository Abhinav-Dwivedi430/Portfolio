import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X position within the card
    const y = e.clientY - rect.top; // Mouse Y position within the card

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
    card.style.setProperty(
      "background",
      `radial-gradient(circle at ${x}px ${y}px, rgba(255, 72, 72, 0.3), transparent 80%)`
    );
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.setProperty("background", "transparent"); // Reset the gradient
  };

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="service-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
      >
        <div className="service-card-inner">
          <img
            src={icon}
            alt="web-development"
            className="service-card-icon"
          />
          <h3 className="service-card-title">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with extensive experience in JavaScript
        and a strong command of frameworks such as React, Node.js,
        and Three.js. I excel at identifying bugs, analyzing their root causes,
        and implementing effective solutions to ensure seamless functionality.
        As a quick learner and an effective collaborator,
        I work closely with clients to deliver efficient,
        scalable, and user-friendly solutions that address real-world challenges.
        Let's collaborate to transform your ideas into impactful, high-quality applications!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
