import React, { ChangeEvent } from "react";
import InputError from "./InputError";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  rows?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  required,
  rows,
}) => {
  const inputClasses = `w-full border transition-colors duration-200 outline-none ${
    error
      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
      : "border-gray-300 focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
  }`;

  return (
    <div className="">
      <label htmlFor={name} className="block mb-1">
        {required ? <b className="text-red-500">*</b> : null} {label}:
      </label>
      {type === "textarea" ? (
        <textarea
          required={required}
          name={name}
          value={value || ""}
          onChange={onChange}
          rows={rows}
          className={inputClasses}
        />
      ) : (
        <input
          required={required}
          name={name}
          value={value || ""}
          onChange={onChange}
          type={type}
          className={inputClasses}
        />
      )}
      <InputError error={error} />
    </div>
  );
};

export default InputField;
