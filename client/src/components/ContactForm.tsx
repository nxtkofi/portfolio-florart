import { XIcon } from "lucide-react";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";

export interface ContactFormProps {
  isReserve?: boolean;
  isFloatingWindow?: boolean;
  className?: string;
  closeWindow?: () => void;
}
type FormValuesType = {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
};

export function ContactForm(props: ContactFormProps): ReactElement {
  const [formValues, setFormValues] = useState<FormValuesType>({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  function onInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof FormValuesType,
  ): void {
    const value = e.target.value;
    setFormValues((prev) => {
      return {
        ...prev,
        [fieldName]: value,
      };
    });
  }

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
          <input
            required
            name="name"
            value={formValues.name}
            onChange={(e) => onInputChange(e, "name")}
            type="text"
          />
          <label htmlFor="email">
            <b className="text-red-500">*</b> Adres e-mail:
          </label>
          <br />
          <input
            required
            name="email"
            value={formValues.email}
            onChange={(e) => onInputChange(e, "email")}
            type="email"
          />

          {!props.isReserve ? (
            <>
              <label htmlFor="message">
                <b className="text-red-500">*</b> Wiadomość:
              </label>
              <textarea
                required={!props.isReserve}
                name="message"
                value={formValues.message}
                onChange={(e) => onInputChange(e, "message")}
                rows={7}
              ></textarea>
            </>
          ) : (
            <>
              <label htmlFor="phone">
                <b className="text-red-500">*</b> Numer telefonu:
              </label>
              <input
                required
                name="phone"
                value={formValues.phone}
                onChange={(e) => onInputChange(e, "phone")}
                type="tel"
              />
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
