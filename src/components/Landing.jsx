import useMediaQuery from "../hooks/useMediaQuery";
import { easeInOut, motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profilePic from "../assets/img1.JPG";

const Landing = ({ setSelectedPage }) => {
  const aboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const item = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: easeInOut,
        duration: 1.6,
      },
    },
  };

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center
    md:h-full gap-16 py-10"
    >
      {/* IMAGE */}
      <div className="md:order-2 flex justify-center basic-3/5 z-10 mt-16 md:mt-32">
        {aboveMediumScreens ? (
          <motion.div variants={item} initial="hidden" animate="show">
            <img alt="ChrisXiong" src={profilePic} width="600" />
          </motion.div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
};
export default Landing;
