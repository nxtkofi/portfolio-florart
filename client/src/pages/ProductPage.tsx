import { useEffect, useState, type ReactElement } from "react";
import { useParams } from "react-router-dom";
import { ITEMS } from "../constants";
import ImageGallery from "react-image-gallery";
import { ItemType } from "../types";
import { SidePanel } from "../components/SidePanel";
import "react-image-gallery/styles/css/image-gallery.css";
import { CustomNav } from "../components/CustomNav";

export function ProductPage(): ReactElement {
  const params = useParams();
  const [item, setItem] = useState<ItemType>();
  useEffect(() => {
    setItem(ITEMS.find((item) => params.id === item.id));
  }, []);
  return (
    <div className="background-primary p-8">
      {item && (
        <div className="flex flex-row justify-center">
          <ImageGallery
            renderLeftNav={(onClick) => {
              return <CustomNav onClick={onClick} isLeft={true} />;
            }}
            renderRightNav={(onClick) => {
              return <CustomNav onClick={onClick} isLeft={false} />;
            }}
            showPlayButton={false}
            showFullscreenButton={false}
            additionalClass="w-1/3"
            items={[
              { original: item.photo, thumbnail: item.photo },
              { original: item.photo, thumbnail: item.photo },
            ]}
          />

          <SidePanel
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
          />
        </div>
      )}
    </div>
  );
}
