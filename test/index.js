/* global describe, beforeEach, afterEach, it, chai, assert */

const chai = require('chai');
const amqplib = require('./../lib/amqplib').default;
const connection = require('./../lib/connection').default;
const channel = require('./../lib/channel').default;

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
    it('should be a promise', function assertion(done) {
      assert.isFunction(channel.consume().then);
      done();
    });

    it('should resolved with object', function assertion(done) {
      channel
        .consume('aQueue')
        .then(function consumed(result) {
          assert.isObject(result);
          done();
        })
        .catch(done);
    });

    it('should resolved with object containing content property',
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
