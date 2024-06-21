import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import closeIcon from "../assets/close-icon.svg";
import menuIcon from "../assets/menu-icon.svg";
import logo from "../assets/c_logo.png";

/*ANCHOR LINKS*/
const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();

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
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <nav className="{`z-40 w-full fixed top-1 py-5 `}">
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-generalsans text-3xl font-bold">CHRIS</h4>
        {/*Desktop Nav*/}
        {isAboveSmallScreens ? (
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
        ) : (
          <button
            className="rounded-xl bg-clay p-3"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src={menuIcon} width="35" />
          </button>
        )}
        {/* Mobile menu pop up */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-deep-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-5">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src={closeIcon} width="40" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[22%] text-4xl font-extrabold text-white">
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
