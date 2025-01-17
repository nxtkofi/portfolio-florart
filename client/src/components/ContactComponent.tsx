import { type ReactElement } from "react";
import { ContactForm } from "./ContactForm";

export function ContactComponent(): ReactElement {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center w-full">
      <div className="form-header md:px-20">Zostaw wiadomość</div>
      <ContactForm />
    </div>
  );
}
