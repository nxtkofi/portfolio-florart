import { type ReactElement, type ReactNode } from "react";
import { Wrapper } from "../components/Wrapper";
import { Mail, AtSign } from "lucide-react";

export interface OrderPageProps {
  children: ReactNode;
}

export function OrderPage(props: OrderPageProps): ReactElement {
  return (
    <Wrapper className="!p-0">
      <img
        src="/Nagłówek/IMG_0926.JPG"
        className="absolute w-full h-full object-cover opacity-20"
      />
      <div className="pt-16 pb-32 z-10">
        <div className="flex flex-col gap-y-4 justify-center items-center w-full">
          <div className="background-secondary montserrat font-light text-center text-3xl mb-8 md:w-fit md:px-32 w-full py-6 place-self-center text-primary ">
            Zamów swój wymarzony obraz już teraz
          </div>
          <div id="order-form" className="montserrat font-light p-16 background-tertiary flex flex-col text-xl">
            <p className="relative">
              <Mail className="absolute" /> <AtSign className="absolute" />
              Skontaktuj się ze mną
            </p>
            <p>Przedstaw swoje propozycje i swój pomysł na obraz</p>
            <p>Wpłać zaliczkę</p>
            <p>Oczekuj na realizację swojego obrazu</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
