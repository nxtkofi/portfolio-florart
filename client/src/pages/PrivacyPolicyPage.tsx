import { type ReactElement } from "react";
import { PRIVACY_POLICY } from "../constants";

export function PrivacyPolicyPage(): ReactElement {
  return (
    <div className="flex flex-col justify-center items-center montserrat mx-8">
      <p className="pb-4 text-2xl text-center border-b border-gray-400 font-light mt-16 px-8 tracking-wide">
        Polityka prywatności
      </p>
      <ol className="list-none text-xl flex flex-col mt-4">
        {PRIVACY_POLICY.map((item, index) => (
          <li
            className="flex flex-col items-center my-8 w-full"
            key={item.header}
          >
            <div className="flex flex-col items-center text-xl font-medium text-center">
              <span>
                {index + 1}. {item.header}
              </span>
              {item.subheader && (
                <span className="mt-2 font-light">{item.subheader}</span>
              )}
            </div>

            {item.subsection && (
              <ol
                className={`mt-4 w-full ${
                  item.subsection.type === "decimal"
                    ? "list-decimal text-center"
                    : "list-disc text-left pl-5"
                }`}
              >
                {item.subsection.content.map((content, subIndex) => (
                  <li key={subIndex}>
                    <p className="font-light">{content}</p>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
