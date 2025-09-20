export interface WebhookData {
  organization: string;
  outdated_hotline: string;
  updated_hotline: string;
}

export interface WebhookService {
  sendHotlineReport(data: WebhookData): Promise<void>;
}
