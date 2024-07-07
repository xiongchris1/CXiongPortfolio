import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import { cursorVariants } from "./Variants";

const ProjectItem = ({ project }) => {
  const aboveMediumScreens = useMediaQuery("(min-width: 800px)");
  const [cursorPos, setCursorPos] = useState({ top: 0, left: 0 });
  const [hover, setHover] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    window.location.href = project.url;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ref.current && hover) {
        const rect = ref.current.getBoundingClientRect();
        setCursorPos({
          top: e.clientY - rect.top,
          left: e.clientX - rect.left,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hover]);

  return (
    <>
      {aboveMediumScreens ? (
        /* DESKTOP */
        <motion.div className="relative flex items-center w-[140%] lg:pt-20">
          {/* Project Details */}
          <div className="z-10 absolute">
            <p
              className="text-4xl lg:text-8xl lg:-ml-[20%] lg:absolute font-bold
              text-off-white md:absolute md:ml-11"
            >
              {project.title}
            </p>
          </div>
          <motion.div
            className="relative flex justify-center items-center ml-[35%] h-[100%] "
            style={{
              width: "50vw",
              maxWidth: "900px",
              maxHeight: "900px",
            }}
            whileHover={{ cursor: "pointer" }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            ref={ref}
            onClick={handleClick}
          >
            {/* Background Image */}
            <img
              src={project.img}
              alt={project.title}
              className="object-cover w-full h-full z-0 rounded-lg"
            />
            {/* CURSOR */}
            {hover && (
              <motion.div
                initial="hidden"
                animate="visible"
                className="absolute p-[70px] bg-blue w-[70px] h-[70px] 
                flex items-center justify-center z-50 -translate-y-1/2 
                pointer-events-none rounded-full text-2xl transform -translate-x-1/2"
                style={{
                  top: `${cursorPos.top}px`,
                  left: `${cursorPos.left}px`,
                }}
              >
                View
              </motion.div>
            )}
            {/* Video */}
            <div className="absolute inset-0 flex justify-center items-center">
              <video
                loop
                autoPlay
                muted
                className="shadow-lg z-10 w-[56%] h-[86%] pointer-events-none"
                width="210"
                src={project.video}
              >
                Your browser does not support this video.
              </video>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <>
          {/* MOBILE */}
          <div onClick={handleClick}>
            <motion.div
              whileHover={{ cursor: "pointer" }}
              className="relative flex justify-center items-center"
            >
              {/* Background Image */}
              <div className="relative flex justify-center items-center h-[400px] w-[300px]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 object-cover w-[300px]
                h-[400px] z-0 rounded-lg"
                />

                {/* Video */}
                <div className="relative flex items-center justify-center h-[500px]">
                  <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    className="shadow-lg z-10"
                    width="150"
                    src={project.video}
                  >
                    Your browser does not support this video.
                  </video>
                </div>
              </div>
            </motion.div>

            {/* Project Details */}
            <div className="z-10 mt-4 px-[24%] flex flex-col items-start">
              <p className="text-2xl lg:text-3xl text-off-white">
                {project.title}
              </p>
            </div>
            <div
              className="absolute text-[18px] text-gray-400 mt-1 ml-11 flex flex-col 
              px-2 py-[2px] bg-transparent border-gray-400 border rounded-full"
            >
              <span className="flex text-center">REACT</span>
            </div>
            <div
              className="absolute text-[18px] text-gray-400 mt-1 ml-[125px]
              px-2 py-[2px] bg-transparent border-gray-400 border rounded-full"
            >
              <span className="flex text-center">THREEJS</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectItem;
