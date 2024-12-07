import { type ReactElement, type ReactNode } from "react";

export interface WrapperProps {
  children: ReactNode;
}

export function Wrapper(props: WrapperProps): ReactElement {
  return (
    <div className="background-primary p-4 flex flex-col">{props.children}</div>
  );
}
