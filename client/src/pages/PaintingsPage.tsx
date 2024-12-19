import { type ReactElement } from "react";
import { Wrapper } from "../components/Wrapper";
import { ITEMS } from "../constants";
import { PrimaryPainting } from "../components/PrimaryPainting";

export function PaintingsPage(): ReactElement {
  return (
    <Wrapper className="justify-center items-center">
      <div className="md:mt-12 sm:mt-6">
        {ITEMS.map((item, index) => (
          <PrimaryPainting
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
