import { Dispatch, SetStateAction, type ReactElement } from "react";
import { NAVBAR_LINKS } from "../constants";
import { useNavigate } from "react-router";

interface ILinksBar {
  setDirection: Dispatch<SetStateAction<string>>;
}
export function LinksBar(props: ILinksBar): ReactElement {
  const navigate = useNavigate();
  return (
    <div className="md:flex md:flex-row grid grid-cols-3 justify-between pb-4 pt-4 md:mx-16 md:text-2xl">
      {NAVBAR_LINKS.map((link) => (
        <button
          aria-label={
            "Button redirecting user to '" + link.header + "' section."
          }
          className="font-light uppercase transition-all duration-300 hover:underline underline-offset-4"
          onClick={() => {
            navigate(link.path);
            props.setDirection(link.path);
          }}
        >
          {link.header}
        </button>
      ))}
    </div>
  );
}
