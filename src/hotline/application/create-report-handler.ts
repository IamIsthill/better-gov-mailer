import { Message, MessageHandler } from "../../shared/message-bus";
import { WebhookService } from "./abstractions/webhook-service";

interface Props {
  organization: string;
  outdated_hotline: string;
  updated_hotline: string;
}

export class CreateReportCommand implements Message {
  result?: void;
  constructor(public readonly props: Props) {}
}

export class CreateReportHandler
  implements MessageHandler<CreateReportCommand>
{
  constructor(private readonly webhookService: WebhookService) {}

  async handle({ props }: CreateReportCommand): Promise<void> {
    await this.webhookService.send(props);
  }
}
