import { PaintingLabel } from "../components/PaintingLabel";
import { Wrapper } from "../components/Wrapper";

export default function HomePage() {
  return (
    <Wrapper>
      <div className="background-secondary montserrat font-light text-center text-2xl mb-4 md:w-fit md:px-48 w-full py-6 place-self-center text-primary">
        Poznaj moją twórczość
      </div>
      <PaintingLabel
        paintingName={"Lodowiec"}
        price={140.0}
        redirectPath={""}
      />
    </Wrapper>
  );
}
