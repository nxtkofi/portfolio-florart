import { type ReactElement } from "react";
import { Link, useNavigate } from "react-router";
import { ROUTE_SINGLEPRODUCTPAGE } from "../helpers/routes";

export interface PaintingLabelProps {
  paintingName: string;
  price: number;
  redirectPath?: string;
  labelColor?: string;
}

export function PaintingLabel(props: PaintingLabelProps): ReactElement {
  const PLN = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  });
  return (
    <div
      style={{
        backgroundColor: props.labelColor ? props.labelColor : "#edebe9",
      }}
      className="alexandria xl:w-72 py-2 flex flex-col text-center text-secondary lg:w-52 w-full lg:px-0 px-4 cursor-pointer"
    >
      <p className="sm:text-xl font-light md:text-nowrap">
        {props.paintingName}
      </p>
      <p className="font-extralight md:text-base">{PLN.format(props.price)}</p>
      <span className="pt-4 px-4 mb-0 -m-4 font-light underline-offset-2 text-sm md:text-base animate-underline w-fit flex self-center z-20">
        Więcej
      </span>
    </div>
  );
}
