import { Circle, Instagram } from "lucide-react";
import { useEffect, useState, type ReactElement } from "react";
import { convertToPLN } from "../helpers/convertToPLN";
import { ContactForm } from "./ContactForm";
import { AnimatePresence, motion } from "framer-motion";
import { usePopUp } from "../hooks/usePopUp";

export interface SidePanelProps {
  title: string;
  subtitle: string;
  price: number;
  instagramLink?: string;
}

export function SidePanel(props: SidePanelProps): ReactElement {
  const { isReserve, popUpShown, setPopUpShown, setIsReserve } = usePopUp();

  /* const popupVariants = { */
  /*   hidden: { opacity: 0, x: -50, scale: 0.95 }, */
  /*   visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.3 } }, */
  /*   exit: { opacity: 0, x: -50, scale: 0.95, transition: { duration: 0.2 } }, */
  /* }; */

  useEffect(() => {
    console.log("popUpShown", popUpShown);
  });
  const showPopUp = () => {
    setPopUpShown(!popUpShown);
  };
  return (
    <>
      {/* <AnimatePresence> */}
      {/*   {popUpShown && ( */}
      {/*     <motion.div */}
      {/*       key="modal-overlay" */}
      {/*       className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center" */}
      {/*       initial={{ opacity: 0 }} */}
      {/*       animate={{ opacity: 1 }} */}
      {/*       exit={{ opacity: 0 }} */}
      {/*       transition={{ duration: 0.3 }} */}
      {/*     > */}
      {/*       <motion.div */}
      {/*         variants={popupVariants} */}
      {/*         initial="hidden" */}
      {/*         animate="visible" */}
      {/*         exit="exit" */}
      {/*         style={{ zIndex: 50 }} */}
      {/*       > */}
      {/*         <ContactForm */}
      {/*           closeWindow={showPopUp} */}
      {/*           isFloatingWindow */}
      {/*           isReserve={isReserve} */}
      {/*         /> */}
      {/*       </motion.div> */}
      {/*     </motion.div> */}
      {/*   )} */}
      {/* </AnimatePresence> */}
      <div className="background-secondary py-4 px-6 w-fit h-fit mx-8">
        <p className="text-5xl cormorant">{props.title}</p>
        <p className="text-xl font-extralight whitespace-pre text-[#4a4b4e] alexandria">
          {props.subtitle}
        </p>
        <div className="flex flex-col gap-y-4 mt-16 items-center">
          <button
            onClick={() => {
              setIsReserve(true);
              showPopUp();
            }}
            className="w-72 bg-[#4a4b4e] montserrat text-xl text-white py-2 hover:"
          >
            Zarezerwuj teraz
          </button>
          <button
            className="w-72 bg-[#4a4b4e] montserrat text-xl text-white py-2"
            onClick={() => {
              setIsReserve(false);
              showPopUp();
            }}
          >
            Zapytaj o obraz
          </button>
        </div>
        {props.instagramLink && (
          <div className="mt-6 underline justify-center items-center">
            <a
              target="_blank"
              href="https://instagram.com/weronikaflorkow"
              className="flex flex-row items-center text-[#4a4b4e]"
            >
              <div className="relative mr-2">
                <Circle
                  size={48}
                  fill="#4a4b4e"
                  stroke="#4a4b4e"
                  strokeWidth={0.8}
                />
                <Instagram
                  stroke="#4a4b4e"
                  fill="#FBFBFB"
                  size={32}
                  strokeWidth={2}
                  className="absolute top-[0.5rem] left-[0.5rem]"
                />
              </div>
              <p className="montserrat">Zobacz film na Instagramie</p>
            </a>
          </div>
        )}
        <p className="alexandria font-extralight text-3xl text-[#4a4b4e] mt-32">
          {convertToPLN(props.price)}
        </p>
      </div>
    </>
  );
}
