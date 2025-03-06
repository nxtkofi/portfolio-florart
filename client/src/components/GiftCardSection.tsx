import { type ReactElement } from "react";

export interface GiftCardSectionProps {}

export function GiftCardSection(props: GiftCardSectionProps): ReactElement {
  return (
    <>
      <div className="flex flex-row w-full gap-16 background-primary">
        <img
          src="/miscellaneous/Business Card on Marble Mockup.jpg"
          className="overflow-hidden object-cover aspect-square w-1/2 object-[75%]"
        />
        <div className="w-1/2 flex flex-col gap-y-6 mt-12">
          <p className="font-unna text-5xl font-light">Karta podarunkowa</p>
          <p className="montserrat text-xl font-light leading-8 md:mr-16 mr-4">
            Szukasz pomysłu na prezent? Karta podarunkowa jest uniwersalnym i
            bezpiecznym rozwiązaniem. Osoba, która ją otrzyma, będzie miała
            możliwość samodzielnego wyboru lub zamówienia wymarzonego obrazu.
            Bon można wysłać zarówno w formie elektronicznej, jak i fizycznej.
          </p>
          <a className="montserrat animate-underline cursor-pointer text-xl w-fit font-medium">
            Więcej
          </a>
        </div>
      </div>
    </>
  );
}
