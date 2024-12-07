import { PaintingLabel } from "../components/PaintingLabel";

export default function HomePage() {
  return (
    <div className="background-primary p-4 flex flex-col">
      <div className="background-secondary montserrat font-light text-center text-2xl mb-4 w-fit px-48 py-6 place-self-center text-primary">
        Poznaj moją twórczość
      </div>
      <PaintingLabel
        paintingName={"Lodowiec"}
        price={140.0}
        redirectPath={""}
      />
    </div>
  );
}
