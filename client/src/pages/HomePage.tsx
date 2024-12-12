import { ArtSlider } from "../components/ArtSlider";
import { Wrapper } from "../components/Wrapper";

export default function HomePage() {
  return (
    <Wrapper>
      <div className="background-secondary montserrat font-extralight text-center text-3xl my-8 md:w-fit md:px-48 w-full py-6 place-self-center text-primary">
        Poznaj moją twórczość
      </div>
      <div className="w-full flex items-center justify-center">
        <ArtSlider />
      </div>
    </Wrapper>
  );
}
