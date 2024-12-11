import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ReactElement } from "react";
import { LinksBar } from "./LinksBar";
import { useNavigate } from "react-router";
import { useMediaPredicate } from "react-media-hook";

interface INavbar {
  setDirection: Dispatch<SetStateAction<string>>;
}

export function Navbar(props: INavbar): ReactElement {
  const biggerThanMd = useMediaPredicate("(min-width:768px)");
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = biggerThanMd ? 252 : 158;
      setIsSticky(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [biggerThanMd]); // Dodanie zależności

  return (
    <div>
      <div
        className={`flex navbar flex-col items-center justify-center bg-[#dbd7d3] h-36 md:h-56 ${isSticky ? "mb-16" : ""} relative`}
      >
        <img
          src="/Nagłówek/IMG_0926.JPG"
          className="absolute w-full h-full object-cover opacity-20"
        />
        <p className="cormorant font-bold absolute text-10xl md:text-11xl leading-3 text-white opacity-50 md:bottom-32 md:mb-0 mb-8">
          WF
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
          aria-label="Button redirecting to home page"
          className="flex justify-center items-center w-full"
        >
          <img
            src={"/Nagłówek/IMG_0928.PNG"}
            className="place-self-center z-20 md:h-56 h-36"
          />
        </button>
        <p className="absolute text-white alexandria uppercase bottom-1 md:bottom-4 opacity-75 alexandria font-light md:text-2xl tracking-wider">
          Artist
        </p>
      </div>
      <div
        className={`${
          isSticky ? "fixed shadow-md top-0 left-0 w-full px-8 z-10" : ""
        } bg-white `}
      >
        <LinksBar setDirection={props.setDirection} />
      </div>
    </div>
  );
}
