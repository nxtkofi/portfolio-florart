import { type ReactElement, type ReactNode } from "react";
import { Wrapper } from "../components/Wrapper";

export interface AboutMePageProps {
  children: ReactNode;
}

export function AboutMePage(props: AboutMePageProps): ReactElement {
  return (
    <>
      <img
        src={"/1.O_mnie/IMG_20211011_135540_905.jpg"}
        className="w-full object-cover h-64 object-[100%_80%]"
      />
      <Wrapper>
        <div className="flex flex-row relative gap-x-16 m-16 items-center">
          <div className="w-1/2">
            <img
              src={"/1.O_mnie/IMG-20211009-WA0008.jpg"}
              className="rounded-3xl "
            />
          </div>
          <div className="relative background-tertiary p-16 w-1/2">
            <p className="montserrat font-light text-2xl text-center">
              Moją twórczość inspiruje siła i piękno natury. Każdego dnia
              odkrywam ją na nowo, a malarstwo pozwala mi wejrzeć w jej głąb.
              Natura jest dla mnie nie kończącym się źródłem inspiracji, co
              pozwala mi na swobodne przekraczanie granic między realizmem a
              abstrakcją.
              <br />
              <br />
              Zapraszam cię do odkrywania moich obrazów, być może znajdziesz w
              nich cząstkę własnych emocji, inspiracji, oraz tego co Cię
              porusza.
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
