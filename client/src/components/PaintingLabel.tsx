import { type ReactElement } from "react";
import { useNavigate } from "react-router";

export interface PaintingLabelProps {
  paintingName: string;
  price: number;
  allowRedirect: boolean;
  redirectPath?: string;
  labelColor?: string;
}

export function PaintingLabel(props: PaintingLabelProps): ReactElement {
  const navigate = useNavigate();
  const PLN = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  });
  return (
    <div
      style={{
        backgroundColor: props.labelColor ? props.labelColor : "#edebe9",
      }}
      className="alexandria xl:w-72 py-2 flex flex-col text-center text-secondary lg:w-52 w-full lg:px-0 px-4"
    >
      <p className="sm:text-xl font-light md:text-nowrap">
        {props.paintingName}
      </p>
      <p className="font-extralight text-sm">{PLN.format(props.price)}</p>
      <button
        onClick={() => {
          if (props.allowRedirect) navigate(props.redirectPath!);
        }}
        aria-label={"Redirects user to painting " + props.paintingName}
        className="font-light underline underline-offset-2 text-sm"
      >
        Więcej
      </button>
    </div>
  );
}
