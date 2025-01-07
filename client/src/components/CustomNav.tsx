import { ChevronLeft, ChevronRight } from "lucide-react";
import { type ReactElement, type ReactNode } from "react";

export interface CustomNavProps {
  onClick?: () => void;
  isLeft?: boolean;
}

export function CustomNav(props: CustomNavProps): ReactElement {
  return (
    <button
      className={`absolute top-1/2 transform -translate-y-1/2 ${
        props.isLeft ? "left-2" : "right-2"
      } z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-200 hover:scale-110`}
      onClick={props.onClick}
      aria-label={props.isLeft ? "Previous" : "Next"}
    >
      {props.isLeft ? (
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      ) : (
        <ChevronRight className="w-6 h-6 text-gray-800" />
      )}
    </button>
  );
}
