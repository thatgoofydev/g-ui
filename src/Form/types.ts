import { DeepPartialWithValueType } from "../util";

export type FormErrors<T extends object> = DeepPartialWithValueType<T, string>;
export type FormBooleans<T extends object> = DeepPartialWithValueType<
  T,
  boolean
>;

export type FormState<T extends object> = {
  values: T;
  errors: FormErrors<T>;
  touched: FormBooleans<T>;
  focused: FormBooleans<T>;
  submitStatus: FormSubmitStatus;
};

export type FormContextState<T extends object> = FormState<T> & {
  setFieldValue: (name: string, value: string | any[]) => void;
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
