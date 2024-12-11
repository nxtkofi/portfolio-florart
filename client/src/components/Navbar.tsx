import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ReactElement } from "react";
import { LinksBar } from "./LinksBar";
import { useNavigate } from "react-router";

interface INavbar {
  setDirection: Dispatch<SetStateAction<string>>;
}

export function Navbar(props: INavbar): ReactElement {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 320;
      setIsSticky(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`flex flex-col items-center justify-center bg-[#dbd7d3] h-72 ${isSticky ? "mb-16" : ""}`}
      >
        <p className="absolute text-8xl text-white">WF</p>
        <button
          onClick={() => {
            navigate("/");
          }}
          aria-label="Button redirecting to home page"
          className="absolute navbar-header text-7xl cursor-pointer"
        >
          Weronika Florków
        </button>
        <p className="absolute text-white alexandria uppercase">Artist</p>
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
