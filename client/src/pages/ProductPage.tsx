import { useEffect, useState, type ReactElement } from "react";
import { useParams } from "react-router-dom";
import { ITEMS } from "../constants";
import { ItemType } from "../types";
import { SidePanel } from "../components/SidePanel";

export function ProductPage(): ReactElement {
  const params = useParams();
  const [item, setItem] = useState<ItemType>();
  const [a, setA] =  useState();
  useEffect(() => {
    // Here we will use params.id to grab item from API.
    // For now we'll use predefined ITEMS constant
    setItem(ITEMS.find((item) => params.id === item.id));
  }, []);
  return (
    <div className="background-primary p-8">
      {item && (
        <>
          <img src={item.photo} />
          <SidePanel
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
          />
        </>
      )}
    </div>
  );
}
