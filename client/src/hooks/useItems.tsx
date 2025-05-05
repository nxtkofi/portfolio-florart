import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";

export const useItems = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error("useItems hook must be used within ItemsProvider");
  }
  return context;
};
