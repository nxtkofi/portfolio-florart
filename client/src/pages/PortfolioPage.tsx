import { type ReactElement, type ReactNode } from "react";
import { Wrapper } from "../components/Wrapper";

export interface PortfolioPageProps {
  children: ReactNode;
}

export function PortfolioPage(props: PortfolioPageProps): ReactElement {
  return <Wrapper>Portfolio page</Wrapper>;
}
