import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profilePic from "../assets/img2.JPG";
import AnimatedText from "./anim/AnimatedText";
import { mainVariants, mobileVariants, imageVariants } from "./Variants";

const Landing = ({ setSelectedPage }) => {
  const aboveMediumScreens = useMediaQuery("(min-width: 1061px)");

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
        <AnimatedText
          className="text-3xl px-10 text-semi-black"
          text={"Software Developer"}
        />
      </div>
    </section>
  );
};
export default Landing;
