import React from "react";
import { FormSubmitStatus } from "../../Form/types";
import { useFormSubmit } from "../../Form/useFormSubmit";
import { BaseButtonProps } from "../types";

export type SubmitButtonProps = BaseButtonProps & {
  type: "submit";
};

const SubmitButton = ({
  label,
  name,
  disabled,
  "data-testid": dataTestId
}: SubmitButtonProps) => {
  const { status, hasErrors } = useFormSubmit();

  return (
    <button
      type="submit"
      name={name}
      disabled={disabled || hasErrors}
      data-testid={dataTestId}
    >
      {label}
      {status !== FormSubmitStatus.IDLE && (
        <pre>{FormSubmitStatus[status]}</pre>
      )}
    </button>
  );
};

export { SubmitButton };
