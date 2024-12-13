import { type ReactElement, type ReactNode } from "react";
import { Wrapper } from "../components/Wrapper";
import { ContactComponent } from "../components/ContactComponent";

export interface ContactPageProps {
  children: ReactNode;
}

export function ContactPage(props: ContactPageProps): ReactElement {
  return (
    <Wrapper className="!p-0">
      <img
        src="/Nagłówek/IMG_0926.JPG"
        className="absolute w-full h-full object-cover opacity-20"
        
      />

      <div className="pt-16 pb-32 z-10">
        <ContactComponent />
      </div>
    </Wrapper>
  );
}
