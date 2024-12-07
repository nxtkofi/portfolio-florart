import { type ReactElement } from "react";

export interface PaintingLabelProps {
  paintingName: string;
  price: number;
  redirectPath: string;
}

export function PaintingLabel(props: PaintingLabelProps): ReactElement {
  let PLN = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  });
  return (
    <div className="background-secondary md:px-24 py-2 flex flex-col md:w-fit w-full text-center text-secondary">
      <p className=" text-2xl">{props.paintingName}</p>
      <p className="font-light">{PLN.format(props.price)}</p>
      <button
        aria-label={"Redirects user to painting " + props.paintingName}
        className="font-normal underline md:hover:underline underline-offset-4 md:no-underline"
      >
        Więcej
      </button>
    </div>
  );
}
