import {
  ChangeEvent,
  FormEvent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import validator from "validator";
import { XIcon } from "lucide-react";
import InputError from "./InputError";

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

type FormErrorsType = {
  name?: string;
  email?: string;
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
  const [formErrors, setFormErrors] = useState<FormErrorsType>({});
  const [isTouched, setIsTouched] = useState<{ [key: string]: boolean }>({});
  function onInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof FormValuesType,
  ): void {
    const value = e.target.value.replace("  ", " ");
    setFormValues((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    setIsTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));
  }

  function validateForm(): FormErrorsType {
    const errors: FormErrorsType = {};

    if (!formValues.name) {
      errors.name = "Imię jest wymagane";
    } else if (formValues.name.length < 2) {
      errors.name = "Imię musi mieć co najmniej 2 znaki";
    }

    if (!formValues.email) {
      errors.email = "Email jest wymagany";
    } else if (!validator.isEmail(formValues.email)) {
      errors.email = "Nieprawidłowy format adresu email";
    }

    if (props.isReserve) {
      if (!formValues.phone) {
        errors.phone = "Numer telefonu jest wymagany";
      } else if (!validator.isMobilePhone(formValues.phone, "pl-PL")) {
        errors.phone = "Nieprawidłowy format numeru telefonu";
      }
    } else {
      if (!formValues.message) {
        errors.message = "Wiadomość jest wymagana";
      } else if (formValues.message.length <= 5) {
        errors.message = "Wiadomość musi mieć więcej niż 5 znaków";
      }
    }

    return errors;
  }

  useEffect(() => {
    const errors = validateForm();
    setFormErrors(errors);
    setAllowSend(Object.keys(errors).length === 0);
  }, [formValues]);

  function submitForm(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setIsLoading(true);
  }

  const inputClasses = (error?: string, touched?: boolean) => `
  w-full border transition-colors duration-200 outline-none
  ${error && touched ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-gray-300 focus:border-gray-600 focus:ring-1 focus:ring-gray-600"}
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
        <div className="">
          <label htmlFor="name" className="block mb-1">
            <b className="text-red-500">*</b> Imię:
          </label>
          <input
            required
            name="name"
            value={formValues.name}
            onChange={(e) => onInputChange(e, "name")}
            type="text"
            className={inputClasses(formErrors.name, isTouched.name)}
          />
          <InputError error={formErrors.name} touched={isTouched.name} />
        </div>

        <div className="mb-2">
          <label htmlFor="email" className="block mb-1">
            <b className="text-red-500">*</b> Adres e-mail:
          </label>
          <input
            required
            name="email"
            value={formValues.email}
            onChange={(e) => onInputChange(e, "email")}
            type="email"
            className={inputClasses(formErrors.email, isTouched.email)}
          />
          <InputError error={formErrors.email} touched={isTouched.email} />
        </div>

        {!props.isReserve ? (
          <div className="mb-2">
            <label htmlFor="message" className="block mb-1">
              <b className="text-red-500">*</b> Wiadomość:
            </label>
            <textarea
              required
              name="message"
              value={formValues.message}
              onChange={(e) => onInputChange(e, "message")}
              rows={7}
              className={inputClasses(formErrors.message, isTouched.message)}
            />
            <InputError
              error={formErrors.message}
              touched={isTouched.message}
            />
          </div>
        ) : (
          <div className="mb-2">
            <label htmlFor="phone" className="block mb-1">
              <b className="text-red-500">*</b> Numer telefonu:
            </label>
            <input
              required
              name="phone"
              value={formValues.phone}
              onChange={(e) => onInputChange(e, "phone")}
              type="tel"
              className={inputClasses(formErrors.phone, isTouched.phone)}
            />
            <InputError error={formErrors.phone} touched={isTouched.phone} />
          </div>
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
