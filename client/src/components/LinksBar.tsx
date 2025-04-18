import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { NAVBAR_LINKS } from "../constants";
import { useAnimationDir } from "../hooks/useAnimationDir";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { MenuIcon, X } from "lucide-react";

interface ILinksBar {
  futurePath: string;
  setFuturePath: Dispatch<SetStateAction<string>>;
  isSticky?: boolean;
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
  const { setDirection } = useAnimationDir();
  const location = useLocation();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (
      PAGES_ORDER.indexOf(props.futurePath) >
      PAGES_ORDER.indexOf(location.pathname)
    ) {
      setDirection("right");
    } else setDirection("left");
  }, [props.futurePath]);

  const navigateToPage = (path: string) => {
    navigate(path);
    props.setFuturePath(path);
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <div
      className={`alexandria font-extralight ${props.isSticky && !isMobile ? "flex justify-between" : "md:flex md:justify-between"} pb-4 pt-4 md:mx-16 md:text-xl lg:text-2xl`}
    >
      {!isMobile ? (
        NAVBAR_LINKS.map((link) => (
          <button
            key={link.header}
            aria-label={
              "Button redirecting user to '" + link.header + "' section."
            }
            className="uppercase transition-all duration-300 hover:font-light"
            onClick={() => navigateToPage(link.path)}
          >
            {location.pathname === link.path ? (
              <p className="font-light">{link.header}</p>
            ) : (
              <p>{link.header}</p>
            )}
          </button>
        ))
      ) : (
        <div className="flex flex-row justify-between w-full items-center">
          {props.isSticky && (
            <p className="font-medium text-lg">Weronika Florków</p>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={"ml-auto mr-2"}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`fixed left-0 right-0 top-0 bottom-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            top: props.isSticky ? "60px" : isMobile ? "158px" : "256px",
            height: props.isSticky
              ? "calc(100vh - 60px)"
              : isMobile
                ? "calc(100vh - 158px)"
                : "calc(100vh - 256px)",
          }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-4 relative">
            {/* Close button when menu is open and not sticky */}
            {!props.isSticky && (
              <button
                className="absolute top-4 right-4 p-2"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            )}

            {NAVBAR_LINKS.map((link) => (
              <button
                key={link.header}
                aria-label={
                  "Button redirecting user to '" + link.header + "' section."
                }
                className="uppercase transition-all duration-300 text-2xl py-2"
                onClick={() => navigateToPage(link.path)}
              >
                {location.pathname === link.path ? (
                  <p className="font-normal">{link.header}</p>
                ) : (
                  <p>{link.header}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
