declare module "react-image-gallery" {
  import { ComponentType } from "react";
  interface ImageGalleryProps {
    items: Array<{ original: string; thumbnail: string }>;
    showPlayButton: boolean;
    showFullscreenButton: boolean;
    originalClass?: string;
    showBullet?: boolean;
    additionalClass?: string;
    renderLeftNav?: (onClick: () => void) => JSX.Element;
    renderRightNav?: (onClick: () => void) => JSX.Element;
    onClick?: (arg0: React.MouseEvent<HTMLDivElement>, arg1: number) => void;
    thumbnailPosition?:"left"|"right"|"top"|"bottom";
  }
  const ImageGallery: ComponentType<ImageGalleryProps>;
  export default ImageGallery;
}
