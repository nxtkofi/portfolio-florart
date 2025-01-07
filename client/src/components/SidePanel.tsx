import { type ReactElement } from "react";

export interface SidePanelProps {
  title: string;
  subtitle: string;
  price: number;
}

export function SidePanel(props: SidePanelProps): ReactElement {
  return (
    <div className="background-secondary py-4 px-6 w-fit h-fit mx-8">
      <p className="text-3xl ">{props.title}</p>
      <p className="text-xl font-light whitespace-pre">{props.subtitle}</p>
      <div className="flex flex-col gap-y-4 mt-16 items-center">
        <button className="w-72 bg-[#4a4b4e] montserrat text-xl text-white py-2 hover:">
          Zarezerwuj teraz
        </button>
        <button className="w-72 bg-[#4a4b4e] montserrat text-xl text-white py-2">
          Zapytaj o obraz
        </button>
      </div>
    </div>
  );
}
