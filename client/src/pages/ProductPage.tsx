import axios from "axios";
import { useEffect, useState, type ReactElement } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ArtSlider } from "../components/ArtSlider";
import { CustomNav } from "../components/CustomNav";
import { SidePanel } from "../components/SidePanel";
import { ItemType } from "../context/ItemsContext";
import { API_BASE, API_URL } from "../helpers/apiroutes";
import { useItems } from "../hooks/useItems";
import useWindowDimensions from "../hooks/useWindowDimensions";

export function ProductPage(): ReactElement {
  const { items } = useItems();
  const params = useParams();
  const [item, setItem] = useState<ItemType>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { width } = useWindowDimensions();

  const openImageLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxSlides = item?.images.map((img) => ({
    src: API_URL + img.url,
  }));

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        API_BASE + `/products?filters[id][$eq]=${params.id}&populate=images`,
      );
      console.log("Fetched item:", data.data.data[0]);

      setItem(data.data.data[0]);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="background-primary px-8 py-16 min-h-[800px]">
        {item && (
          <div className="flex md:flex-row flex-col justify-center">
            <ImageGallery
              thumbnailPosition={`${width > 768 ? "left" : "bottom"}`}
              onClick={(_: React.MouseEvent<HTMLDivElement>, index: number) =>
                openImageLightbox(index)
              }
              renderLeftNav={(onClick) => {
                return <CustomNav onClick={onClick} isLeft={true} />;
              }}
              renderRightNav={(onClick) => {
                return <CustomNav onClick={onClick} isLeft={false} />;
              }}
              showPlayButton={false}
              showFullscreenButton={false}
              additionalClass=" sm:min-w-[420px] w-full max-w-[768px]"
              items={item.images.map((image) => {
                return {
                  original: API_URL + image.url,
                  thumbnail: API_URL + image.formats.thumbnail.url,
                };
              })}
            />
            <SidePanel
              price={item.price}
              title={item.title}
              subtitle={item.material + "\n" + item.dimensions + " [cm]"}
              instagramLink={item.instagramLink}
            />
          </div>
        )}
      </div>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
      />
      <div className="mt-16 -mb-8 md:mb-0 text-center text-4xl font-unna font-light">
        Zobacz też
      </div>
      {items && <ArtSlider labelColor="#f9f9f8" chevronColor="#4a4b4e" />}
    </>
  );
}
