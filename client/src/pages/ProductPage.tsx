import { useEffect, useState, type ReactElement } from "react";
import { data, useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { SidePanel } from "../components/SidePanel";
import "react-image-gallery/styles/css/image-gallery.css";
import { CustomNav } from "../components/CustomNav";
import { ArtSlider } from "../components/ArtSlider";
import { ItemType } from "../context/ItemsContext";
import { API_BASE, API_URL } from "../helpers/apiroutes";
import axios from "axios";
import { useItems } from "../hooks/useItems";

export function ProductPage(): ReactElement {
  const { items } = useItems();
  const params = useParams();
  const [item, setItem] = useState<ItemType>();
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
                {
                  original: API_URL + item.images[0].url,
                  thumbnail: API_URL + item.images[0].formats.thumbnail.url,
                },
              ]}
            />
            <SidePanel
              price={item.price}
              title={item.title}
              subtitle={item.material + "\n" + item.dimensions}
              instagramLink={item.instagramLink}
            />
          </div>
        )}
      </div>
      <div className="mt-16 -mb-8 md:mb-0 text-center text-4xl font-unna font-light">
        Zobacz też
      </div>
      {items && <ArtSlider labelColor="#f9f9f8" chevronColor="#4a4b4e" />}
    </>
  );
}
