import { type ReactElement, type ReactNode } from "react";

export interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export function Wrapper(props: WrapperProps): ReactElement {
  return (
    <div
      className={`wrapper background-primary p-4 flex flex-col ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
}
