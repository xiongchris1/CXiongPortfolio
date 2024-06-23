import { AnimatePresence, easeInOut, motion } from "framer-motion";
import logo from "../assets/logo.png";
import { useEffect } from "react";

const PreLoader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  });

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
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
    exit: {
      opacity: 0,
      y: -900,
      transition: { ease: easeInOut, duration: 1.6 },
    },
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: {
      opacity: 0,
      y: 700,
      transition: { ease: easeInOut, duration: 1.8 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 flex z-55 items-center
      overflow-hidden justify-center bg-black"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="flex flex-col items-center justify-center">
        <motion.span
          className=" text-white px-5 text-5xl font-bold"
          variants={textVariants}
          key="chris"
        >
          CHRIS
        </motion.span>
        <motion.span
          className="py-1 text-5xl items-center justify-between 
        font-bold text-white overflow-hidden"
          variants={textVariants}
          key="xiong"
        >
          XIONG
        </motion.span>
      </div>
      <motion.div className="flex justify-center" variants={containerVariants}>
        <motion.img
          layoutId={"logo"}
          alt="logo"
          src={logo}
          className=" bg-white border-white w-[90px] h-[90px] "
          variants={shapeVariants}
          transition={{ duration: 1.1, ease: easeInOut }}
        />
      </motion.div>
    </motion.div>
  );
};
export default PreLoader;
