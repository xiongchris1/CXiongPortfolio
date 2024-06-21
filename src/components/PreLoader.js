import { motion } from "framer-motion";
import logo from "../assets/c_logo.png";

const PreLoader = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="fixed inset-0 flex z-55 items-center
      overflow-hidden justify-center bg-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col items-center justify-center">
        <motion.span
          className=" text-white px-5 text-5xl font-bold"
          variants={textVariants}
        >
          Chris
        </motion.span>
        <motion.span
          className="py-1 text-5xl items-center justify-between 
        font-bold text-white overflow-hidden"
          variants={textVariants}
        >
          Xiong
        </motion.span>
      </div>
      <motion.div className=" flex justify-center" variants={containerVariants}>
        <motion.img
          alt="logo"
          src={logo}
          className="rounded-full "
          variants={shapeVariants}
        ></motion.img>
      </motion.div>
    </motion.div>
  );
};
export default PreLoader;
