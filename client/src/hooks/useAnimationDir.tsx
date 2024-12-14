import { useContext } from "react";
import {
  AnimationDirContext,
  AnimationDirContextType,
} from "../context/AnimationDirContext";

export function useAnimationDir(): AnimationDirContextType {
  const context = useContext(AnimationDirContext);
  if (context === undefined) {
    throw new Error(
      "Animation direction context must be used within its provider.",
    );
  }
  return context;
}
