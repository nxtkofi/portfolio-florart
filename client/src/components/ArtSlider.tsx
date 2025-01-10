import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ITEMS } from "../constants";
import { PrimaryPainting } from "./PrimaryPainting";

interface IArtSlider {
  chevronColor?: string;
  labelColor?:string
}
export function ArtSlider(props: IArtSlider): React.ReactElement {
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
      <button
        onClick={handlePrevious}
        className="relative"
        aria-label="Previous painting"
      >
        <ChevronLeft
          color={props.chevronColor || "white"}
          className="absolute z-10 -top-16 -left-6"
          size={72}
        />
      </button>
      <div className="slider py-16">
        <div ref={sliderRef} className="slider-track">
          {extendedItems.map((item, index) => {
            let isCenter: boolean;
            scaleManage[index] === true
              ? (isCenter = true)
              : (isCenter = false);
            return (
              <PrimaryPainting
                labelColor={props.labelColor}
                use={"slider"}
                item={item}
                index={index}
                isCenter={isCenter}
              />
            );
          })}
        </div>
      </div>
      <button
        onClick={handleNext}
        className="relative"
        aria-label="Next painting"
      >
        <ChevronRight
          color={props.chevronColor || "white"}
          className="absolute -top-16 -right-6 z-40"
          size={72}
        />
      </button>
    </div>
  );
}
