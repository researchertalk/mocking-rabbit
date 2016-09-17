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
  Channel.assertQueue = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(queue) {
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

    function assertQueue(_x) {
      return _ref.apply(this, arguments);
    }

    return assertQueue;
  }();

  // eslint-disable-next-line no-unused-vars


  Channel.sendToQueue = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(queue, data) {
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

    function sendToQueue(_x2, _x3) {
      return _ref2.apply(this, arguments);
    }

    return sendToQueue;
  }();

  // eslint-disable-next-line no-unused-vars


  Channel.consume = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(queue) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt('return', new Promise(function (resolve) {
                tracker.consumer.track({ queue: queue }, resolve);
              }));

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function consume(_x4) {
      return _ref3.apply(this, arguments);
    }

    return consume;
  }();

  return Channel;
}();

exports.default = Channel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFubmVsLmpzIl0sIm5hbWVzIjpbInRyYWNrZXIiLCJDaGFubmVsIiwiYXNzZXJ0UXVldWUiLCJxdWV1ZSIsInNlbmRUb1F1ZXVlIiwiZGF0YSIsImNvbnN1bWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNvbnN1bWVyIiwidHJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxlQUFLQSxPQUFyQjs7SUFFcUJDLE87Ozs7O0FBQ25CO1VBQ2FDLFc7MkZBQVlDLEs7Ozs7OytDQUNoQixJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdUOzs7VUFDYUMsVzs2RkFBWUQsSyxFQUFPRSxJOzs7OztnREFDdkIsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHVDs7O1VBQ2FDLE87NkZBQVFILEs7Ozs7O2dEQUNaLElBQUlJLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUJSLHdCQUFRUyxRQUFSLENBQWlCQyxLQUFqQixDQUF1QixFQUFFUCxZQUFGLEVBQXZCLEVBQWtDSyxPQUFsQztBQUNELGVBRk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBYlVQLE8iLCJmaWxlIjoiY2hhbm5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGhvb2sgZnJvbSAnLi9ob29rJztcblxuY29uc3QgdHJhY2tlciA9IGhvb2sudHJhY2tlcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbm5lbCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBzdGF0aWMgYXN5bmMgYXNzZXJ0UXVldWUocXVldWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBzdGF0aWMgYXN5bmMgc2VuZFRvUXVldWUocXVldWUsIGRhdGEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBzdGF0aWMgYXN5bmMgY29uc3VtZShxdWV1ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdHJhY2tlci5jb25zdW1lci50cmFjayh7IHF1ZXVlIH0sIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=