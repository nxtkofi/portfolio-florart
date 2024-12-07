import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, ReactElement } from "react";
import { Navbar } from "./Navbar";
import useWindowDimensions from "../hooks/useWindowDimensions";

const PAGES_ORDER = [
  "/",
  "/about-me",
  "/paintings",
  "/portfolio",
  "/order",
  "/contact",
];

export default function Layout(): ReactElement {
  const windowDimensions = useWindowDimensions();
  const location = useLocation();
  const [chosenDirection, setChosenDirection] = useState<string>(
    location.pathname,
  ); //value of NAVBARLINKS.path
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right"
  >("right");

  useEffect(() => {
    let currentPathIndex = PAGES_ORDER.indexOf(location.pathname);
    let futurePathIndex = PAGES_ORDER.indexOf(chosenDirection);
    if (futurePathIndex > currentPathIndex) {
      setAnimationDirection("right");
    } else setAnimationDirection("left");
  }, [location, chosenDirection]);

  const pageVariants = {
    initial: (animationDirection: "left" | "right") => ({
      x:
        animationDirection === "right"
          ? windowDimensions.width - 96
          : -windowDimensions.width / 2,
      opacity: 0,
      filter: "blur(10px)",
    }),
    animate: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (animationDirection: "left" | "right") => ({
      x:
        animationDirection === "left"
          ? -windowDimensions.width / 2
          : windowDimensions.width - 96,
      opacity: 0,
      filter: "blur(10px)",
    }),
  };
  return (
    <div>
      <Navbar setDirection={setChosenDirection} />
      <motion.div
        key={location.pathname}
        custom={animationDirection}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Outlet />
      </motion.div>
    </div>
  );
}
