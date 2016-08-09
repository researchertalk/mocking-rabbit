
import { tracker } from './hook';

export default class Channel {
  // eslint-disable-next-line no-unused-vars
  static async assertQueue(queue) {
    return true;
  }

  // eslint-disable-next-line no-unused-vars
  static async sendToQueue(queue, data) {
    return true;
  }

  // eslint-disable-next-line no-unused-vars
  static async consume(queue) {
    const message = await tracker.consumers.track({ queue });
    return message;
  }
}
