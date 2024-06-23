import useMediaQuery from "../hooks/useMediaQuery";
import { easeInOut, motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profilePic from "../assets/img1.JPG";

const Landing = ({ setSelectedPage }) => {
  const aboveMediumScreens = useMediaQuery("(min-width: 1061px)");

  const item = {
    hidden: {
      opacity: 1,
      y: 201,
    },
    show: {
      opacity: 2,
      y: 1,
      transition: {
        ease: easeInOut,
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
            variants={item}
            initial="hidden"
            animate="show"
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20
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
          <img
            alt="ChrisXiong"
            src={profilePic}
            className="hover:filter hover:saturate-200 transition 
              duration-500 z-10 max-width-[400px] md:max-w-[600px]
              py-20 w-[450px] h-[700px]"
          />
        )}
      </div>
    </section>
  );
};
export default Landing;
