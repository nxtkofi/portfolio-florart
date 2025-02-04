import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import InputError from "./InputError";
import InputField from "./InputField";
import { FormErrorsType, FormValuesType } from "./ContactForm";
import validateForm from "../helpers/validateForm";

type ContactFormComponentProps = {
  children: ReactNode;
  formValues: FormValuesType;
  setFormValues: Dispatch<SetStateAction<FormValuesType>>;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  setTouchedFields: Dispatch<SetStateAction<Set<string>>>;
  touchedFields: Set<string>;
  displayedErrors: FormErrorsType;
  setDisplayedErrors: Dispatch<SetStateAction<FormErrorsType>>;
  onInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof FormValuesType,
  ) => void;
  isFloatingWindow?: boolean;
  isReserve?: boolean;
};
const ContactFormComponent = (props: ContactFormComponentProps) => {
  const [allowSend, setAllowSend] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  function submitForm(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    props.setIsSubmitted(true);
    const errors = validateForm(props.formValues, props.isReserve);
    props.setDisplayedErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      // TODO: Send form data
    }
  }

  useEffect(() => {
    const errors = validateForm(props.formValues, props.isReserve);
    setAllowSend(Object.keys(errors).length === 0);
  }, [props.formValues, props.isReserve]);
  return (
    <form
      onSubmit={submitForm}
      id="contact-form"
      className={`background-tertiary md:p-16 p-8 w-full md:w-[32rem] ${
        props.isFloatingWindow ? "!pt-8" : ""
      }`}
    >
      <InputField
        label="Imię"
        type="text"
        name="name"
        value={props.formValues.name}
        onChange={(e) => props.onInputChange(e, "name")}
        error={props.displayedErrors.name}
        required
      />
      <InputError
        error={props.displayedErrors.name}
        touched={props.touchedFields.has("name")}
      />
      <InputField
        label="Adres e-mail"
        type="email"
        name="email"
        value={props.formValues.email}
        onChange={(e) => props.onInputChange(e, "email")}
        error={props.displayedErrors.email}
        required
      />
      <InputError
        error={props.displayedErrors.email}
        touched={props.touchedFields.has("email")}
      />

      {props.children}
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
  );
};
export default ContactFormComponent;
