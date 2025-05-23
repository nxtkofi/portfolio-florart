import { type ReactElement } from "react";
import { Wrapper } from "../components/Wrapper";
import { PrimaryPainting } from "../components/PrimaryPainting";
import { useItems } from "../hooks/useItems";

export function PaintingsPage(): ReactElement {
  const { items } = useItems();
  return (
    <Wrapper className="justify-center items-center ">
      <div className="md:mt-12 sm:mt-6 grid lg:grid-cols-2 grid-cols-1 gap-x-16">
        {items &&
          items.map((item, index) => (
            <PrimaryPainting
              labelColor="#f9f9f8"
              key={index}
              use={"paintingspage"}
              item={item}
              index={index}
            />
          ))}
      </div>
    </Wrapper>
  );
}
