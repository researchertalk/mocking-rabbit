/* global describe, beforeEach, afterEach, it, chai, assert */

const chai = require('chai');
const amqplib = require('./../lib/amqplib').default;
const connection = require('./../lib/connection').default;
const channel = require('./../lib/channel').default;
const hook = require('./../lib/hook').default;

const Tracker = hook.Tracker;
const Consumer = hook.Consumer;
const tracker = hook.tracker;

const assert = chai.assert;

describe('amqplib', function amqplibTestCase() {
  describe('connect', function connectTestCase() {
    it('should be a promise', function assertion(done) {
      assert.isFunction(amqplib.connect().then);
      done();
    });

    it('should return connection function', function assertion(done) {
      amqplib
        .connect('amqp://localhost')
        .then(function connected(result) {
          assert.isFunction(result, connection);
          done();
        })
        .catch(done);
    });
  });
});

describe('connection', function connectionTestCase() {
  describe('createChannel', function createChannelTestCase() {
    it('should be a promise', function assertion(done) {
      assert.isFunction(connection.createChannel().then);
      done();
    });

    it('should resolved with channel function', function assertion(done) {
      connection
        .createChannel()
        .then(function channelCreated(result) {
          assert.isFunction(result);
          done();
        })
        .catch(done);
    });
  });
});

describe('channel', function channelTestCase() {
  describe('assertQueue', function assertQueueTestCase() {
    it('should be a promise', function assertion(done) {
      assert.isFunction(channel.assertQueue().then);
      done();
    });

    it('should resolved with true', function assertion(done) {
      channel
        .assertQueue('aQueue')
        .then(function asserted(result) {
          assert.isTrue(result);
          done();
        })
        .catch(done);
    });
  });

  describe('sendToQueue', function sendToQueueTestCase() {
    it('should be a promise', function assertion(done) {
      assert.isFunction(channel.sendToQueue().then);
      done();
    });

    it('should resolved with true', function assertion(done) {
      channel
        .sendToQueue('aQueue', 'data')
        .then(function sent(result) {
          assert.isTrue(result);
          done();
        })
        .catch(done);
    });
  });

  describe('consume', function consumeTestCase() {
    it.skip('should be a promise', function assertion(done) {
      assert.isFunction(channel.consume().then);
      done();
    });

    it.skip('should resolved with object', function assertion(done) {
      channel
        .consume('aQueue')
        .then(function consumed(result) {
          assert.isObject(result);
          done();
        })
        .catch(done);
    });

    it.skip('should resolved with object containing content property',
      function assertion(done) {
        channel
          .consume('aQueue')
          .then(function consumed(result) {
            assert.property(result, 'content');
            done();
          })
          .catch(done);
      });
  });
});

describe('hook', function hookTestCase() {
  describe('Tracker', function TrackerTestCase() {
    it('can be intantiated', function assertion(done) {
      const hookTracker = new Tracker();
      assert.instanceOf(hookTracker, Tracker);
      done();
    });

    it('must have tracking status false as initial value',
      function assertion(done) {
        const hookTracker = new Tracker();
        assert.isFalse(hookTracker.tracking);
        done();
      });

    it('must have consumers instance as initial value',
      function assertion(done) {
        const hookTracker = new Tracker();
        assert.instanceOf(hookTracker.consumer, Consumer);
        done();
      });

    it('install() should change tracking status into true',
      function assertion(done) {
        const hookTracker = new Tracker();
        hookTracker.install();
        assert.isTrue(hookTracker.tracking);
        done();
      });

    it('install() should empty consumers list', function assertion(done) {
      const hookTracker = new Tracker();
      hookTracker.install();
      assert.lengthOf(hookTracker.consumer.consumers, 0);
      done();
    });

    it('uninstall() should change tracking status to false',
      function assertion(done) {
        const hookTracker = new Tracker();
        hookTracker.install();
        hookTracker.uninstall();
        assert.isFalse(hookTracker.tracking);
        done();
      });

    it('uninstall() should empty consumers list', function assertion(done) {
      const hookTracker = new Tracker();
      hookTracker.install();
      hookTracker.uninstall();
      assert.lengthOf(hookTracker.consumer.consumers, 0);
      done();
    });

    it.skip('uninstall() should remove all "consume" listeners',
      function assertion(done) {
        done();
      });
  });

  describe('Consumer', function ConsumerTestCase() {
    it('can be instantiated', function assertion(done) {
      const hookConsumer = new Consumer(new Tracker());
      assert.instanceOf(hookConsumer, Consumer);
      done();
    });

    it('must have tracker instance as initial value', function assertion(done) {
      const hookConsumer = new Consumer(new Tracker());
      assert.instanceOf(hookConsumer.tracker, Tracker);
      done();
    });

    it('must have empty consumers list as initial value',
      function assertion(done) {
        const hookConsumer = new Consumer(new Tracker());
        assert.lengthOf(hookConsumer.consumers, 0);
        done();
      });

    it('reset() should empty consumers list',
      function assertion(done) {
        const hookConsumer = new Consumer(new Tracker());
        hookConsumer.consumers.push('imaginary');
        hookConsumer.reset();
        assert.lengthOf(hookConsumer.consumers, 0);
        done();
      });

    it('first() should give first member of consumers list',
      function assertion(done) {
        const hookConsumer = new Consumer(new Tracker());
        hookConsumer.consumers.push('imaginary1');
        hookConsumer.consumers.push('imaginary2');
        const firstMember = hookConsumer.first();
        assert.equal(firstMember, 'imaginary1');
        done();
      });

    it('last() should give last member of consumers list',
      function assertion(done) {
        const hookConsumer = new Consumer(new Tracker());
        hookConsumer.consumers.push('imaginary1');
        hookConsumer.consumers.push('imaginary2');
        const lastMember = hookConsumer.last();
        assert.equal(lastMember, 'imaginary2');
        done();
      });

    it('count() should give count member of consumers list',
      function assertion(done) {
        const hookConsumer = new Consumer(new Tracker());
        hookConsumer.consumers.push('imaginary1');
        hookConsumer.consumers.push('imaginary2');
        const countMember = hookConsumer.count();
        assert.equal(countMember, 2);
        done();
      });

    it('at() should give a member at certain index. Index will start from 1',
      function assertion(done) {
        const hookConsumer = new Consumer(new Tracker());
        hookConsumer.consumers.push('imaginary1');
        hookConsumer.consumers.push('imaginary2');
        const member = hookConsumer.at(1);
        assert.equal(member, 'imaginary1');
        done();
      });

    it.skip('track() should be track emitter', function assertion(done) {
      done();
    });
  });
});
