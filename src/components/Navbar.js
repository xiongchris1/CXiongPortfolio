import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import logo from "../assets/logo.png";

/*ANCHOR LINKS*/
const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();

  /* ANIMATIONS */
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-blue" : ""}`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      <motion.a
        whileHover="onHover"
        initial="start"
        whileTap="onClick"
        className="relative block overflow-hidden whitespace-nowrap"
      >
        <motion.div
          variants={{
            start: { y: 0 },
            onHover: { y: "-100%", transition: { duration: 0.3 } },
          }}
        >
          {page}
        </motion.div>
        <motion.div
          variants={{
            onClick: { scale: 0.8 },
            start: { y: "100%" },
            onHover: { y: 0, transition: { duration: 0.3 } },
          }}
          className="absolute inset-0"
        >
          {page}
        </motion.div>
      </motion.a>
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const aboveMediumScreens = useMediaQuery("(min-width: 1061px)");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {aboveMediumScreens ? (
        <motion.nav
          variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
          className={`z-40 w-full fixed`}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="bg-off-white border-b-2 border-semi-black flex items-center justify-between 
        py-1 mx-auto "
          >
            {/* LOGO */}
            <motion.img
              initial={{ x: -900 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
              alt="logo"
              src={logo}
              className="md:flex ml-20 w-[100px] h-[100px] "
            />
            {/*Desktop Nav*/}
            <div
              className="flex justify-between gap-5  text-lg 
            p-3 rounded-full uppercase"
            >
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </motion.div>
        </motion.nav>
      ) : (
        /* MOBILE */
        <motion.nav
          variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
          className={`z-40 w-full fixed`}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="bg-off-white border-b-2 border-semi-black flex items-center justify-between 
            py-1 mx-auto"
          >
            {/* LOGO */}
            <motion.img
              initial={{ x: -900 }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
              alt="logo"
              src={logo}
              className="ml-3 w-[50px] h-[50px] "
            />
            {/*Desktop Nav*/}
            <div
              className="flex justify-between gap-5  text-lg 
              p-3 rounded-full uppercase"
            >
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </motion.div>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
