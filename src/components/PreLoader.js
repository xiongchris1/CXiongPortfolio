import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import {
  containerVariants,
  xiongVariants,
  textVariants,
  shapeVariants,
} from "./Variants";

const PreLoader = ({ setLoading }) => {
  const [index, setIndex] = useState(0);
  const words = ["Hello", "I", "Am", "Chris Xiong"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, [setLoading]);

  useEffect(() => {
    if (index === words.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1500 : 400,
    );
  });

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
