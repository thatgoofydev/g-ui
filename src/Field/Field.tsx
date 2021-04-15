import React from "react";
import { BasicField, BasicFieldProps } from "./BasicField/BasicField";

type FieldProps = BasicFieldProps;

const Field = (props: FieldProps) => {
  return <BasicField {...props} />;
};

export { Field };
