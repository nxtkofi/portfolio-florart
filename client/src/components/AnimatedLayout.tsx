import { useEffect, type ReactElement, type ReactNode } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useAnimationDir } from "../hooks/useAnimationDir";
import { motion } from "framer-motion";

export interface AnimatedLayoutProps {
  children: ReactNode;
}
export function AnimatedLayout(props: AnimatedLayoutProps): ReactElement {
  const windowDimensions = useWindowDimensions();
  const { direction } = useAnimationDir();

  const pageVariants = {
    initial: (direction: "left" | "right") => ({
      x:
        direction === "right"
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
    exit: (direction: "left" | "right") => ({
      x:
        direction === "right"
          ? -windowDimensions.width / 2
          : windowDimensions.width - 96,
      opacity: 0,
      filter: "blur(10px)",
    }),
  };
  return (
    <motion.div
      custom={direction}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      variants={pageVariants}
    >
      {props.children}
    </motion.div>
  );
}
