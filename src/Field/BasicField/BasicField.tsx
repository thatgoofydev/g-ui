import React from "react";
import cn from "classnames";

import { useFormField } from "../../Form/useFormField";
import { BaseFieldProps } from "../types";

import sharedStyles from "../field-shared.module.scss";

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
  disabled,
  "data-testid": dataTestId
}: BasicFieldProps) => {
  const formField = useFormField(name);
  if (!formField) return null;

  const {
    value,
    error,
    showError,
    disabled: disabledByForm,
    onChange,
    onFocus,
    onBlur
  } = formField;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const isDisabled = disabled || disabledByForm;

  const fieldClasses = cn({
    [sharedStyles.field]: true,
    [sharedStyles.disabled]: isDisabled,
    [sharedStyles.error]: showError
  });
  const labelClasses = cn(sharedStyles.label);
  const inputClasses = cn(sharedStyles.input);

  return (
    <div className={fieldClasses}>
      <label className={labelClasses}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value ?? ""}
        placeholder={placeholder}
        onChange={handleInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={isDisabled}
        data-testid={dataTestId}
        autoComplete="off"
        className={inputClasses}
      />
      {showError && <p className={sharedStyles.subtext}>{error}</p>}
    </div>
  );
};

export { BasicField };
