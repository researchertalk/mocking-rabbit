
import hook from './hook';

const tracker = hook.tracker;

export default class Channel {
  // eslint-disable-next-line no-unused-vars
  static async assertExchange(exhange, type, options) {
    return true;
  }

  // eslint-disable-next-line no-unused-vars
  static async assertQueue(queue, options) {
    return true;
  }

  // eslint-disable-next-line no-unused-vars
  static async bindQueue(source, destination, routingKey) {
    return true;
  }

  // eslint-disable-next-line no-unused-vars
  static async publish(exchange, routingKey, content, options) {
    return true;
  }

  // eslint-disable-next-line no-unused-vars
  static async sendToQueue(queue, data) {
    return true;
  }

  // eslint-disable-next-line no-unused-vars
  static async consume(queue) {
    return new Promise((resolve) => {
      tracker.consumer.track({ queue }, resolve);
    });
  }
}
