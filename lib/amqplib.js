'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Amqplib = function () {
  function Amqplib() {
    (0, _classCallCheck3.default)(this, Amqplib);
  }

  // eslint-disable-next-line no-unused-vars
  Amqplib.connect = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var url = arguments.length <= 0 || arguments[0] === undefined ? 'amqp://localhost' : arguments[0];
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', _connection2.default);

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function connect(_x) {
      return _ref.apply(this, arguments);
    }

    return connect;
  }();

  return Amqplib;
}();

exports.default = Amqplib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hbXFwbGliLmpzIl0sIm5hbWVzIjpbIkFtcXBsaWIiLCJjb25uZWN0IiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7OztJQUVxQkEsTzs7Ozs7QUFDbkI7VUFDYUMsTzs7VUFBUUMsRyx5REFBTSxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFGUkYsTyIsImZpbGUiOiJhbXFwbGliLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQ29ubmVjdGlvbiBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbXFwbGliIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIHN0YXRpYyBhc3luYyBjb25uZWN0KHVybCA9ICdhbXFwOi8vbG9jYWxob3N0Jykge1xuICAgIHJldHVybiBDb25uZWN0aW9uO1xuICB9XG59XG4iXX0=