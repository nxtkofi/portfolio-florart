import { type ReactElement, type ReactNode } from "react";
import { Wrapper } from "../components/Wrapper";

export interface ContactPageProps {
  children: ReactNode;
}

export function ContactPage(props: ContactPageProps): ReactElement {
  return <Wrapper>Contact page</Wrapper>;
}
