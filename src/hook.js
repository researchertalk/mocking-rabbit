
import { EventEmitter } from 'events';

class Consumer {

  constructor(tracker) {
    this.tracker = tracker;
    this.consumers = [];
  }

  reset() {
    this.consumers = [];
  }

  track(consumer, resolve) {
    let step;

    if (this.tracker.tracking) {
      // eslint-disable-next-line no-param-reassign
      consumer.response = function response(result) {
        // eslint-disable-next-line no-param-reassign
        consumer.result = result;
        resolve(result);
      };

      // eslint-disable-next-line no-param-reassign
      delete consumer.result;

      step = this.consumers.push(consumer);
      this.tracker.emit('consume', consumer, step);
    }
  }

  first() {
    return this.consumers[0];
  }

  count() {
    return this.consumers.length;
  }

  last() {
    return this.consumers[this.count() - 1];
  }

  at(step) {
    return this.consumers[step - 1];
  }
}

class Tracker extends EventEmitter {

  constructor() {
    super();
    this.tracking = false;
    this.consumer = new Consumer(this);
  }

  install() {
    this.tracking = true;
    this.consumer.reset();
  }

  uninstall() {
    this.tracking = false;
    this.consumer.reset();
    this.removeAllListeners('consume');
  }
}

export default { Tracker, Consumer, tracker: new Tracker() };
