import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type DirType = "left" | "right";
export type AnimationDirContextType = {
  direction: DirType;
  setDirection: Dispatch<SetStateAction<DirType>>;
};

type AnimationDirProvider = {
  children: ReactNode;
};
export const AnimationDirContext = createContext<
  AnimationDirContextType | undefined
>(undefined);

export const AnimationDirProvider = ({ children }: AnimationDirProvider) => {
  const [direction, setDirection] = useState<DirType>("right");
  return (
    <AnimationDirContext.Provider value={{ direction, setDirection }}>
      {children}
    </AnimationDirContext.Provider>
  );
};
