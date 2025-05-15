import { type ReactElement } from "react";
import { SHOP_REGULATIONS } from "../constants";

export function StorePolicyPage(): ReactElement {
  return (
    <div className="flex flex-col justify-center items-center montserrat mx-8">
      <p className="pb-4 text-2xl text-center border-b border-gray-400 font-light mt-16 px-8 tracking-wide">
        Regulamin sklepu
      </p>
      <ol className="list-none text-xl flex flex-col mt-4">
        {SHOP_REGULATIONS.map((value, index) => (
          <li className="flex flex-col items-center my-8" key={value.header}>
            <div className="flex  justify-center text-xl font-medium">
              <span className="text-xl">{index + 1}</span>
              <span className="ml-2">{value.header}</span>
            </div>
            <ol className="text-xl list-decimal mt-4 text-center">
              {value.subsections.map((subsection, subIndex) => (
                <li key={subIndex}>
                  <p className="font-light">{subsection}</p>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
