import React from "react";
import cn from "classnames";

import { BaseButtonProps } from "../types";
import { FormSubmitStatus } from "../../Form/types";
import { useFormSubmit } from "../../Form/useFormSubmit";

import sharedStyles from "../button-shared.module.scss";
import styles from "./SubmitButton.module.scss";
import { Icon } from "../../Icon";

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

  const isDisabled = disabled || hasErrors;
  const isSubmitting = status !== FormSubmitStatus.IDLE;

  const buttonClasses = cn({
    [sharedStyles.button]: true,
    [sharedStyles.disabled]: disabled || hasErrors,

    [styles.button]: true,
    [styles.submitting]: isSubmitting,
    [styles.success]: status === FormSubmitStatus.SUCCESS,
    [styles.error]: status === FormSubmitStatus.ERROR
  });

  return (
    <button
      type="submit"
      name={name}
      disabled={isDisabled || isSubmitting}
      data-testid={dataTestId}
      className={buttonClasses}
    >
      <span className={styles.label}>{label}</span>
      {status === FormSubmitStatus.SUBMITTING && (
        <div className={styles.spinner} />
      )}
      {status === FormSubmitStatus.SUCCESS && (
        <Icon icon="check" size={24} className={styles.icon} />
      )}
      {status === FormSubmitStatus.ERROR && (
        <Icon icon="cross" size={20} className={styles.icon} />
      )}
    </button>
  );
};

export { SubmitButton };
