import {
  ChangeEvent,
  FormEvent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { XIcon } from "lucide-react";
import InputError from "./InputError";
import { ContactFormField } from "./ContactFormField";
import validateForm from "../helpers/validateForm";
import { FormErrorsType, FormValuesType } from "../types";

export interface ContactFormProps {
  isReserve?: boolean;
  isFloatingWindow?: boolean;
  className?: string;
  closeWindow?: () => void;
}

export function ContactForm(props: ContactFormProps): ReactElement {
  const [allowSend, setAllowSend] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValuesType>({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [displayedErrors, setDisplayedErrors] = useState<FormErrorsType>({});
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const errors = validateForm(formValues, props.isReserve);
    setAllowSend(Object.keys(errors).length === 0);
  }, [formValues, props.isReserve]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const errors = validateForm(formValues, props.isReserve);
      const filteredErrors: FormErrorsType = {};
      Object.entries(errors).forEach(([key, value]) => {
        if (touchedFields.has(key) || isSubmitted) {
          filteredErrors[key as keyof FormErrorsType] = value;
        }
      });
      setDisplayedErrors(filteredErrors);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [formValues, props.isReserve, touchedFields, isSubmitted]);

  function onInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof FormValuesType,
  ): void {
    const value = e.target.value.replace("  ", " ");
    setFormValues((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    if (!touchedFields.has(fieldName)) {
      setTouchedFields((prev) => new Set(prev).add(fieldName));
    }

    if (!isSubmitted) {
      setDisplayedErrors((prev) => ({
        ...prev,
        [fieldName]: undefined,
      }));
    }
  }

  function submitForm(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setIsSubmitted(true);
    const errors = validateForm(formValues, props.isReserve);
    setDisplayedErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
    }
  }

  const inputClasses = (error?: string) => `
    w-full border transition-colors duration-200 outline-none
    ${error ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-gray-300 focus:border-gray-600 focus:ring-1 focus:ring-gray-600"}
  `;

  return (
    <div
      className={`${props.isFloatingWindow ? "bg-[#4a4b4e]" : ""} ${props.className || ""}`}
    >
      {props.isFloatingWindow && (
        <div className="py-4 px-6 flex flex-row justify-between items-center">
          <p className="montserrat text-xl text-white">
            {props.isReserve ? "Zarezerwuj obraz" : "Zapytaj o obraz"}
          </p>
          <button
            onClick={() => props.closeWindow?.()}
            className="flex flex-row items-center text-lg text-gray-300 p-4 -m-4"
          >
            <p className="flex flex-row items-center animate-underline">
              Zamknij <XIcon />
            </p>
          </button>
        </div>
      )}
      <form
        onSubmit={submitForm}
        id="contact-form"
        className={`background-tertiary md:p-16 p-8 w-full md:w-[32rem] ${
          props.isFloatingWindow ? "!pt-8" : ""
        }`}
      >
        <ContactFormField
          required
          name="name"
          value={formValues.name}
          onChange={(e) => onInputChange(e, "name")}
          type="text"
          className={inputClasses(displayedErrors.name)}
          displayError={displayedErrors.name || ""}
          labelText="Imię"
        />
        <ContactFormField
          required
          name="email"
          value={formValues.email}
          onChange={(e) => onInputChange(e, "email")}
          type="email"
          className={inputClasses(displayedErrors.email)}
          displayError={displayedErrors.email || ""}
          labelText="Adres e-mail"
        />
        {!props.isReserve ? (
          <>
            <label htmlFor="message" className="block mb-1">
              <b className="text-red-500">*</b> Wiadomość:
            </label>
            <textarea
              required
              name="message"
              value={formValues.message}
              onChange={(e) => onInputChange(e, "message")}
              rows={7}
              className={inputClasses(displayedErrors.message)}
            />
            <InputError error={displayedErrors.message} touched={true} />
          </>
        ) : (
          <ContactFormField
            required
            name="phone"
            value={formValues.phone}
            onChange={(e) => onInputChange(e, "phone")}
            type="tel"
            className={inputClasses(displayedErrors.phone)}
            displayError={displayedErrors.phone || ""}
            labelText="Numer telefonu"
          />
        )}
        <div className="flex flex-col items-center justify-center">
          {props.isReserve && (
            <p className="text-center mb-2 montserrat font-light">
              Po otrzymaniu prośby o rezerwację skontaktuję się z Tobą w ciągu 2
              dni roboczych
            </p>
          )}
          <button
            className={`w-72 bg-[#4a4b4e] montserrat text-xl text-white py-2 items-center flex justify-center transition-opacity duration-200
            ${!allowSend ? "opacity-70" : "hover:bg-[#3a3b3e]"}`}
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
  );
}

export default ContactForm;
