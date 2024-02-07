import dynamic from "next/dynamic";

export const withNoSSR = (component: React.FunctionComponent) =>
  dynamic(async () => Promise.resolve(component), { ssr: false });

export type OmitStarting<T, K extends string> = {
  [P in keyof T as string extends P
    ? never
    : P extends `${K}${string}`
      ? never
      : P]: T[P];
};
