import React from "react";
import { FormFieldProps } from "../common/interfaces";

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
  maxLen,
  placeholder
}) => {
  return (
    <div className="flex flex-row px-12 py-2 gap-2 justify-center">
      <div className="w-1/2">
        <label htmlFor={id} className="flex justify-end">
          {label}
        </label>
      </div>
      <div className="flex flex-col">
        <div>
          <input
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            maxLength={maxLen}
            placeholder={placeholder}
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        {error && <div className="flex justify-end text-red-600">{error}</div>}
      </div>
    </div>
  );
};

export default FormField;
