import React from "react";
import { motion } from "framer-motion";
import { hoverVariants } from "./Variants";
import useMediaQuery from "../hooks/useMediaQuery";

const ProjectItem = ({ project, setHovered }) => {
  const aboveMediumScreens = useMediaQuery("(min-width: 1061px)");
  const handleClick = () => {
    window.location.href = project.url;
  };

  return (
    <>
      {aboveMediumScreens ? (
        <motion.div className="relative flex items-center">
          {/* Project Details */}
          <div className="z-10 absolute">
            <p className="text-4xl font-thin text-off-white">{project.title}</p>
          </div>
          <motion.div
            className="relative flex justify-center items-center ml-[40%] h-[100%] "
            style={{
              width: "50vw",
              maxWidth: "900px",
              maxHeight: "900px",
            }}
            whileHover={{ cursor: "pointer" }}
          >
            {/* Background Image */}
            <img
              src={project.img}
              onClick={handleClick}
              alt={project.title}
              className="object-cover w-full h-full z-0 rounded-lg "
            />
            {/* Video */}
            <div className="absolute inset-0 flex justify-center items-center">
              <video
                loop
                autoPlay
                muted
                className="shadow-lg z-10 w-[56%] h-[86%]"
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
              variants={hoverVariants}
              whileHover="hover"
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
            <div className=" z-10 mt-4 px-12">
              <p className="text-2xl text-off-white">{project.title}</p>
            </div>
            <div
              className="absolute text-[18px] text-gray-400 mt-1 ml-11 
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
