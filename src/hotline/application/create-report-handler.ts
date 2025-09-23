import { IMessage, IMessageHandler } from "@/shared/message-bus/index.ts";
import { WebhookService } from "@/hotline/application/abstractions/webhook-service.ts";

interface Props {
  organization: string;
  outdated_hotline: string;
  updated_hotline: string;
}

export class CreateReportCommand implements IMessage {
  result?: void;
  constructor(public readonly props: Props) {}
}

export class CreateReportHandler
  implements IMessageHandler<CreateReportCommand>
{
  constructor(private readonly webhookService: WebhookService) {}

  async handle({ props }: CreateReportCommand): Promise<void> {
    await this.webhookService.sendHotlineReport(props);
  }
}
