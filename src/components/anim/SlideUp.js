export const slideUp = {
  hidden: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 1.6,
      ease: "easeInOut",
    },
  },
};
