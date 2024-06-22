import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import PreLoader from "./components/PreLoader";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [topPage, setTopPage] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setTopPage(true);
      if (window.scrollY !== 0) setTopPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*DISPLAY*/
  return (
    <div className="app bg-red">
      <AnimatePresence>
        {loading ? (
          <motion.div key="preloader">
            <PreLoader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Navbar
              topPage={topPage}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              key="navbar"
            />
            <div className="w-5/6 mx-auto md:h-full">
              <Landing setSelectedPage={setSelectedPage} />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
