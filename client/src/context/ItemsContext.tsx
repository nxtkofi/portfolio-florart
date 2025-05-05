import axios from "axios";
import { createContext, useState, useEffect, ReactNode } from "react";
import { API_BASE } from "../helpers/apiroutes";

export interface ImageType {
  url: string;
  id: number;
  formats: {
    thumbnail: { name: string; url: string };
  };
}
export interface ItemType {
  id: string;
  slug: string;
  title: string;
  material: string;
  price: number;
  images: ImageType[];
  instagramLink?: string;
  dimensions: string;
  sold?: boolean;
}

interface ItemsContextProps {
  items: ItemType[] | null;
  setItems: React.Dispatch<React.SetStateAction<ItemType[] | null>>;
  loading: boolean;
  error: string | null;
}

export const ItemsContext = createContext<ItemsContextProps | undefined>(
  undefined,
);

interface ItemsProviderProps {
  children: ReactNode;
}

export const ItemsProvider: React.FC<ItemsProviderProps> = ({ children }) => {
  const [items, setItems] = useState<ItemType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(API_BASE + "/products?populate=*");
        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }
        const data: ItemType[] = await response.data.data;
        setItems(data);
        console.log("Fetched items:", data);
      } catch (e: any) {
        setError(e.message || "Wystąpił błąd podczas pobierania danych.");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const value: ItemsContextProps = {
    items,
    setItems,
    loading,
    error,
  };

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};
