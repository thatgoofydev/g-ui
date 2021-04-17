import React from "react";
import cn from "classnames";

import { BaseButtonProps } from "../types";

import sharedStyles from "../button-shared.module.scss";

export type BasicButtonProps = BaseButtonProps & {
  type?: never;
  style?: "solid" | "outline";
  onClick: () => void;
};

const BasicButton = ({
  label,
  name,
  disabled,
  style = "solid",
  "data-testid": dataTestId,
  onClick
}: BasicButtonProps) => {
  const buttonClasses = cn({
    [sharedStyles.button]: true,
    [sharedStyles.outline]: style == "outline",
    [sharedStyles.disabled]: disabled
  });

  return (
    <button
      type="button"
      name={name}
      disabled={disabled}
      data-testid={dataTestId}
      onClick={onClick}
      className={buttonClasses}
    >
      {label}
    </button>
  );
};

export { BasicButton };
