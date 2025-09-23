import { NextFunction, Request, Response } from "express";
import { AppError } from "@/shared/app-error.ts";

export function errorHandler(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (error instanceof AppError) {
    if (error.cause) {
      console.error(error.cause);
    } else {
      console.error(error);
    }

    res
      .status(error.statusCode)
      .json({ message: error.message, name: error.name });
  } else {
    res
      .status(500)
      .json({ message: "Something went wrong", name: "Internal Server Error" });
  }
}
