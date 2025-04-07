import { ArtSlider } from "../components/ArtSlider";
import { Wrapper } from "../components/Wrapper";

export default function HomePage() {
  return (
    <>
      <Wrapper>
        <div className="background-secondary font-unna font-extralight text-center text-4xl my-8 md:w-fit md:px-48 w-full py-6 place-self-center text-primary">
          Poznaj moją twórczość
        </div>
        <div className="flex items-center justify-center -mx-[26px] sm:-mx-0 mb-9">
          <ArtSlider labelColor="#f9f9f8" />
        </div>
      </Wrapper>
      <div className="flex relative items-center justify-center h-64">
        <img
          src="./Nagłówek/IMG_0926.JPG"
          className="absolute h-full w-full object-cover opacity-70 z-0"
        />
        <div className="bg-[#FFFFFF] z-10 text-2xl montserrat font-extralight w-[50rem] md:h-32 h-40 opacity-80 absolute"></div>
        <div className="absolute z-20 flex flex-col items-center">
          <p className="text-3xl montserrat font-extralight text-center">
            Zamów swój wymarzony obraz już teraz
          </p>
          <button className="text-lg montserrat animate-underline mt-2">
            Więcej
          </button>
        </div>
      </div>
      <div className="background-primary p-4 sm:p-8 text-center flex justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col items-center justify-center">
            <p className="bg-white font-light font-unna text-3xl sm:text-4xl py-3 sm:py-4 px-6 sm:px-10 w-fit mb-4">
              O mnie
            </p>
            <div className="montserrat px-6 sm:px-8 py-6 sm:py-8 max-w-xs sm:max-w-md md:max-w-lg bg-white text-center flex flex-col items-center">
              <p className="text-base sm:text-lg font-light">
                Mam na imię Weronika. Moją twórczość inspiruje natura, która
                jest dla mnie niekończącym się źródłem inspiracji. To pozwala mi
                na swobodne przekraczanie granic między realizmem a abstrakcją.
              </p>
              <p className="text-lg sm:text-xl mt-3 sm:mt-4 montserrat animate-underline cursor-pointer w-fit text-center ">
                Więcej
              </p>
            </div>
          </div>
          <img
            src={"./1.O_mnie/profile.jpg"}
            className="lg:rounded-[100px] rounded-xl aspect-[3/4]  md:w-80 lg:w-[28rem] sm:h-auto w-80 object-cover object-[30%] mt-6 lg:ml-8 mb-2"
          />
        </div>
      </div>
    </>
  );
}
