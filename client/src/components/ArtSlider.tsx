import React, { useState, useEffect, useRef } from "react";
import { PaintingLabel } from "./PaintingLabel";

export function ArtSlider(): React.ReactElement {
  const ITEMS = [
    {
      title: "Lodowiec",
      price: 140.0,
      photo: <img src="/2.Obrazy/Lodowiec/IMG_0907.JPG" />,
    },
    {
      title: "Odpływ",
      price: 330.0,
      photo: <img src="/2.Obrazy/Odpływ/IMG_0896.JPG" />,
    },
    {
      title: "Linia",
      price: 90.0,
      photo: <img src="/2.Obrazy/Linia/IMG_0908.JPG" />,
    },
    {
      title: "Plastikowe Żółwie",
      price: 2300.0,
      photo: <img src="/2.Obrazy/Plastikowe_żółwie/IMG_0916.JPG" />,
    },
    {
      title: "Śnieżka",
      price: 2300.0,
      photo: <img src="/2.Obrazy/Śnieżka/IMG_0919.JPG" />,
    },
  ];

  const extendedItems = [
    ITEMS[ITEMS.length - 1],
    ...ITEMS,
    ITEMS[0],
    ITEMS[1],
    ITEMS[2],
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) =>
        prev === extendedItems.length - 3 ? 1 : prev + 1,
      );
    }
  };

  const handlePrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) =>
        prev === 0 ? extendedItems.length - 3 : prev - 1,
      );
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        // Reset transition state after animation completes
        if (currentIndex === 0) {
          setCurrentIndex(ITEMS.length);
          sliderRef.current!.style.transition = "none";
          sliderRef.current!.style.transform = `translateX(-${ITEMS.length * 33.33}%)`;
        } else if (currentIndex === extendedItems.length - 3) {
          setCurrentIndex(1);
          sliderRef.current!.style.transition = "none";
          sliderRef.current!.style.transform = `translateX(-33.33%)`;
        }
      }, 500); // Czas trwania animacji

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isAnimating, ITEMS.length, extendedItems.length]);

  useEffect(() => {
    if (!isAnimating) return;

    sliderRef.current!.style.transition = "transform 0.5s ease-in-out";
    sliderRef.current!.style.transform = `translateX(-${currentIndex * 33.33}%)`;
  }, [currentIndex, isAnimating]);

  return (
    <div className="slider-container">
      <button onClick={handlePrevious} className="arrow-button">
        ←
      </button>
      <div className="slider">
        <div ref={sliderRef} className="slider-track">
          {extendedItems.map((item, index) => {
            const isCenter = index === currentIndex;
            return (
              <div
                key={index}
                className={`slider-item ${isCenter ? "scale-110" : "scale-95"}`}
              >
                <div className="flex flex-col mx-2 justify-center items-center gap-y-4">
                  {item.photo}
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
