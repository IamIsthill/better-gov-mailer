import { AppError } from "@/shared/app-error.ts";
import ENVVARS from "@/shared/env.ts";
import {
  WebhookData,
  WebhookService,
} from "@/hotline/application/abstractions/webhook-service.ts";
import axios from "axios";

export class DiscordWebhookService implements WebhookService {
  private readonly url = ENVVARS.DISCORD_WEBHOOK;

  async sendHotlineReport(data: WebhookData): Promise<void> {
    try {
      const embed = this.createHotlineReport(data);
      await axios.post(this.url, {
        content: "",
        embeds: [embed],
      });
    } catch (error) {
      if (error instanceof axios.AxiosError && error.response?.status === 429) {
        const retry = error.response.headers["retry-after"];
        throw new AppError(retry ? "Retry after " + retry : "", 429, error);
      } else {
        throw new AppError("Failed to send to Discord", 502);
      }
    }
  }

  private createHotlineReport(data: WebhookData) {
    return {
      title: "Outdated Hotline Report",
      description: `The hotline for **${data.organization}** has been updated.`,
      color: 0xff0000,
      fields: [
        { name: "Old Hotline", value: data.outdated_hotline, inline: true },
        { name: "New Hotline", value: data.updated_hotline, inline: true },
      ],
      timestamp: new Date().toISOString(),
      footer: { text: "BetterGovMailer" },
    };
  }
}
