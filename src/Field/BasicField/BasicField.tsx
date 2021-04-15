import React from "react";
import { useFormField } from "../../Form/useFormField";
import { BaseFieldProps } from "../types";

type BaseInputSupportedTypes =
  | "date"
  | "email"
  | "month"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export type BasicFieldProps = BaseFieldProps & {
  type: BaseInputSupportedTypes;
};

const BasicField = ({
  type,
  name,
  label,
  placeholder,
  "data-testid": dataTestId
}: BasicFieldProps) => {
  const formField = useFormField(name);
  if (!formField) return null;

  const {
    value,
    error,
    showError,
    disabled,
    onChange,
    onFocus,
    onBlur
  } = formField;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value ?? ""}
        placeholder={placeholder}
        onChange={handleInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        data-testid={dataTestId}
        autoComplete="off"
      />
      {showError && <p>{error}</p>}
    </div>
  );
};

export { BasicField };
