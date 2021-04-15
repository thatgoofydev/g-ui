import { PartialWithType } from "../util";

export type FormErrors<T> = PartialWithType<T, string>;
export type FormBooleans<T> = PartialWithType<T, boolean>;

export type FormState<T> = {
  values: T;
  errors: FormErrors<T>;
  touched: FormBooleans<T>;
  focused: FormBooleans<T>;
  submitStatus: FormSubmitStatus;
};

export type FormContextState<T> = FormState<T> & {
  setFieldValue: (name: string, value: string) => void;
  setFieldTouched: (name: string, value: boolean) => void;
  setFieldFocused: (name: string, value: boolean) => void;
};

export enum FormSubmitStatus {
  IDLE,
  SUBMITTING,
  SUCCESS,
  ERROR
}

export type FormActions = {
  displaySuccess: () => Promise<void>;
  displayError: () => Promise<void>;
};
