import { NextFunction, Response } from "express";
import { IMessageBus } from "@/shared/message-bus/index.ts";
import z from "zod";
import { TypedBody } from "zodware";
import { CreateReportCommand } from "@/hotline/application/create-report-handler.ts";

export const createReportValidator = z
  .object({
    organization: z.string(),
    outdated_hotline: z.string(),
    updated_hotline: z.string(),
  })
  .strict();

export class CreateReportController {
  constructor(private readonly messageBus: IMessageBus) {}

  async handle(
    req: TypedBody<typeof createReportValidator>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const command = new CreateReportCommand(req.body);

      await this.messageBus.run(command);

      res.status(200).json({ message: "Successfully reported" });
    } catch (error) {
      next(error);
    }
  }
}
