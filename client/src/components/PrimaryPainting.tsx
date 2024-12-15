import { type ReactElement } from "react";
import { PaintingLabel } from "./PaintingLabel";
import { ItemType } from "../types";
import { useNavigate } from "react-router";

export interface PrimaryPaintingProps {
  use: "slider" | "paintingspage";
  item: ItemType;
  index: number;
  isCenter?: boolean;
}

export function PrimaryPainting(props: PrimaryPaintingProps): ReactElement {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(props.item.path);
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
          <div className="zoomed-image-container">{props.item.photo}</div>
          <PaintingLabel
            paintingName={props.item.title}
            price={props.item.price}
            redirectPath={""}
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
            paintingName={props.item.title}
            price={props.item.price}
            redirectPath={""}
          />
        </button>
      </div>
    );
  }
}
