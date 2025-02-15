import { ReactElement } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import AnimatedOutlet from "./AnimatedOutlet";
import { usePopUp } from "../hooks/usePopUp";
import { AnimatePresence, motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

export default function Layout(): ReactElement {
  const { popUpShown, setPopUpShown, isReserve } = usePopUp();
  const popupVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -50, scale: 0.95, transition: { duration: 0.2 } },
  };

  const showPopUp = () => {
    setPopUpShown(!popUpShown);
  };
  return (
    <div>
      <AnimatePresence>
        {popUpShown && (
          <motion.div
            key="modal-overlay"
            className="fixed inset-0 z-[60] bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full md:w-auto"
              style={{ zIndex: 50 }}
            >
              <ContactForm
                closeWindow={showPopUp}
                isFloatingWindow
                isReserve={isReserve}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Navbar />
      <AnimatedOutlet />
      <Footer />
    </div>
  );
}
