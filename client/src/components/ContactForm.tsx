import { XIcon } from "lucide-react";
import { type ReactElement } from "react";

export interface ContactFormProps {
  isFloatingWindow?: boolean;
  className?: string;
}

export function ContactForm(props: ContactFormProps): ReactElement {
  return (
    <>
      <div
        className={` ${props.className && props.isFloatingWindow ? props.className + " bg-[#4a4b4e] " : ""}
      `}
      >
        {props.isFloatingWindow && (
          <div className="py-4 px-6 flex flex-row justify-between items-center">
            <p className="montserrat text-xl text-white">Zapytaj o obraz</p>
            <p className="flex flex-row items-center text-lg text-gray-300">
              Zamknij <XIcon />
            </p>
          </div>
        )}
        <form
          id="contact-form"
          className="background-tertiary md:p-16 p-8 w-full md:w-[32rem]"
        >
          <label htmlFor="name">Imię:</label>
          <br />
          <input name="name" type="text" />
          <label htmlFor="email">Adres e-mail:</label>
          <br />
          <input name="email" type="email" />
          <label htmlFor="message">Wiadomość:</label>
          <textarea name="message" rows={7}></textarea>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-72 bg-[#4a4b4e] montserrat text-xl text-white py-2 hover:"
            >
              Wyślij
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
