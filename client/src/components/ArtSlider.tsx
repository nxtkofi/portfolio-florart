import React, { useState, useEffect, useRef } from "react";
import { PaintingLabel } from "./PaintingLabel";

// NOTE: Consider not doing an infinite slide. The amount of time that was spent on doing this will not be worth it at some point
// Your alternatives are:
// - Make an ending slide
// - Make it slide all the way to the start when You reach the end and the other way around

export function ArtSlider(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>();
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = "none"; // Bez animacji przy inicjalizacji
      sliderRef.current.style.transform = `translateX(-${(currentIndex - 1) * 33.33}%)`;
    }
  }, []);
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
      photo: (
        <img className="zoomed-image" src="/2.Obrazy/Odpływ/IMG_0896.JPG" />
      ),
    },
    {
      title: "Linia",
      price: 90.0,
      photo: (
        <img className="zoomed-image" src="/2.Obrazy/Linia/IMG_0908.JPG" />
      ),
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

  const extendedItems = [
    ITEMS[ITEMS.length - 2],
    ITEMS[ITEMS.length - 1],
    ...ITEMS,
    ITEMS[0],
    ITEMS[1],
    ITEMS[2],
  ];

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
        prev === 0 ? extendedItems.length - 4 : prev - 1,
      );
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        if (currentIndex === 1) {
          setCurrentIndex(ITEMS.length + 1);
          sliderRef.current!.style.transition = "none";
          sliderRef.current!.style.transform = `translateX(-${ITEMS.length * 33.33}%)`;
        } else if (currentIndex === extendedItems.length - 3) {
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
    <div className="slider-container ">
      <button onClick={handlePrevious} className="arrow-button">
        ←
      </button>
      <div className="slider py-16">
        <div ref={sliderRef} className="slider-track">
          {extendedItems.map((item, index) => {
            const isCenter = index === currentIndex;
            return (
              <div
                key={index}
                className={`slider-item transition-all ${isCenter ? "scale-110" : "scale-90"}`}
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
