export type PartialWithType<T, U> = {
  [P in keyof T]?: P extends Object ? PartialWithType<T[P], U> : U;
};
