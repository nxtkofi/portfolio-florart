import { Dispatch, SetStateAction, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { NAVBAR_LINKS } from "../constants";
import { useAnimationDir } from "../hooks/useAnimationDir";

interface ILinksBar {
  futurePath: string;
  setFuturePath: Dispatch<SetStateAction<string>>;
}

const PAGES_ORDER = [
  "/",
  "/about-me",
  "/paintings",
  "/portfolio",
  "/order",
  "/contact",
];
export function LinksBar(props: ILinksBar) {
  const { direction, setDirection } = useAnimationDir();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let currentPathIndex = PAGES_ORDER.indexOf(location.pathname);
    let futurePathIndex = PAGES_ORDER.indexOf(props.futurePath);
    if (futurePathIndex > currentPathIndex) {
      setDirection("right");
    } else setDirection("left");
  }, [props.futurePath]);

  useEffect(() => {
    console.log(direction);
  }, [direction]);
  return (
    <div className="alexandria font-extralight md:flex md:flex-row grid grid-cols-3 justify-between pb-4 pt-4 md:mx-16 md:text-2xl">
      {NAVBAR_LINKS.map((link) => (
        <button
          key={link.header}
          aria-label={
            "Button redirecting user to '" + link.header + "' section."
          }
          className="uppercase transition-all duration-300 hover:font-light"
          onClick={() => {
            navigate(link.path);
            props.setFuturePath(link.path);
          }}
        >
          {location.pathname === link.path ? (
            <p className="font-light">{link.header}</p>
          ) : (
            <p>{link.header}</p>
          )}
        </button>
      ))}
    </div>
  );
}
