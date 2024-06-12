import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [topPage, setTopPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setTopPage(true);
      if (window.scrollY !== 0) setTopPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-red">
      <Navbar
        topPage={topPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div classname="w-5/6 mx-auto md:h-full">
        <Landing setSelectedPage={setSelectedPage} />
      </div>
    </div>
  );
}

export default App;
