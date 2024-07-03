import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import sandwichMaker from "../assets/sandwich-maker.mp4";
import neonstreet from "../assets/neonstreet.jpg";
import AnimatedText from "./anim/AnimatedText";
import Cursor from "./anim/Cursor";

const projects = [
  {
    title: "Sandwich Maker",
    video: sandwichMaker,
    img: neonstreet,
    url: "https://github.com/xiongchris1/sandwich-maker-react-native",
  },
];

const Projects = ({ setSelectedPage }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Cursor hover={hovered} />
      <section
        id="projects"
        className="pb-24 pr-24 h-full overflow-hidden relative 
      bg-off-black text-off-white rounded-[30px] pt-10"
      >
        <div className="font-bold text-6xl ml-28 px-5 mt-10">
          <AnimatedText className="text-white" text={"Projects /"} />
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
