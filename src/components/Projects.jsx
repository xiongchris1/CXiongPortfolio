import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import sandwichMaker from "../assets/sandwich-maker.mp4";
import whiteRoom from "../assets/whiteroom.jpg";
import AnimatedText from "./anim/AnimatedText";
import useMediaQuery from "../hooks/useMediaQuery";

const projects = [
  {
    title: "Sandwich Maker",
    video: sandwichMaker,
    img: whiteRoom,
    url: "https://github.com/xiongchris1/sandwich-maker-react-native",
  },
];

const Projects = ({ setSelectedPage }) => {
  const [hovered, setHovered] = useState(false);
  const aboveMediumScreens = useMediaQuery("(min-width: 1061px)");

  return (
    <>
      {aboveMediumScreens ? (
        <section
          id="projects"
          className="pb-24 pr-24 h-full overflow-hidden relative 
          bg-off-black rounded-[40px] pt-7"
        >
          <div
            className="px-[120px] text-off-white text-6xl
          font-generalsans font-bold"
          >
            <AnimatedText text={"Projects /"} />
            <div className="mt-10 pl-[100px] grid grid-cols-1 gap-[10%]">
              {projects.map((project, index) => (
                <ProjectItem
                  key={index}
                  project={project}
                  setHovered={setHovered}
                />
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* MOBILE */
        <section
          id="projects"
          className="pb-24 h-full overflow-hidden relative 
          bg-off-black rounded-[30px] pt-10"
        >
          <div
            className="text-off-white text-5xl
           font-extrabold"
          >
            <AnimatedText className="text-center" text={"Projects /"} />
            <div className="mt-7 grid grid-cols-1 md:grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <ProjectItem
                  key={index}
                  project={project}
                  setHovered={setHovered}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Projects;
