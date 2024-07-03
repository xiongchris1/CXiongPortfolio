import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, className, ...props }) => {
  const word = text.split("");

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.05 * i,
        delay: 1,
      },
    }),
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: 20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      className={`ml-10 mt-5 text-semi-black ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {word.map((word, index) => (
        <motion.span variants={childVariants} className="text-3xl" key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
