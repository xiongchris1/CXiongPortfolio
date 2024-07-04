import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import PreLoader from "./components/PreLoader";
import { AnimatePresence, motion } from "framer-motion";
import Projects from "./components/Projects";
import Lenis from "lenis";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [loading, setLoading] = useState(true);

  /* SMOOTH SCROLLING */
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  /*DISPLAY*/
  return (
    <div className="app">
      <AnimatePresence>
        {loading ? (
          <motion.div key="preloader">
            <PreLoader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Navbar
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              key="navbar"
            />
            <div className="w-5/6 mx-auto md:h-full">
              <Landing setSelectedPage={setSelectedPage} />
            </div>
            <div>
              <Projects setSelectedPage={setSelectedPage} />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
