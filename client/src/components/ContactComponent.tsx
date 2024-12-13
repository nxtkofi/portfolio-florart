import { type ReactElement } from "react";

export function ContactComponent(): ReactElement {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center w-full">
      <div className="background-secondary montserrat font-light text-center text-3xl mb-8 md:w-fit md:px-20 w-full py-6 place-self-center text-primary">
        Zostaw wiadomość
      </div>
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
  );
}
