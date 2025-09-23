import { MessageBus } from "@/shared/message-bus/index.ts";
import {
  CreateReportCommand,
  CreateReportHandler,
} from "@/hotline/application/create-report-handler.ts";
import { DiscordWebhookService } from "@/hotline/infrastructure/discord-webhook-service.ts";
import { CreateReportController } from "@/hotline/presentation/create-report-controller.ts";
import { HotlineRouter } from "@/hotline/presentation/hotline-router.ts";

export function createHotlineFeature() {
  const bus = MessageBus.getInstance();
  const webhookService = new DiscordWebhookService();
  const createReportHandler = new CreateReportHandler(webhookService);
  bus.register(CreateReportCommand, createReportHandler);

  const createReportController = new CreateReportController(bus);
  const hotlineRouter = new HotlineRouter(createReportController);

  return { router: hotlineRouter.router };
}
