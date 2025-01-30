import validator from "validator";
import { XIcon } from "lucide-react";
import {
  ChangeEvent,
  FormEvent,
  ReactElement,
  useEffect,
  useState,
} from "react";

export interface ContactFormProps {
  isReserve?: boolean;
  isFloatingWindow?: boolean;
  className?: string;
  closeWindow?: () => void;
}

type FormValuesType = {
  name: string;
  email: string;
  message?: string;
  phone?: string;
};

export function ContactForm(props: ContactFormProps): ReactElement {
  const [allowSend, setAllowSend] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    const value = e.target.value.replace("  ", " ");
    setFormValues((prev) => {
      return {
        ...prev,
        [fieldName]: value,
      };
    });
  }

  function submitForm(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setIsLoading(true);
  }

  useEffect(() => {
    switch (props.isReserve) {
      case true:
        if (
          formValues.name &&
          formValues.email &&
          formValues.phone &&
          formValues.name.length > 0 &&
          validator.isEmail(formValues.email) &&
          validator.isMobilePhone(formValues.phone, "pl-PL")
        ) {
          setAllowSend(true);
        } else {
          setAllowSend(false);
        }
        break;
      case false:
        if (
          formValues.name &&
          formValues.email &&
          formValues.message &&
          formValues.name.length > 0 &&
          validator.isEmail(formValues.email) &&
          formValues.message.length > 5
        ) {
          setAllowSend(true);
        } else {
          setAllowSend(false);
        }
        break;
      default:
        setAllowSend(false);
    }
  }, [formValues]);

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
              className="flex flex-row items-center text-lg text-gray-300 p-4 -m-4 "
            >
              <p className="flex flex-row items-center animate-underline">
                Zamknij <XIcon />
              </p>
            </button>
          </div>
        )}
        <form
          onSubmit={(e) => submitForm(e)}
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
              className={`w-72 bg-[#4a4b4e] montserrat text-xl text-white py-2 items-center flex justify-center 
              ${!allowSend ? "cursor-not-allowed opacity-70" : ""}`}
              disabled={!allowSend}
            >
              {isLoading ? (
                <span className="loader"></span>
              ) : props.isReserve ? (
                "Zarezerwuj teraz"
              ) : (
                "Wyślij"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
