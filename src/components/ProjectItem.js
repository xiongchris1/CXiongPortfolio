import React from "react";
import { motion } from "framer-motion";
import { hoverVariants } from "./Variants";

const ProjectItem = ({ project, setHovered }) => {
  const handleClick = () => {
    window.location.href = project.url;
  };

  return (
    <div className="relative" onClick={handleClick}>
      <motion.div variants={hoverVariants} whileHover="hover">
        {/* Background Image */}
        <img
          src={project.img}
          alt={project.title}
          className="absolute inset-0 object-cover w-full 
        h-[500px] z-0 rounded-lg"
        />

        {/* Video */}
        <div className="relative flex items-center justify-center h-[500px]">
          <video
            loop
            autoPlay
            muted
            className="shadow-lg z-10"
            width="210"
            src={project.video}
          >
            Your browser does not support this video.
          </video>
        </div>
      </motion.div>

      {/* Project Details */}
      <div
        className="relative flex flex-col justify-center
        items-center text-center z-10 mt-10"
      >
        <p className="text-3xl font-thin text-off-white">{project.title}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
