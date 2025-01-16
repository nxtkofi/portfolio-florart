import { XIcon } from "lucide-react";
import { ReactElement } from "react";

export interface ContactFormProps {
  isReserve?: boolean;
  isFloatingWindow?: boolean;
  className?: string;
  closeWindow?: () => void;
}

export function ContactForm(props: ContactFormProps): ReactElement {
  return (
    <>
      <div
        className={` ${props.isFloatingWindow ? "bg-[#4a4b4e]" : ""} ${props.className ? props.className : ""}
      `}
      >
        {props.isFloatingWindow && (
          <div className="py-4 px-6 flex flex-row justify-between items-center">
            <p className="montserrat text-xl text-white">
              {props.isReserve ? "Zarezerwuj obraz" : "Zapytaj o obraz"}
            </p>
            <button
              onClick={() => props.closeWindow && props.closeWindow()}
              className="flex flex-row items-center text-lg text-gray-300 p-4 -m-4"
            >
              Zamknij <XIcon />
            </button>
          </div>
        )}
        <form
          id="contact-form"
          className={`background-tertiary md:p-16 p-8 w-full md:w-[32rem] ${props.isFloatingWindow ? "!pt-8" : ""}`}
        >
          <label htmlFor="name">
            <b className="text-red-500">*</b> Imię:
          </label>
          <br />
          <input name="name" type="text" />
          <label htmlFor="email">
            <b className="text-red-500">*</b> Adres e-mail:
          </label>
          <br />
          <input name="email" type="email" />

          {!props.isReserve ? (
            <>
              <label htmlFor="message">
                <b className="text-red-500">*</b> Wiadomość:
              </label>
              <textarea name="message" rows={7}></textarea>
            </>
          ) : (
            <>
              <label htmlFor="phone">
                <b className="text-red-500">*</b> Numer telefonu:
              </label>
              <input name="phone" type="tel" />
            </>
          )}
          <div className="flex flex-col items-center justify-center">
            {props.isReserve && (
              <p className="text-center mb-6 montserrat font-light">
                Po otrzymaniu prośby o rezerwację skontaktuję się z Tobą w ciągu
                2 dni roboczych
              </p>
            )}
            <button
              type="submit"
              className="w-72 bg-[#4a4b4e] montserrat text-xl text-white py-2 hover:"
            >
              {props.isReserve ? "Zarezerwuj teraz" : "Wyślij"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
