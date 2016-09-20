'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _channel = require('./channel');

var _channel2 = _interopRequireDefault(_channel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Connection = function () {
  function Connection() {
    (0, _classCallCheck3.default)(this, Connection);
  }

  Connection.createChannel = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', _channel2.default);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createChannel() {
      return _ref.apply(this, arguments);
    }

    return createChannel;
  }();

  Connection.close = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
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

    function close() {
      return _ref2.apply(this, arguments);
    }

    return close;
  }();

  return Connection;
}();

exports.default = Connection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25uZWN0aW9uLmpzIl0sIm5hbWVzIjpbIkNvbm5lY3Rpb24iLCJjcmVhdGVDaGFubmVsIiwiY2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxVOzs7OzthQUNOQyxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQUlBQyxLOzs7Ozs7Z0RBQ0osSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBTlVGLFUiLCJmaWxlIjoiY29ubmVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IENoYW5uZWwgZnJvbSAnLi9jaGFubmVsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdGlvbiB7XG4gIHN0YXRpYyBhc3luYyBjcmVhdGVDaGFubmVsKCkge1xuICAgIHJldHVybiBDaGFubmVsO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGNsb3NlKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=