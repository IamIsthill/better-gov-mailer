import { MessageBus } from "../shared/message-bus";
import {
  CreateReportCommand,
  CreateReportHandler,
} from "./application/create-report-handler";
import { DiscordWebhookService } from "./infrastructure/discord-webhook-service";
import { CreateReportController } from "./presentation/create-report-controller";
import { HotlineRouter } from "./presentation/hotline-router";

export function createHotlineFeature() {
  const bus = MessageBus.getInstance();
  const webhookService = new DiscordWebhookService();
  const createReportHandler = new CreateReportHandler(webhookService);
  bus.register(CreateReportCommand, createReportHandler);

  const createReportController = new CreateReportController(bus);
  const hotlineRouter = new HotlineRouter(createReportController);

  return { router: hotlineRouter.router };
}
