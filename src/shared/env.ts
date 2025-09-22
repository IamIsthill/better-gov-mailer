import { z } from "zod";
import dotenv from "dotenv";
import { resolve } from "path";

// Determine environment and load corresponding env file
const env = process.env.NODE_ENV || "production";
const envFile = env === "production" ? ".env" : ".env.dev";
const path = resolve(process.cwd(), envFile);
dotenv.config({ path });

const ENV_SCHEMA = z.object({
  PORT: z.coerce.number(),
  DISCORD_WEBHOOK: z.string(),
  WHITELIST: z.string(),
  PROXY_SERVER: z.string(),
});

const { data, error } = ENV_SCHEMA.safeParse(process.env);

if (error) {
  console.error(error.issues);
  throw new Error(`Misconfigured env: ${error.issues}`);
}
const ENVVARS = data!;

export default ENVVARS;
