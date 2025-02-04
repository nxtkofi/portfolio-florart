import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { XIcon } from "lucide-react";
import ContactFormComponent from "./ContactFormComponent";
import InputError from "./InputError";
import InputField from "./InputField";
import validateForm from "../helpers/validateForm";

export interface ContactFormProps {
  isReserve?: boolean;
  isFloatingWindow?: boolean;
  className?: string;
  closeWindow?: () => void;
}

export type FormValuesType = {
  name: string;
  email: string;
  message?: string;
  phone?: string;
};

export type FormErrorsType = {
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
  const [displayedErrors, setDisplayedErrors] = useState<FormErrorsType>({});
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      <ContactFormComponent
        onInputChange={onInputChange}
        isReserve={props.isReserve}
        isFloatingWindow={props.isFloatingWindow}
        displayedErrors={displayedErrors}
        setDisplayedErrors={setDisplayedErrors}
        setTouchedFields={setTouchedFields}
        touchedFields={touchedFields}
        setIsSubmitted={setIsSubmitted}
        formValues={formValues}
        setFormValues={setFormValues}
      >
        {!props.isReserve ? (
          <>
            <InputField
              label="Wiadomość"
              type="textarea"
              name="message"
              value={formValues.message!}
              onChange={(e) => onInputChange(e, "message")}
              error={displayedErrors.message}
              required
              rows={7}
            />
            <InputError
              error={displayedErrors.message}
              touched={touchedFields.has("message")}
            />
          </>
        ) : (
          <>
            <InputField
              label="Numer telefonu"
              type="tel"
              name="phone"
              value={formValues.phone!}
              onChange={(e) => onInputChange(e, "phone")}
              error={displayedErrors.phone}
              required
            />
            <InputError
              error={displayedErrors.phone}
              touched={touchedFields.has("phone")}
            />
          </>
        )}
      </ContactFormComponent>
    </div>
  );
}

export default ContactForm;
