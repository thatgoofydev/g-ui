export type DeepPartialWithValueType<T, U> = {
  [K in keyof T]?: K extends Object ? DeepPartialWithValueType<T[K], U> : U;
};

export type RecursiveKeysOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: TObj[TKey] extends object
    ? `${TKey}` | `${TKey}.${RecursiveKeysOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & (string | number)];
