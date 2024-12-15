import { AnimatePresence } from "framer-motion";
import React from "react";
import { useLocation, useOutlet } from "react-router";
import { useAnimationDir } from "../hooks/useAnimationDir";

const AnimatedOutlet = (): React.JSX.Element => {
  const { direction } = useAnimationDir();
  const element = useOutlet();
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={true} custom={direction}>
      {element && React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};

export default AnimatedOutlet;
