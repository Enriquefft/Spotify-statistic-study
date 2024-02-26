"use client";

import { useEffect } from "react";

/**
 * Error component to be displayed when an error occurs during the authentication process.
 * @param props - The component props.
 * @param props.error - The error that occurred.
 * @param props.reset - A function to reset the authentication process.
 * @returns The rendered component.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <p className="text-center text-sm text-gray-600 mt-2">{error.message}</p>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={() => {
          reset();
        }}
      >
        Try again
      </button>
    </main>
  );
}
