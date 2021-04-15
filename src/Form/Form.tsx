import React, { ReactNode } from "react";
import { FormContext } from "./FormContext";
import { FormStateProps, useFormState } from "./useFormState";

type FormProps<T> = FormStateProps<T> & {
  children?: ReactNode;
};

const Form = <T extends Object>({ children, ...restProps }: FormProps<T>) => {
  const { contextValue, handleSubmit } = useFormState(restProps);

  return (
    <form onSubmit={handleSubmit}>
      <FormContext.Provider value={contextValue}>
        {children}
      </FormContext.Provider>
    </form>
  );
};

export { Form };
