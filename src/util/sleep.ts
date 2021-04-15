export const sleep = (delayInMillis: number) => {
  return new Promise((resolve) => setTimeout(resolve, delayInMillis));
};
