import { Router } from "express";
import validateRequest from "zodware";
import {
  CreateReportController,
  createReportValidator,
} from "@/hotline/presentation/create-report-controller.ts";

export class HotlineRouter {
  public readonly router: Router;

  constructor(private readonly createReportController: CreateReportController) {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.post(
      "/hotlines/outdated",
      validateRequest.default({ body: createReportValidator }),
      this.createReportController.handle.bind(this.createReportController)
    );
  }
}
