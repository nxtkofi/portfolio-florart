import validator from "validator";
import { FormErrorsType, FormValuesType } from "../types";

export default function validateForm(
  values: FormValuesType,
  isReserve?: boolean,
): FormErrorsType {
  const errors: FormErrorsType = {};

  if (!values.name) {
    errors.name = "Imię jest wymagane";
  } else if (values.name.length < 2) {
    errors.name = "Imię musi mieć co najmniej 2 znaki";
  }

  if (!values.email) {
    errors.email = "Email jest wymagany";
  } else if (!validator.isEmail(values.email)) {
    errors.email = "Nieprawidłowy format adresu email";
  }

  if (isReserve) {
    if (!values.phone) {
      errors.phone = "Numer telefonu jest wymagany";
    } else if (!validator.isMobilePhone(values.phone, "pl-PL")) {
      errors.phone = "Nieprawidłowy format numeru telefonu";
    }
  } else {
    if (!values.message) {
      errors.message = "Wiadomość jest wymagana";
    } else if (values.message.length <= 5) {
      errors.message = "Wiadomość musi mieć więcej niż 5 znaków";
    }
  }

  return errors;
}
