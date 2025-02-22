import { motion } from "framer-motion";
import { styles } from "../styles";
import { SkullModel } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ff4848]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white text-5xl md:text-6xl lg:text-7xl`}>
            Hi, It's <span className="text-[#ff4848]">Abhinav</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-lg md:text-xl lg:text-2xl`}>
            I <span className="text-[#ff4848]">develop</span> 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>

        <SkullModel className="absolute bottom-0 left-0 w-full h-full md:h-1/2 lg:h-1/3" />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;