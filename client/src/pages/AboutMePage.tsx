import { type ReactElement } from "react";
import { Wrapper } from "../components/Wrapper";
import { PhotoGallery } from "../components/PhotoGallery";

export function AboutMePage(): ReactElement {
  return (
    <>
      <img
        src={"/1.O_mnie/IMG_20211011_135540_905.jpg"}
        className="w-full object-cover lg:h-64 h-28 object-[100%_80%]"
      />
      <Wrapper className="p-0">
        <div className="flex lg:flex-row flex-col relative gap-x-16 lg:m-16 items-center justify-center">
          <div>
            <img
              src={"/1.O_mnie/profile.jpg"}
              className="lg:rounded-[100px] rounded-xl aspect-[3/4] sm:w-[28rem] sm:h-[36rem] w-full object-cover object-[30%] sm:m-8 sm:p-0 p-8 lg:p-0"
            />
          </div>
          <div className="relative background-secondary md:p-16 p-8 max-w-[32rem] sm:mb-8">
            <p className="montserrat font-light md:text-2xl text-center md:leading-10">
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
      <PhotoGallery></PhotoGallery>
    </>
  );
}
