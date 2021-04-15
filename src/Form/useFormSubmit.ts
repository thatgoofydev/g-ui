import { useContext } from "react";
import { FormContext } from "./FormContext";
import { FormSubmitStatus } from "./types";
import { hasError } from "./util";

type FormSubmitResult = {
  status: FormSubmitStatus;
  hasErrors: boolean;
};

export const useFormSubmit = (): FormSubmitResult | null => {
  const context = useContext(FormContext);
  if (context == null) {
    return null;
  }

  return {
    status: context.submitStatus,
    hasErrors: hasError(context.errors)
  };
};
