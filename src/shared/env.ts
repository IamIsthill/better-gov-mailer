import { z } from "zod";
import dotenv from "dotenv";
import { resolve } from "node:path";
import process from "node:process";

let env: object;

if (Deno.env.get("NODE_ENV") == "development") {
  const envFile = ".env.dev";
  const path = resolve(process.cwd(), envFile);
  dotenv.config({ path });
  env = process.env;
} else {
  env = Deno.env.toObject();
}

const ENV_SCHEMA = z.object({
  PORT: z.coerce.number(),
  DISCORD_WEBHOOK: z.string(),
  WHITELIST: z.string(),
});

const { data, error } = ENV_SCHEMA.safeParse(env);

if (error) {
  console.error(error.issues);
  throw new Error(`Misconfigured env: ${error.issues}`);
}
const ENVVARS = data!;

export default ENVVARS;
