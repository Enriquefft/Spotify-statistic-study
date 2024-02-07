import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import dynamic from "next/dynamic";

/**
 * @param inputs - The class names to merge.
 * @returns The merged class names.
 */
export function clsn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const withNoSSR = (component: React.FunctionComponent) =>
  dynamic(async () => Promise.resolve(component), { ssr: false });

export type OmitStarting<T, K extends string> = {
  [P in keyof T as string extends P
    ? never
    : P extends `${K}${string}`
      ? never
      : P]: T[P];
};
