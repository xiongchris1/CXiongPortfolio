import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import profilePic from "../assets/img2.JPG";
import AnimatedText from "./anim/AnimatedText";
import { mainVariants, mobileVariants, imageVariants } from "./Variants";

const Landing = ({ setSelectedPage }) => {
  const aboveMediumScreens = useMediaQuery("(min-width: 800px)");

  return (
    <section
      id="home"
      className="w-full flex flex-col md:flex-row md:justify-between md:items-center md:h-full gap-10 py-10"
    >
      {/* IMAGE */}
      <div
        className="md:order-2 w-full md:w-[40%]
        z-10 mt-16 md:mt-32"
      >
        {aboveMediumScreens ? (
          <motion.div variants={imageVariants} initial="hidden" animate="show">
            <img
              alt="ChrisXiong"
              src={profilePic}
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-[560px]"
            />
          </motion.div>
        ) : (
          <div className="-mt-[60px] flex flex-col items-center w-full">
            <motion.img
              variants={mobileVariants}
              initial="hidden"
              animate="show"
              alt="ChrisXiong"
              src={profilePic}
              className="z-10 py-10 max-w-[300px] w-full h-auto"
            />
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={mainVariants}
              className="text-5xl font-bold text-semi-black text-center"
            >
              CHRIS XIONG
            </motion.h2>
          </div>
        )}
      </div>
      {/* MAIN */}
      <div className="z-30 w-full -mt-[50px] md:w-1/2 md:mt-32 flex flex-col items-center md:items-start">
        {/* HEADING */}
        {aboveMediumScreens ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            animate="show"
            variants={mainVariants}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full ml-20"
          >
            <motion.h2
              className="text-9xl text-semi-black font-extrabold z-10 md:text-start text-center"
              transition={{ duration: 1.2 }}
            >
              CHRIS XIONG
            </motion.h2>
          </motion.div>
        ) : null}
        {/* DESCRIPTION */}
        <AnimatedText
          className={`text-3xl ${aboveMediumScreens ? "px-[150px]" : "text-center font-thin"} text-semi-black`}
          text={"Software Developer"}
        />
      </div>
    </section>
  );
};

export default Landing;
