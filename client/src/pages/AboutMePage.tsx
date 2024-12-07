import { type ReactElement, type ReactNode } from "react";
import { Wrapper } from "../components/Wrapper";

export interface AboutMePageProps {
  children: ReactNode;
}

export function AboutMePage(props: AboutMePageProps): ReactElement {
  return <Wrapper> Sekcja o mnie:)</Wrapper>;
}
