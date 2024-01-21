"use client";

import dynamic from "next/dynamic";

// TODO: Refactor into a generic ssr-disabler component
const NoSSR = dynamic(async () => import("@/ui/auth/callback/params.tsx"), {
  ssr: false,
});
/**
 *
 */
export default function Page() {
  return (
    <main>
      <NoSSR />
    </main>
  );
}
