export class AppError extends Error {
  public readonly statusCode: number;
  public readonly cause?: Error;

  constructor(message?: string, statusCode = 500, cause?: Error) {
    super(message ?? "Something went wrong");
    this.name = "AppError";
    this.statusCode = statusCode;
    this.cause = cause;

    Object.setPrototypeOf(this, AppError.prototype);
  }
}
