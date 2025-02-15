import { ChangeEvent, type ReactElement } from "react";
import InputError from "./InputError";

export interface ContactFormFieldProps {
  required: boolean;
  name: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  className: string;
  displayError: string;
  labelText: string;
}

export function ContactFormField(props: ContactFormFieldProps): ReactElement {
  return (
    <>
      <label htmlFor={props.name} className="block">
        <b className="text-red-500">*</b> {props.labelText}:
      </label>
      <input
        required={props.required}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        className={props.className}
      />
      <InputError error={props.displayError} touched={true} />
    </>
  );
}
