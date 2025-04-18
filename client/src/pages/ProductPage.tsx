import { useEffect, useState, type ReactElement } from "react";
import { useParams } from "react-router-dom";
import { ITEMS } from "../constants";
import ImageGallery from "react-image-gallery";
import { ItemType } from "../types";
import { SidePanel } from "../components/SidePanel";
import "react-image-gallery/styles/css/image-gallery.css";
import { CustomNav } from "../components/CustomNav";
import { ArtSlider } from "../components/ArtSlider";

export function ProductPage(): ReactElement {
  const params = useParams();
  const [item, setItem] = useState<ItemType>();
  useEffect(() => {
    setItem(ITEMS.find((item) => params.id === item.id));
  }, []);
  return (
    <>
      <div className="background-primary px-8 py-16">
        {item && (
          <div className="flex md:flex-row flex-col justify-center">
            <ImageGallery
              renderLeftNav={(onClick) => {
                return <CustomNav onClick={onClick} isLeft={true} />;
              }}
              renderRightNav={(onClick) => {
                return <CustomNav onClick={onClick} isLeft={false} />;
              }}
              showPlayButton={false}
              showFullscreenButton={false}
              additionalClass="md:w-1/3"
              items={[
                { original: item.photo, thumbnail: item.photo },
                { original: item.photo, thumbnail: item.photo },
              ]}
            />
            <SidePanel
              price={item.price}
              title={item.title}
              subtitle={item.subtitle}
              instagramLink={item.instagramLink}
            />
          </div>
        )}
      </div>
      <div className="mt-16 text-center text-4xl font-unna font-light">
        Zobacz też
      </div>
      <ArtSlider labelColor="#f9f9f8" chevronColor="#4a4b4e" />
    </>
  );
}
