import { Circle, Globe, Instagram, Mail, PhoneCall } from "lucide-react";
import { type ReactElement } from "react";

export function Footer(): ReactElement {
  function shouldAddYear(): number | null {
    const date = new Date();
    const currentYear = date.getFullYear();
    return currentYear === 2024 ? null : currentYear;
  }

  return (
    <div className="footer">
      <a className="flex flex-row items-center cursor-default">
        <Globe size={36} strokeWidth={1} className="-ml-6" />
        <p className="ml-4">Weronika Florków</p>
      </a>
      <a
        className="flex flex-row items-center"
        href="mailto:weronika.florkow@gmail.com"
      >
        <div className="relative -ml-6">
          <Circle size={48} strokeWidth={0.8} />
          <Mail
            stroke="#ffffff"
            fill="00000"
            size={32}
            strokeWidth={2}
            className="absolute top-[0.5rem] left-[0.5rem]"
          />
        </div>
        <p>weronika.florkow@gmail.com</p>
      </a>
      <a
        target="_blank"
        href="https://instagram.com/weronikaflorkow"
        className="flex flex-row items-center"
      >
        <div className="relative -ml-6">
          <Circle size={48} strokeWidth={0.8} />
          <Instagram
            stroke="#ffffff"
            fill="00000"
            size={32}
            strokeWidth={2}
            className="absolute top-[0.5rem] left-[0.5rem]"
          />
        </div>
        <p>@weronikaflorkow</p>
      </a>
      <a href="tel:+48508564555" className="flex flex-row items-center">
        <div className="relative -ml-6">
          <Circle size={48} strokeWidth={0.8} />
          <PhoneCall
            stroke="#ffffff"
            fill="00000"
            size={28}
            strokeWidth={0.1}
            className="absolute top-[0.7rem] left-[0.625rem]"
          />
        </div>
        <p>+48 508 564 555</p>
      </a>

      <div className="-mb-8 mt-8 flex flex-col font-light alexandria text-sm text-center cursor-default">
        <p>Design by Weronika Florków</p>
        <a
          className="flex flex-row justify-center items-center align-center gap-x-0 cursor-pointer"
          href="https://github.com/nxtkofi"
          target="_blank"
        >
          Realization by Piotr Śliwa |
          <p className="underline !ml-1">nxtkofi on GitHub</p>
        </a>
        <p>
          Weronika Florków &copy; | 2024
          {shouldAddYear() ? " - " + shouldAddYear() : ""}
        </p>
      </div>
    </div>
  );
}
