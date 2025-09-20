export interface IMessage<R = any> {
  result?: R;
}

export interface IMessageHandler<M extends IMessage> {
  handle(message: M): Promise<M["result"]>;
}

export interface IMessageBus {
  register<M extends IMessage>(
    message: new (...args: any[]) => M,
    handler: IMessageHandler<M>
  ): void;

  run<M extends IMessage>(message: M): Promise<M["result"]>;
}

export class MessageBus implements IMessageBus {
  private handlers = new Map<Function, IMessageHandler<IMessage>>();
  private static instance: MessageBus;

  static getInstance(): MessageBus {
    if (!MessageBus.instance) {
      MessageBus.instance = new MessageBus();
    }
    return MessageBus.instance;
  }
  register<M extends IMessage>(
    message: new (...args: any[]) => M,
    handler: IMessageHandler<M>
  ) {
    this.handlers.set(message, handler);
  }

  async run<M extends IMessage>(message: M): Promise<M["result"]> {
    const handler = this.handlers.get(message.constructor);
    if (!handler)
      throw new Error(`No handler registered for ${message.constructor.name}`);

    return handler.handle(message);
  }
}
