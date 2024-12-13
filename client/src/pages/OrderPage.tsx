import { type ReactElement, type ReactNode } from "react";
import { Wrapper } from "../components/Wrapper";
import {
  Mail,
  AtSign,
  MailOpen,
  MessageSquare,
  MessageSquareX,
  MessagesSquare,
  HandHelping,
  Coins,
  Palette,
  Brush,
} from "lucide-react";

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
          <div className="form-header md:px-32">
            Zamów swój wymarzony obraz już teraz
          </div>
          <div id="order-form">
            <div className="flex flex-row items-center">
              <div className="relative">
                <MailOpen strokeWidth={0.75} size={64} />
                <AtSign className="absolute top-3 left-5 z-30" />
              </div>
              <p> Skontaktuj się ze mną</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="relative">
                <MessagesSquare strokeWidth={0.75} size={64} />
              </div>
              <p>Przedstaw swoje propozycje i pomysły na obraz</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="relative">
                <HandHelping strokeWidth={0.75} size={64} />
                <Coins className="absolute -top-2 left-6 z-30" />
              </div>
              <p>Wpłać zaliczkę</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="relative">
                <Palette
                  className="-rotate-[75deg]"
                  strokeWidth={0.75}
                  size={64}
                />
                <Brush
                  size={40}
                  strokeWidth={1.25}
                  className=" absolute -top-[0.7rem] left-11 z-30 -rotate-12"
                />
              </div>
              <p>Oczekuj na realizację swojego obrazu</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
