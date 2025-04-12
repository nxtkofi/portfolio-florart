import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ITEMS } from "../constants";
import { PrimaryPainting } from "./PrimaryPainting";

interface IArtSlider {
  chevronColor?: string;
  labelColor?: string;
}

export function ArtSlider(props: IArtSlider): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [currentTranslate, setCurrentTranslate] = useState(33.33);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const extendedItems = [
    ITEMS[ITEMS.length - 2],
    ITEMS[ITEMS.length - 1],
    ...ITEMS,
    ITEMS[0],
    ITEMS[1],
    ITEMS[2],
  ];

  const [scaleManage, setScaleManage] = useState<boolean[]>(
    extendedItems.map((_, index) => currentIndex === index),
  );

  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimating) return;

    e.preventDefault();
    const touch = e.touches[0];
    setTouchStartX(touch.clientX);
    setTouchEndX(touch.clientX);

    if (sliderContainerRef.current) {
      setContainerWidth(sliderContainerRef.current.offsetWidth);
    }

    setCurrentTranslate((currentIndex - 1) * (isMobile ? 100 : 33.33));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX || isAnimating) return;

    e.preventDefault();
    const currentX = e.touches[0].clientX;
    setTouchEndX(currentX);

    const diff = touchStartX - currentX;
    const percentMove = (diff / containerWidth) * 100;
    const newTranslate = currentTranslate + percentMove;

    if (sliderRef.current) {
      sliderRef.current.style.transition = "none";
      sliderRef.current.style.transform = `translateX(-${newTranslate}%)`;
    }
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX || isAnimating) return;

    const diff = touchStartX - touchEndX;
    const percentMove = (diff / containerWidth) * 100;
    const threshold = 15;

    if (Math.abs(percentMove) > threshold) {
      if (percentMove > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    } else {
      if (sliderRef.current) {
        sliderRef.current.style.transition = "transform 0.3s ease-in-out";
        sliderRef.current.style.transform = `translateX(-${currentTranslate}%)`;
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

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
      sliderRef.current.style.transition = "none";
      sliderRef.current.style.transform = `translateX(-${(currentIndex - 1) * (isMobile ? 100 : 33.33)}%)`;
    }
  }, [isMobile]);

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        if (currentIndex === 1) {
          setScaleManage((prevArr) => {
            const newArr = [...prevArr];
            newArr[1] = false;
            return newArr;
          });
          setCurrentIndex(ITEMS.length + 1);
          if (sliderRef.current) {
            sliderRef.current.style.transition = "none";
            sliderRef.current.style.transform = `translateX(-${ITEMS.length * (isMobile ? 100 : 33.33)}%)`;
          }
        } else if (currentIndex === extendedItems.length - 3) {
          setScaleManage((prevArr) => {
            const newArr = [...prevArr];
            newArr[extendedItems.length - 3] = false;
            return newArr;
          });
          setCurrentIndex(2);
          if (sliderRef.current) {
            sliderRef.current.style.transition = "none";
            sliderRef.current.style.transform = `translateX(-${isMobile ? 100 : 33.33}%)`;
          }
        }
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isAnimating, ITEMS.length, extendedItems.length, isMobile]);

  useEffect(() => {
    if (!isAnimating) return;
    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
      sliderRef.current.style.transform = `translateX(-${(currentIndex - 1) * (isMobile ? 100 : 33.33)}%)`;
    }
  }, [currentIndex, isAnimating, isMobile]);

  return (
    <div className="slider-container">
      <button
        onClick={handlePrevious}
        className="relative z-50"
        aria-label="Previous painting"
      >
        <ChevronLeft
          color={props.chevronColor || "white"}
          className="absolute z-[30] -top-16 -left-6"
          size={72}
        />
      </button>
      <div className="slider py-16" ref={sliderContainerRef}>
        <div
          ref={sliderRef}
          className="slider-track"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {extendedItems.map((item, index) => (
            <PrimaryPainting
              key={index}
              labelColor={props.labelColor}
              use={"slider"}
              item={item}
              index={index}
              isCenter={scaleManage[index]}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        className="relative"
        aria-label="Next painting"
      >
        <ChevronRight
          color={props.chevronColor || "white"}
          className="absolute -top-16 -right-6 z-30"
          size={72}
        />
      </button>
    </div>
  );
}
