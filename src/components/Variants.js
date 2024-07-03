const hoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { y: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 1.2,
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      staggerChildren: 0.05,
      ease: "easeIn",
      duration: 1.6,
    },
  },
};

const xiongVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 1,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: -125,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
  exit: {
    opacity: 0,
    y: 125,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const shapeVariants = {
  hidden: { opacity: 0, scale: 0, transition: { duration: 1.5 } },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: {
    opacity: 0,
    scale: 0,
    y: 100,
    transition: { ease: "easeInOut", duration: 0.7 },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    x: 300,
    transition: {
      duration: 2,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, -0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 80,
      damping: 20,
      delay: 0.8,
    },
  },
};

const mobileVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  show: {
    opacity: 1,
    transition: {
      ease: [0.6, -0.05, 0.21, 0.5],
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

const mainVariants = {
  hidden: { opacity: 0, y: 100, scale: 0 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 1.3,
      duration: 0.9,
      ease: [0.6, -0.05, 0.01, 0.99],
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.3,
    },
  },
};

export {
  mainVariants,
  mobileVariants,
  imageVariants,
  containerVariants,
  xiongVariants,
  textVariants,
  shapeVariants,
  hoverVariants,
};
