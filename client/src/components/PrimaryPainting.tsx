import { type ReactElement } from "react";
import { PaintingLabel } from "./PaintingLabel";
import { ItemType } from "../types";
import { useNavigate } from "react-router";
import { SINGLEPRODUCTPAGE } from "../apiroutes";

export interface PrimaryPaintingProps {
  use: "slider" | "paintingspage";
  item: ItemType;
  index: number;
  isCenter?: boolean;
}

export function PrimaryPainting(props: PrimaryPaintingProps): ReactElement {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(SINGLEPRODUCTPAGE + props.item.id);
  };
  if (props.use === "slider") {
    return (
      <div
        key={props.index}
        className={`slider-item transition-all duration-500 ${props.isCenter ? "scale-110" : "scale-90"}`}
      >
        <button
          aria-label={`Navigate to ${props.item.title} subpage.`}
          onClick={handleRedirect}
          className="flex flex-col mx-6 justify-center items-center gap-y-4"
        >
          <div className="zoomed-image-container">
            <img
              alt={"Image of title:" + props.item.title}
              src={props.item.photo}
              className="zoomed-image"
            />
          </div>
          <PaintingLabel
            paintingName={props.item.title}
            price={props.item.price}
            allowRedirect={false}
          />
        </button>
      </div>
    );
  } /* if(props.use === "paintingspage") */ else {
    return (
      <div key={props.index}>
        <button
          aria-label={`Navigate to ${props.item.title} subpage.`}
          onClick={handleRedirect}
          className="flex flex-col justify-center items-center gap-y-4 max-w-[34rem] mb-16"
        >
          <div className="zoomed-image-container">{props.item.photo}</div>
          <PaintingLabel
            allowRedirect={false} // disallow redirect, because we already have a button wrapper that does that. If we'd allow redirect here - when user would click on "Więcej" he'd get redirected twice to the same page.
            paintingName={props.item.title}
            price={props.item.price}
            redirectPath={SINGLEPRODUCTPAGE + props.item.id}
          />
        </button>
      </div>
    );
  }
}
