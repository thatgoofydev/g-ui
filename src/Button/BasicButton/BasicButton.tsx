import React from "react";
import { BaseButtonProps } from "../types";

export type BasicButtonProps = BaseButtonProps & {
  type: never;
  onClick: () => void;
};

const BasicButton = ({
  label,
  name,
  disabled,
  "data-testid": dataTestId,
  onClick
}: BasicButtonProps) => {
  return (
    <button
      type="button"
      name={name}
      disabled={disabled}
      data-testid={dataTestId}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export { BasicButton };
