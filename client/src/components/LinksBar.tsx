import { Dispatch, SetStateAction, type ReactElement } from "react";
import { useLocation, useNavigate } from "react-router";
import { NAVBAR_LINKS } from "../constants";

interface ILinksBar {
  setDirection: Dispatch<SetStateAction<string>>;
}
export function LinksBar(props: ILinksBar): ReactElement {
  const location = useLocation();
  const navigate = useNavigate();
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
            props.setDirection(link.path);
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
