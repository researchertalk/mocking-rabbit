
import Channel from './channel';

export default class Connection {
  static async createChannel() {
    return Channel;
  }

  static async close() {
    return true;
  }
}
