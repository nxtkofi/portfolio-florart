import { type ReactElement } from "react";
import { Wrapper } from "../components/Wrapper";
import { ITEMS } from "../constants";
import { PrimaryPainting } from "../components/PrimaryPainting";

export function PaintingsPage(): ReactElement {
  return (
    <Wrapper className="justify-center items-center ">
      <div className="md:mt-12 sm:mt-6 grid lg:grid-cols-2 grid-cols-1 gap-x-16">
        {ITEMS.map((item, index) => (
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
