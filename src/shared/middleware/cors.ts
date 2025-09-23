import CORS, { CorsOptions } from "cors";
import ENVVARS from "@/shared/env.ts";
import { AppError } from "@/shared/app-error.ts";

export function cors() {
  const origins = ENVVARS.WHITELIST;
  const whitelist =
    origins === "*" || origins === "" ? "*" : origins.split(",");

  const options: CorsOptions = {
    credentials: true,
    origin: (origin, callback) => {
      if (whitelist === "*") {
        callback(null, true);
      } else if (!origin || whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new AppError("Request blocked"));
      }
    },
  };

  return CORS(options);
}
