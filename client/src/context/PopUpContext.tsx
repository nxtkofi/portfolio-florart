import { createContext, PropsWithChildren, useState } from "react";

interface PopUpContextProps {
  popUpShown: boolean;
  setPopUpShown: (value: boolean) => void;
  isReserve: boolean;
  setIsReserve: (value: boolean) => void;
}

export const PopUpContext = createContext<PopUpContextProps | undefined>(
  undefined,
);

export const PopUpProvider = ({ children }: PropsWithChildren) => {
  const [popUpShown, setPopUpShown] = useState(false);
  const [isReserve, setIsReserve] = useState(false);
  return (
    <PopUpContext.Provider
      value={{ popUpShown, setPopUpShown, isReserve, setIsReserve }}
    >
      {children}
    </PopUpContext.Provider>
  );
};
