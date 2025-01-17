import { useContext } from "react";
import {PopUpContext} from "../context/PopUpContext";

export const usePopUp = () => {
  const context = useContext(PopUpContext);
  if (context === undefined) {
    throw new Error("PopUp context must be used within its provider.");
  }
  return context;
};
