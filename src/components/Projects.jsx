import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import sandwichMaker from "../assets/sandwich-maker.mp4";
import neonstreet from "../assets/neonstreet.jpg";
import AnimatedText from "./anim/AnimatedText";

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
      <section
        id="projects"
        className="pb-24 pr-24 h-full overflow-hidden relative 
      bg-off-black rounded-[30px] pt-10"
      >
        <div
          className="px-[120px] text-off-white text-6xl
          font-generalsans font-bold"
        >
          <AnimatedText text={"Projects /"} />
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectItem
                key={index}
                project={project}
                setHovered={setHovered}
              />
            ))}
          </div>
        </div>
        <div
          className="absolute bg-blue w-[70px] h-[70px] 
          flex items-center justify-center 
          pointer-events-none rounded-full"
        >
          View
        </div>
      </section>
    </>
  );
};

export default Projects;
