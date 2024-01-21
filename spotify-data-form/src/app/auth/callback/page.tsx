"use client";

import { z } from "zod";

const responseParamsSchema = z.preprocess(
  (val) => {
    if (typeof val !== "string") {
      throw new Error("Expected a string");
    }

    return val
      .substring(1)
      .split("&")
      .reduce<Record<string, string>>((acc, param) => {
        const [key, value] = param.split("=") as [string, string];

        acc[key] = value;
        return acc;
      }, {});
  },
  z
    .object({
      access_token: z.string(),
      token_type: z.literal("Bearer"),
      expires_in: z.coerce.number(),
      state: z.string(),
    })
    .or(
      z.object({
        error: z.string(),
        state: z.string(),
      }),
    ),
);

/**
 *
 */
export default function Page() {
  const params = responseParamsSchema.parse(window.location.hash);

  const localState = localStorage.getItem("state");

  if (localState !== params.state) {
    throw new Error("Invalid state");
  }

  return (
    <main>
      <div>
        {"error" in params ? (
          <div>Failed to authenticate: {params.error}</div>
        ) : (
          Object.entries(params).map(([key, value]) => (
            <div key={key}>
              {key}: {value}
            </div>
          ))
        )}
      </div>
    </main>
  );
}
