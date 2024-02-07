/* eslint-disable @typescript-eslint/naming-convention */
import { z } from "zod";

import { genders } from "./genders";
import { districts } from "./districts";
import { varieties } from "./varieties";

export const spotifyAuthResponseSchema = z.preprocess(
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

export const genderSchema = z.enum(genders);
export const districtSchema = z.enum(districts);
export const varietySchema = z.enum(varieties);
export const studyCenterSchema = z.string().optional();
