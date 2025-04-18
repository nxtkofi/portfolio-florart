import { useRef, useState, type ReactElement } from "react";
import { PaintingLabel } from "./PaintingLabel";
import { ItemType } from "../types";
import { useNavigate } from "react-router";
import { SINGLEPRODUCTPAGE } from "../helpers/routes";
import MagnifiedImage from "./MagnifiedImage";
import { button, div } from "framer-motion/client";

export interface PrimaryPaintingProps {
  use: "slider" | "paintingspage";
  item: ItemType;
  index: number;
  isCenter?: boolean;
  labelColor?: string;
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
        className={`slider-item transition-all duration-500 ${props.isCenter ? "md:scale-110 scale-100" : "md:scale-90 scale-100"}`}
      >
        <button
          aria-label={`Navigate to ${props.item.title} subpage.`}
          onClick={handleRedirect}
          className="flex flex-col lg:mx-6 mx-3 sm:mx-2 justify-center items-center gap-y-4"
        >
          <MagnifiedImage
            src={props.item.photo}
            containerClassName="zoomed-image-container"
            imageClassName="zoomed-image"
          />
          <PaintingLabel
            labelColor={props.labelColor}
            paintingName={props.item.title}
            price={props.item.price}
            allowRedirect={false}
          />
        </button>
      </div>
    );
  } else {
    return (
      <div key={props.index}>
        <button
          aria-label={`Navigate to ${props.item.title} subpage.`}
          onClick={handleRedirect}
          className="flex flex-col justify-center items-center gap-y-4 max-w-[34rem] mb-16"
        >
          <MagnifiedImage
            src={props.item.photo}
            containerClassName="zoomed-image-container"
            imageClassName="zoomed-image"
          />
          <PaintingLabel
            labelColor={props.labelColor}
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
