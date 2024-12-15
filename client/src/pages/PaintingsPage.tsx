import { type ReactElement, type ReactNode } from "react";
import { Wrapper } from "../components/Wrapper";
import { ITEMS } from "../constants";
import { PrimaryPainting } from "../components/PrimaryPainting";

export interface PaintingsPageProps {
  children: ReactNode;
}

export function PaintingsPage(props: PaintingsPageProps): ReactElement {
  return (
    <Wrapper className="justify-center items-center">
      <div className="mt-12">
        {ITEMS.map((item, index) => (
          <PrimaryPainting use={"paintingspage"} item={item} index={index} />
        ))}
      </div>
    </Wrapper>
  );
}
