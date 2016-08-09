
import Connection from './connection';

export default class Amqplib {
  // eslint-disable-next-line no-unused-vars
  static async connect(url = 'amqp://localhost') {
    return Connection;
  }
}
