import { useState, useRef, useEffect } from "react";
import { PaintingLabel } from "./PaintingLabel";

const ITEMS = [
  {
    title: "Lodowiec",
    price: 140.0,
    photo: (
      <img className="zoomed-image" src="/2.Obrazy/Lodowiec/IMG_0907.JPG" />
    ),
  },
  {
    title: "Odpływ",
    price: 330.0,
    photo: <img className="zoomed-image" src="/2.Obrazy/Odpływ/IMG_0896.JPG" />,
  },
  {
    title: "Linia",
    price: 90.0,
    photo: <img className="zoomed-image" src="/2.Obrazy/Linia/IMG_0908.JPG" />,
  },
  {
    title: "Plastikowe Żółwie",
    price: 2300.0,
    photo: (
      <img
        className="zoomed-image"
        src="/2.Obrazy/Plastikowe_żółwie/IMG_0916.JPG"
      />
    ),
  },
  {
    title: "Śnieżka",
    price: 2300.0,
    photo: (
      <img className="zoomed-image" src="/2.Obrazy/Śnieżka/IMG_0919.JPG" />
    ),
  },
];

export function ArtSlider(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const extendedItems = [
    ITEMS[ITEMS.length - 2],
    ITEMS[ITEMS.length - 1],
    ...ITEMS,
    ITEMS[0],
    ITEMS[1],
    ITEMS[2],
  ];
  const [scaleManage, setScaleManage] = useState<boolean[]>(
    extendedItems.map((_, index) => {
      if (currentIndex === index) return true;
      else return false;
    }),
  );

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => {
        const newIndex = prev === extendedItems.length - 3 ? 1 : prev + 1;
        setScaleManage((prevArray) => {
          const updatedArray = [...prevArray];
          updatedArray[prev] = false;
          if (prev === ITEMS.length + 1) {
            updatedArray[2] = true;
          }
          updatedArray[newIndex] = true;
          return updatedArray;
        });

        return newIndex;
      });
    }
  };

  const handlePrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => {
        const newIndex = prev === 0 ? extendedItems.length - 4 : prev - 1;
        setScaleManage((prevArray) => {
          const updatedArray = [...prevArray];
          updatedArray[prev] = false;
          if (prev === 2) {
            updatedArray[ITEMS.length + 1] = true;
          }
          updatedArray[newIndex] = true;
          return updatedArray;
        });

        return newIndex;
      });
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = "none"; // Bez animacji przy inicjalizacji
      sliderRef.current.style.transform = `translateX(-${(currentIndex - 1) * 33.33}%)`;
    }
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        if (currentIndex === 1) {
          setScaleManage((prevArr) => [...prevArr, (prevArr[1] = false)]);

          setCurrentIndex(ITEMS.length + 1);
          sliderRef.current!.style.transition = "none";
          sliderRef.current!.style.transform = `translateX(-${ITEMS.length * 33.33}%)`;
        } else if (currentIndex === extendedItems.length - 3) {
          setScaleManage((prevArr) => [
            ...prevArr,
            (prevArr[extendedItems.length - 3] = false),
          ]);
          setCurrentIndex(2);
          sliderRef.current!.style.transition = "none";
          sliderRef.current!.style.transform = `translateX(-33.33%)`;
        }
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isAnimating, ITEMS.length, extendedItems.length]);

  useEffect(() => {
    if (!isAnimating) return;
    sliderRef.current!.style.transition = "transform 0.5s ease-in-out";
    sliderRef.current!.style.transform = `translateX(-${(currentIndex - 1) * 33.33}%)`;
  }, [currentIndex, isAnimating]);

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);
  return (
    <div className="slider-container">
      <button onClick={handlePrevious} className="arrow-button">
        ←
      </button>
      <div className="slider py-16">
        <div ref={sliderRef} className="slider-track">
          {extendedItems.map((item, index) => {
            let isCenter: boolean;
            scaleManage[index] === true
              ? (isCenter = true)
              : (isCenter = false);
            return (
              <div
                key={index}
                className={`slider-item transition-all duration-500 ${isCenter ? "scale-110" : "scale-90"}`}
              >
                <div className="flex flex-col mx-2 justify-center items-center gap-y-4">
                  <div className="zoomed-image-container">{item.photo}</div>

                  <PaintingLabel
                    paintingName={item.title}
                    price={item.price}
                    redirectPath={""}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={handleNext} className="arrow-button">
        →
      </button>
    </div>
  );
}
