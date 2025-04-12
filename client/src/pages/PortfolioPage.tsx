import { type ReactElement } from "react";
import { Wrapper } from "../components/Wrapper";
//TODO: Replace with actual images from the API

const images = [
  { src: "./3.Portfolio/IMG_0920.JPG", alt: "placeholder 1" },
  { src: "./3.Portfolio/IMG_0914.JPG", alt: "placeholder c" },
  { src: "./3.Portfolio/IMG_0905.JPG", alt: "placeholder 2" },
  { src: "./3.Portfolio/IMG_0921.JPG", alt: "placeholder 5 - duplicate" },
  { src: "./3.Portfolio/IMG_0918.JPG", alt: "placeholder 6" },
  { src: "./3.Portfolio/IMG_0905.JPG", alt: "placeholder y" },
  {
    src: "./2.Obrazy/\Dzień przed końcem świata\/IMG_1393.jpeg",
    alt: "placeholder b",
  },
  { src: "./3.Portfolio/IMG_0914.JPG", alt: "placeholder z" },
  { src: "./3.Portfolio/IMG_0914.JPG", alt: "placeholder 4" },
  {
    src: "./2.Obrazy/\Dzień przed końcem świata\/IMG_1393.jpeg",
    alt: "placeholder j",
  },
  { src: "./3.Portfolio/IMG_0920.JPG", alt: "placeholder x" }, 

  { src: "./3.Portfolio/IMG_0920.JPG", alt: "placeholder f" }, 
  { src: "./3.Portfolio/IMG_0921.JPG", alt: "placeholder d" },
  {
    src: "./2.Obrazy/\Dzień przed końcem świata\/IMG_1393.jpeg",
    alt: "placeholder h",
  },
  { src: "./3.Portfolio/IMG_0921.JPG", alt: "placeholder a" },
  { src: "./3.Portfolio/IMG_0905.JPG", alt: "placeholder g" },
];

export function PortfolioPage(): ReactElement {
  return (
    <Wrapper>
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-12">
        {images.map((image, index) => (
          <div key={`img-${index}`} className="mb-4 break-inside-avoid">
            <img
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
              className="h-auto w-full rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-lg"
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
