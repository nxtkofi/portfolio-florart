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
  }
  const ImageGallery: ComponentType<ImageGalleryProps>;
  export default ImageGallery;
}
