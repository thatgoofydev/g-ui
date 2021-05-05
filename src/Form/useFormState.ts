import { FormEventHandler, FormEvent, useState } from "react";
import {
  FormActions,
  FormContextState,
  FormErrors,
  FormState,
  FormSubmitStatus
} from "./types";
import { hasError, setValue, setAllValues } from "./util";
import { deepCopy, sleep } from "../util";

export type FormStateProps<T extends object> = {
  initialValues: T;
  onValidate: (values: T, actions: FormActions, errors: FormErrors<T>) => void;
  onSubmit: (values: T, actions: FormActions) => Promise<void>;
};

type FormStateResult<T extends object> = {
  contextValue: FormContextState<T>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
};

const getInitialState = <T extends object>(initialValues: T): FormState<T> => {
  const errors = setAllValues(deepCopy(initialValues), "");
  const touched = setAllValues(deepCopy(initialValues), false);
  const focused = setAllValues(deepCopy(initialValues), false);

  return {
    values: initialValues,
    errors,
    touched,
    focused,
    submitStatus: FormSubmitStatus.IDLE
  };
};

const STATUS_DELAY = 1600;

const newEmptyErrorObject = <T extends object>(values: T): FormErrors<T> => {
  return setAllValues(deepCopy(values), null);
};

const useFormState = <T extends object>({
  initialValues,
  onValidate,
  onSubmit
}: FormStateProps<T>): FormStateResult<T> => {
  const [state, setState] = useState<FormState<T>>(
    getInitialState(initialValues)
  );

  const setFieldValue = (name: string, value: string | any[]) => {
    const values = deepCopy(state.values);
    setValue(values, name, value);

    const errors = newEmptyErrorObject(values);
    onValidate(values, formActions, errors);

    setState((prev) => ({
      ...prev,
      values,
      errors
    }));
  };

  const setFieldTouched = (name: string, value: boolean) => {
    setState((prev) => ({
      ...prev,
      touched: setValue(prev.touched, name, value)
    }));
  };

  const setFieldFocused = (name: string, value: boolean) => {
    setState((prev) => ({
      ...prev,
      focused: setValue(prev.focused, name, value)
    }));
  };

  const contextValue = {
    ...state,

    setFieldValue,
    setFieldTouched,
    setFieldFocused
  };

  const displaySubmitStatus = async (submitStatus: FormSubmitStatus) => {
    setState((prev) => ({
      ...prev,
      submitStatus
    }));

    await sleep(STATUS_DELAY);

    setState((prev) => ({
      ...prev,
      submitStatus: FormSubmitStatus.IDLE
    }));
  };

  const formActions: FormActions = {
    displaySuccess: () => displaySubmitStatus(FormSubmitStatus.SUCCESS),
    displayError: () => displaySubmitStatus(FormSubmitStatus.ERROR)
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = newEmptyErrorObject(state.values);
    onValidate(state.values, formActions, errors);

    setState((prev) => ({
      ...prev,
      errors,
      touched: setAllValues(prev.touched, true)
    }));

    if (!hasError(errors)) {
      setState((prev) => ({
        ...prev,
        submitStatus: FormSubmitStatus.SUBMITTING
      }));
      onSubmit(state.values, formActions);
    }
  };

  return {
    contextValue,
    handleSubmit
  };
};

export { useFormState };
