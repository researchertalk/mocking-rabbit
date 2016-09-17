'use strict';

exports.__esModule = true;

var _amqplib = require('./amqplib');

var _amqplib2 = _interopRequireDefault(_amqplib);

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

var _channel = require('./channel');

var _channel2 = _interopRequireDefault(_channel);

var _hook = require('./hook');

var _hook2 = _interopRequireDefault(_hook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { Amqplib: _amqplib2.default, Connection: _connection2.default, Channel: _channel2.default, hook: _hook2.default };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBbXFwbGliIiwiQ29ubmVjdGlvbiIsIkNoYW5uZWwiLCJob29rIl0sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSxFQUFFQSwwQkFBRixFQUFXQyxnQ0FBWCxFQUF1QkMsMEJBQXZCLEVBQWdDQyxvQkFBaEMsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEFtcXBsaWIgZnJvbSAnLi9hbXFwbGliJztcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4vY29ubmVjdGlvbic7XG5pbXBvcnQgQ2hhbm5lbCBmcm9tICcuL2NoYW5uZWwnO1xuaW1wb3J0IGhvb2sgZnJvbSAnLi9ob29rJztcblxuZXhwb3J0IGRlZmF1bHQgeyBBbXFwbGliLCBDb25uZWN0aW9uLCBDaGFubmVsLCBob29rIH07XG4iXX0=