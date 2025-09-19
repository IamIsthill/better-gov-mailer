export interface Message<R = any> {
  result?: R;
}

export interface MessageHandler<M extends Message> {
  handle(message: M): Promise<M["result"]>;
}

export class MessageBus {
  private handlers = new Map<Function, MessageHandler<Message>>();
  private static instance: MessageBus;

  static getInstance(): MessageBus {
    if (!MessageBus.instance) {
      MessageBus.instance = new MessageBus();
    }
    return MessageBus.instance;
  }
  register<M extends Message>(
    message: new (...args: any[]) => M,
    handler: MessageHandler<M>
  ) {
    this.handlers.set(message, handler);
  }

  async run<M extends Message>(message: M): Promise<M["result"]> {
    const handler = this.handlers.get(message.constructor);
    if (!handler)
      throw new Error(`No handler registered for ${message.constructor.name}`);

    return handler.handle(message);
  }
}
