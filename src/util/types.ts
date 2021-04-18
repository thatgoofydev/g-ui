export type DeepPartialWithValueType<T, U> = {
  [P in keyof T]?: P extends Object ? DeepPartialWithValueType<T[P], U> : U;
};
