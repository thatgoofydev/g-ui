import { useContext } from "react";
import { FormContext } from "./FormContext";
import { FormSubmitStatus } from "./types";
import { getValue } from "./util";

type FormFieldResult = {
  value: string;
  error?: string;
  showError: boolean;
  disabled: boolean;

  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
};

const useFormField = (name: string): FormFieldResult => {
  const context = useContext(FormContext);

  if (!context) {
    return null;
  }

  const value = getValue(context.values, name) as string;
  const error = getValue(context.errors, name);
  const showError = getValue(context.touched, name) && !!error;
  const disabled = context.submitStatus !== FormSubmitStatus.IDLE;

  const onChange = (value: string) => context.setFieldValue(name, value);
  const onFocus = () => {
    context.setFieldFocused(name, true);
  };
  const onBlur = () => {
    context.setFieldTouched(name, true);
    context.setFieldFocused(name, false);
  };

  return {
    value,
    error,
    showError,
    disabled,

    onChange,
    onFocus,
    onBlur
  };
};

export { useFormField };
