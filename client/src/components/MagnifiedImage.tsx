import { useState, useRef } from "react";
type Props = {
  src: string;
  containerClassName?: string;
  imageClassName?: string;
};

function MagnifiedImage({ src, containerClassName, imageClassName }: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 }); // Domyślnie środek
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = 1.5;

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setPosition({ x: 0.5, y: 0.5 });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setPosition({ x, y });
    }
  };

  const imageStyle = {
    transform: isHovering ? `scale(${scale})` : "scale(1)",
    transformOrigin: `${position.x * 100}% ${position.y * 100}%`,
    transition: isHovering ? "transform 0.3s ease-out" : "all 0.3s ease-out",
  };

  return (
    <div
      className={containerClassName}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        className={imageClassName}
        src={src}
        alt="Przykładowy obraz"
        style={imageStyle}
      />
    </div>
  );
}
export default MagnifiedImage;
