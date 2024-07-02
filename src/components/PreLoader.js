import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { slideUp } from "./anim/SlideUp.js";

const PreLoader = ({ setLoading }) => {
  const [index, setIndex] = useState(0);
  const words = ["Hello", "I", "Am", "Chris Xiong"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  useEffect(() => {
    if (index === words.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 2000 : 450,
    );
  });

  const containerVariants = {
    hidden: { y: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 1.2,
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        staggerChildren: 0.05,
        ease: "easeIn",
        duration: 1.6,
      },
    },
  };

  const xiongVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      scale: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: -125,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
    exit: {
      opacity: 0,
      y: 125,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0, transition: { duration: 1.5 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: {
      opacity: 0,
      scale: 0,
      y: 100,
      transition: { ease: "easeInOut", duration: 0.7 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 flex z-50 items-center
      overflow-hidden justify-center bg-black"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.div className="flex flex-col items-center justify-center">
        {index < 3 && (
          <motion.span
            className="text-white px-5 text-5xl font-bold"
            variants={textVariants}
          >
            {words[index]}
          </motion.span>
        )}
        {index === 3 && (
          <motion.span
            variants={xiongVariants}
            className="px-5 text-5xl font-bold font-satoshi text-off-white"
          >
            CHRIS
            <br />
            XIONG
          </motion.span>
        )}
      </motion.div>
      <motion.div className="flex justify-center" variants={shapeVariants}>
        <motion.img
          alt="logo"
          src={logo}
          className="bg-off-white w-[90px] h-[90px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default PreLoader;
