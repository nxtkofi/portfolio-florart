import { Circle, Instagram } from "lucide-react";
import { type ReactElement } from "react";
import { convertToPLN } from "../helpers/convertToPLN";
import { usePopUp } from "../hooks/usePopUp";

export interface SidePanelProps {
  title: string;
  subtitle: string;
  price: number;
  instagramLink?: string;
}

export function SidePanel(props: SidePanelProps): ReactElement {
  const { popUpShown, setPopUpShown, setIsReserve } = usePopUp();

  const showPopUp = () => {
    setPopUpShown(!popUpShown);
  };
  return (
    <>
      <div className="background-secondary py-4 h-fit md:mx-8 px-4 mt-4 md:mt-0">
        <p className="text-5xl font-unna font-light mb-2">{props.title}</p>
        <p className="text-xl font-extralight whitespace-pre text-[#4a4b4e] alexandria">
          {props.subtitle}
        </p>
        <div className="flex flex-col gap-y-4 mt-16 md:items-center">
          <button
            onClick={() => {
              setIsReserve(true);
              showPopUp();
            }}
            className="min-w-72 bg-[#4a4b4e] montserrat text-xl text-white py-2 button-hover"
          >
            Zarezerwuj teraz
          </button>
          <button
            className="min-w-72 bg-[#4a4b4e] montserrat text-xl text-white py-2 button-hover"
            onClick={() => {
              setIsReserve(false);
              showPopUp();
            }}
          >
            Zapytaj o obraz
          </button>
        </div>
        {props.instagramLink && (
          <div className="mt-6 justify-center items-center">
            <a
              target="_blank"
              href="https://instagram.com/weronikaflorkow"
              className="flex flex-row items-center text-[#4a4b4e] "
            >
              <div className="relative mr-2">
                <Circle
                  size={48}
                  fill="#4a4b4e"
                  stroke="#4a4b4e"
                  strokeWidth={0.8}
                />
                <Instagram
                  stroke="#4a4b4e"
                  fill="#FBFBFB"
                  size={32}
                  strokeWidth={2}
                  className="absolute top-[0.5rem] left-[0.5rem]"
                />
              </div>
              <p className="montserrat animate-underline no-underline">
                Zobacz film na Instagramie
              </p>
            </a>
          </div>
        )}
        <div className="flex flex-row justify-end">
          <p className="alexandria font-extralight text-3xl text-[#4a4b4e] mt-32">
            {convertToPLN(props.price)}
          </p>
        </div>
      </div>
    </>
  );
}
