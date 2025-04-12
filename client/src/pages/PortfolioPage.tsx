import { type ReactElement } from "react";
import { Wrapper } from "../components/Wrapper";

//TODO: Replace with actual images from the API
const images = [
  { src: "https://via.assets.so/img.jpg?w=200&h=250", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=800&h=950", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=200&h=250", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=600&h=250", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=200&h=250", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=200&h=250", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=200&h=250", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=200&h=250", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=200&h=250", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=200&h=250", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=600&h=250", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=200&h=250", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=200&h=250", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=200&h=250", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=200&h=250", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=200&h=250", alt: "placeholder" },
  { src: "https://via.assets.so/img.jpg?w=200&h=250", alt: "placeholder" },
];

export function PortfolioPage(): ReactElement {
  const columns = 5;

  const getImagesForColumn = (columnIndex: number) => {
    return images.filter((_, index) => index % columns === columnIndex);
  };

  return (
    <Wrapper>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: columns }).map((_, columnIndex) => (
          <div key={`column-${columnIndex}`} className="grid gap-4">
            {getImagesForColumn(columnIndex).map((image, imageIndex) => (
              <div key={`img-${columnIndex}-${imageIndex}`}>
                <img
                  src={image.src}
                  alt={image.alt || ""}
                  className="h-auto max-w-full rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                />
              </div>
            ))}
          </div>
        ))}
      </div>{" "}
    </Wrapper>
  );
}
