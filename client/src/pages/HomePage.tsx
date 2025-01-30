import { useEffect } from "react";
import { ArtSlider } from "../components/ArtSlider";
import { Wrapper } from "../components/Wrapper";

export default function HomePage() {
  
  return (
    <Wrapper>
      <div className="background-secondary font-unna font-extralight text-center text-4xl my-8 md:w-fit md:px-48 w-full py-6 place-self-center text-primary">
        Poznaj moją twórczość
      </div>
      <div className="flex items-center justify-center -mx-[26px] sm:-mx-0">
        <ArtSlider />
      </div>
    </Wrapper>
  );
}
