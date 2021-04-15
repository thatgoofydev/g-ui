import React from "react";
import { BasicButton, BasicButtonProps } from "./BasicButton/BasicButton";
import { SubmitButton, SubmitButtonProps } from "./SubmitButton/SubmitButton";

type ButtonProps = BasicButtonProps | SubmitButtonProps;

const Button = (props: ButtonProps) => {
  if (props.type === "submit") {
    return <SubmitButton {...props} />;
  }

  return <BasicButton {...props} />;
};

export { Button };
