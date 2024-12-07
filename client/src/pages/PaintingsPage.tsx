import { type ReactElement, type ReactNode } from "react";
import { Wrapper } from "../components/Wrapper";

export interface PaintingsPageProps {
  children: ReactNode;
}

export function PaintingsPage(props: PaintingsPageProps): ReactElement {
  return <Wrapper>Paintings page</Wrapper>;
}
