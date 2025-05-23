import { useEffect, useState } from "react";
import { LinksBar } from "./LinksBar";
import { useNavigate } from "react-router";
import { useMediaPredicate } from "react-media-hook";

export function Navbar() {
  const [futurePath, setFuturePath] = useState<string>("");
  const biggerThanMd = useMediaPredicate("(min-width:768px)");
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = biggerThanMd ? 256 : 158;
      setIsSticky(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [biggerThanMd]);

  return (
    <nav>
      <div
        className={`flex navbar flex-col items-center justify-center bg-[#dbd7d3] h-36 md:h-56 ${isSticky ? "mb-16" : ""} relative z-50`}
      >
        <img
          src="/Nagłówek/IMG_0926.JPG"
          className="absolute w-full h-full object-cover opacity-20 z-0"
        />
        <p className="cormorant font-bold absolute text-10xl md:text-11xl leading-3 text-white opacity-50 md:bottom-32 md:mb-0 mb-8">
          WF
        </p>
        <button
          onClick={() => {
            setFuturePath("/");
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
          isSticky
            ? "md:px-8 px-4 fixed shadow-md top-0 left-0 w-full z-10"
            : ""
        } bg-white `}
      >
        <LinksBar
          isSticky={isSticky}
          setFuturePath={setFuturePath}
          futurePath={futurePath}
        />
      </div>
    </nav>
  );
}
