import { useState, type ReactElement, type ReactNode } from "react";
import { ITEMS } from "../constants";
import { PaintingLabel } from "./PaintingLabel";

/* export interface ArtSliderProps { */
/*   children: ReactNode */
/* } */

export function ArtSlider(/* props: ArtSliderProps */): ReactElement {
  const [startIndex, setStartIndex] = useState(0);

  const ITEMS = [
    {
      title: "Lodowiec",
      price: 140.0,
      photo: <img src="/path/lodowiec.jpg" width={600} height={800} />,
    },
    {
      title: "Odpływ",
      price: 330.0,
      photo: <img src="/path/odplyw.jpg" width={600} height={800} />,
    },
    {
      title: "Linia",
      price: 90.0,
      photo: <img src="/path/linia.jpg" width={600} height={800} />,
    },
    {
      title: "Plastikowe Żółwie",
      price: 2300.0,
      photo: <img src="/path/plastikowe-zolwie.jpg" width={600} height={800} />,
    },
    {
      title: "Śnieżka",
      price: 2300.0,
      photo: <img src="/path/sniezka.jpg" width={600} height={800} />,
    },
  ];

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % ITEMS.length);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + ITEMS.length) % ITEMS.length);
  };

  const visibleItems = [
    ITEMS[startIndex],
    ITEMS[(startIndex + 1) % ITEMS.length],
    ITEMS[(startIndex + 2) % ITEMS.length],
  ];

  return (
    <div className="w-[90%]">
      <div className="flex flex-row justify-between items-center">
        <button onClick={handlePrevious} className="p-2 bg-gray-300 rounded">
          ←
        </button>
        <div className="flex flex-row gap-x-8">
          {visibleItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-4">
              {item.photo}
              <PaintingLabel
                paintingName={item.title}
                price={item.price}
                redirectPath={""}
              />
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="p-2 bg-gray-300 rounded">
          →
        </button>
      </div>
    </div>
  );
}
