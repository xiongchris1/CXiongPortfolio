import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 z-50 pointer-events-none ${hovered ? "opacity-100" : "opacity-0"}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px,0)` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: hovered ? 1 : 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div
        className="bg-blue absolute rounded-full w-20 
        items-center justify-center flex h-20 font-bold"
        style={{ transform: "translate(-50%,-50%)" }}
      >
        View
      </div>
    </motion.div>
  );
};

export default Cursor;
