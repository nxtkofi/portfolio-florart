import { type ReactElement, type ReactNode } from "react";
import { Wrapper } from "../components/Wrapper";

export interface OrderPageProps {
  children: ReactNode;
}

export function OrderPage(props: OrderPageProps): ReactElement {
  return <Wrapper>OrderPage</Wrapper>;
}
