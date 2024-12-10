import { ArtSlider } from "../components/ArtSlider";
import { Wrapper } from "../components/Wrapper";

export default function HomePage() {
  return (
    <Wrapper>
      <div className="background-secondary montserrat font-light text-center text-2xl mb-4 md:w-fit md:px-48 w-full py-6 place-self-center text-primary">
        Poznaj moją twórczość
      </div>
      <div className="w-full flex items-center justify-center">
        <ArtSlider />
      </div>
    </Wrapper>
  );
}
