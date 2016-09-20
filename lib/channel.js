'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _hook = require('./hook');

var _hook2 = _interopRequireDefault(_hook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tracker = _hook2.default.tracker;

var Channel = function () {
  function Channel() {
    (0, _classCallCheck3.default)(this, Channel);
  }

  // eslint-disable-next-line no-unused-vars
  Channel.assertExchange = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(exhange, type, options) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', true);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function assertExchange(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    }

    return assertExchange;
  }();

  // eslint-disable-next-line no-unused-vars


  Channel.assertQueue = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(queue, options) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt('return', true);

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function assertQueue(_x4, _x5) {
      return _ref2.apply(this, arguments);
    }

    return assertQueue;
  }();

  // eslint-disable-next-line no-unused-vars


  Channel.bindQueue = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(source, destination, routingKey) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt('return', true);

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function bindQueue(_x6, _x7, _x8) {
      return _ref3.apply(this, arguments);
    }

    return bindQueue;
  }();

  // eslint-disable-next-line no-unused-vars


  Channel.publish = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(exchange, routingKey, content, options) {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt('return', true);

            case 1:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function publish(_x9, _x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    }

    return publish;
  }();

  // eslint-disable-next-line no-unused-vars


  Channel.sendToQueue = function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(queue, data) {
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt('return', true);

            case 1:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function sendToQueue(_x13, _x14) {
      return _ref5.apply(this, arguments);
    }

    return sendToQueue;
  }();

  // eslint-disable-next-line no-unused-vars


  Channel.consume = function () {
    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(queue) {
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt('return', new Promise(function (resolve) {
                tracker.consumer.track({ queue: queue }, resolve);
              }));

            case 1:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function consume(_x15) {
      return _ref6.apply(this, arguments);
    }

    return consume;
  }();

  return Channel;
}();

exports.default = Channel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFubmVsLmpzIl0sIm5hbWVzIjpbInRyYWNrZXIiLCJDaGFubmVsIiwiYXNzZXJ0RXhjaGFuZ2UiLCJleGhhbmdlIiwidHlwZSIsIm9wdGlvbnMiLCJhc3NlcnRRdWV1ZSIsInF1ZXVlIiwiYmluZFF1ZXVlIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJyb3V0aW5nS2V5IiwicHVibGlzaCIsImV4Y2hhbmdlIiwiY29udGVudCIsInNlbmRUb1F1ZXVlIiwiZGF0YSIsImNvbnN1bWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNvbnN1bWVyIiwidHJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxlQUFLQSxPQUFyQjs7SUFFcUJDLE87Ozs7O0FBQ25CO1VBQ2FDLGM7MkZBQWVDLE8sRUFBU0MsSSxFQUFNQyxPOzs7OzsrQ0FDbEMsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHVDs7O1VBQ2FDLFc7NkZBQVlDLEssRUFBT0YsTzs7Ozs7Z0RBQ3ZCLEk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1Q7OztVQUNhRyxTOzZGQUFVQyxNLEVBQVFDLFcsRUFBYUMsVTs7Ozs7Z0RBQ25DLEk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1Q7OztVQUNhQyxPOzZGQUFRQyxRLEVBQVVGLFUsRUFBWUcsTyxFQUFTVCxPOzs7OztnREFDM0MsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHVDs7O1VBQ2FVLFc7NkZBQVlSLEssRUFBT1MsSTs7Ozs7Z0RBQ3ZCLEk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1Q7OztVQUNhQyxPOzZGQUFRVixLOzs7OztnREFDWixJQUFJVyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzlCbkIsd0JBQVFvQixRQUFSLENBQWlCQyxLQUFqQixDQUF1QixFQUFFZCxZQUFGLEVBQXZCLEVBQWtDWSxPQUFsQztBQUNELGVBRk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBNUJVbEIsTyIsImZpbGUiOiJjaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgaG9vayBmcm9tICcuL2hvb2snO1xuXG5jb25zdCB0cmFja2VyID0gaG9vay50cmFja2VyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFubmVsIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIHN0YXRpYyBhc3luYyBhc3NlcnRFeGNoYW5nZShleGhhbmdlLCB0eXBlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgc3RhdGljIGFzeW5jIGFzc2VydFF1ZXVlKHF1ZXVlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgc3RhdGljIGFzeW5jIGJpbmRRdWV1ZShzb3VyY2UsIGRlc3RpbmF0aW9uLCByb3V0aW5nS2V5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgc3RhdGljIGFzeW5jIHB1Ymxpc2goZXhjaGFuZ2UsIHJvdXRpbmdLZXksIGNvbnRlbnQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBzdGF0aWMgYXN5bmMgc2VuZFRvUXVldWUocXVldWUsIGRhdGEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBzdGF0aWMgYXN5bmMgY29uc3VtZShxdWV1ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdHJhY2tlci5jb25zdW1lci50cmFjayh7IHF1ZXVlIH0sIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=