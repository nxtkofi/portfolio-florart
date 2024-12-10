import React, { useState, useEffect, useRef } from "react";

export function ArtSlider(): React.ReactElement {
  const ITEMS = [
    {
      title: "Lodowiec",
      price: 140.0,
      photo: <img src="/lodowiec.jpg" width={600} height={800} />,
    },
    {
      title: "Odpływ",
      price: 330.0,
      photo: <img src="/odplyw.jpg" width={600} height={800} />,
    },
    {
      title: "Linia",
      price: 90.0,
      photo: <img src="/line.jpg" width={600} height={800} />,
    },
    {
      title: "Plastikowe Żółwie",
      price: 2300.0,
      photo: <img src="/plastikowe.jpg" width={600} height={800} />,
    },
    {
      title: "Śnieżka",
      price: 2300.0,
      photo: <img src="/sniezka.jpg" width={600} height={800} />,
    },
  ];

  const extendedItems = [
    ITEMS[ITEMS.length - 1], // Duplikat ostatniego
    ...ITEMS,
    ITEMS[0], // Duplikat pierwszego
    ITEMS[1], // Duplikat pierwszego
    ITEMS[2], // Duplikat pierwszego
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Startujemy od 1 (drugi element w extendedItems)
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Efekt do obsługi resetowania pętli
  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);

        if (currentIndex === 0) {
          // Jeśli wróciliśmy za daleko, resetujemy na ostatni prawdziwy element
          setCurrentIndex(ITEMS.length);
          sliderRef.current!.style.transition = "none";
          sliderRef.current!.style.transform = `translateX(-${ITEMS.length * 33.33}%)`;
        } else if (currentIndex === extendedItems.length - 3) {
          // Jeśli przeszliśmy za daleko, resetujemy na pierwszy prawdziwy element
          setCurrentIndex(1);
          sliderRef.current!.style.transition = "none";
          sliderRef.current!.style.transform = `translateX(-33.33%)`;
        }
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isAnimating, ITEMS.length, extendedItems.length]);

  // Aktualizacja przesunięcia za pomocą transformacji CSS
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
          {extendedItems.map((item, index) => (
            <div key={index} className="slider-item">
              {item.photo}
              <div>
                <div>{item.title}</div>
                <div>{item.price} zł</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNext} className="arrow-button">
        →
      </button>
    </div>
  );
}
