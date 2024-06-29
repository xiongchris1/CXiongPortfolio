import useMediaQuery from "../hooks/useMediaQuery";
import { easeInOut, motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profilePic from "../assets/img2.JPG";
import AnimatedText from "./AnimatedText";

const Landing = ({ setSelectedPage }) => {
  const aboveMediumScreens = useMediaQuery("(min-width: 1061px)");

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 300,
      transition: {
        duration: 2,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, -0.05, 0.01, 0.99],
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const mobileVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.7,
        ease: easeInOut,
      },
    },
    show: {
      opacity: 1,
      transition: {
        ease: [0.6, -0.05, 0.21, 0.5],
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const mainVariants = {
    hidden: { opacity: 0, y: 100, scale: 0 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.9,
        ease: [0.6, -0.05, 0.01, 0.99],
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: easeInOut,
        type: "spring",
        damping: 40,
      },
    },
  };

  const textVariants = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center
    md:h-full gap-15 py-10"
    >
      {/* IMAGE */}
      <div className="md:order-2 flex justify-center basic-3/5 z-10 mt-16 md:mt-32">
        {aboveMediumScreens ? (
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="show"
            className="relative z-0 ml-20 before:absolute before:-top-8 before:-left-14
             before:w-full before:max-w-[800px] before:h-full
            before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="ChrisXiong"
              src={profilePic}
              className="hover:filter hover:saturate-200 transition 
              duration-500 z-10 w-full max-width-[400px] md:max-w-[600px]"
            />
          </motion.div>
        ) : (
          <motion.img
            variants={mobileVariants}
            initial="hidden"
            animate="show"
            alt="ChrisXiong"
            src={profilePic}
            className="hover:filter hover:saturate-200 transition 
              duration-500 z-10 max-width-[400px] md:max-w-[600px]
              py-20 w-[450px] h-[700px]"
          />
        )}
      </div>
      {/* MAIN */}
      <div className="z-30 basis-1/2 mt-12 md:mt-32">
        {/* HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          animate="show"
          variants={mainVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-8xl font-satoshi text-semi-black font-extrabold 
           whitespace-nowrap flex z-10 text-center md:text-start "
            transition={{ duration: 1.2 }}
          >
            CHRIS XIONG
          </motion.h2>
        </motion.div>
        {/* DESCRIPTION */}
        <AnimatedText text={"Software Developer"} />
      </div>
    </section>
  );
};
export default Landing;
