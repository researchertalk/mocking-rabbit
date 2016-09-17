'use strict';

exports.__esModule = true;

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _events = require('events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Consumer = function () {
  function Consumer(tracker) {
    (0, _classCallCheck3.default)(this, Consumer);

    this.tracker = tracker;
    this.consumers = [];
  }

  Consumer.prototype.reset = function reset() {
    this.consumers = [];
  };

  Consumer.prototype.track = function track(consumer, resolve) {
    var step = void 0;

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
  };

  Consumer.prototype.first = function first() {
    return this.consumers[0];
  };

  Consumer.prototype.count = function count() {
    return this.consumers.length;
  };

  Consumer.prototype.last = function last() {
    return this.consumers[this.count() - 1];
  };

  Consumer.prototype.at = function at(step) {
    return this.consumers[step - 1];
  };

  return Consumer;
}();

var Tracker = function (_EventEmitter) {
  (0, _inherits3.default)(Tracker, _EventEmitter);

  function Tracker() {
    (0, _classCallCheck3.default)(this, Tracker);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    _this.tracking = false;
    _this.consumer = new Consumer(_this);
    return _this;
  }

  Tracker.prototype.install = function install() {
    this.tracking = true;
    this.consumer.reset();
  };

  Tracker.prototype.uninstall = function uninstall() {
    this.tracking = false;
    this.consumer.reset();
    this.removeAllListeners('consume');
  };

  return Tracker;
}(_events.EventEmitter);

exports.default = { Tracker: Tracker, Consumer: Consumer, tracker: new Tracker() };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ob29rLmpzIl0sIm5hbWVzIjpbIkNvbnN1bWVyIiwidHJhY2tlciIsImNvbnN1bWVycyIsInJlc2V0IiwidHJhY2siLCJjb25zdW1lciIsInJlc29sdmUiLCJzdGVwIiwidHJhY2tpbmciLCJyZXNwb25zZSIsInJlc3VsdCIsInB1c2giLCJlbWl0IiwiZmlyc3QiLCJjb3VudCIsImxlbmd0aCIsImxhc3QiLCJhdCIsIlRyYWNrZXIiLCJpbnN0YWxsIiwidW5pbnN0YWxsIiwicmVtb3ZlQWxsTGlzdGVuZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7SUFFTUEsUTtBQUVKLG9CQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDRDs7cUJBRURDLEssb0JBQVE7QUFDTixTQUFLRCxTQUFMLEdBQWlCLEVBQWpCO0FBQ0QsRzs7cUJBRURFLEssa0JBQU1DLFEsRUFBVUMsTyxFQUFTO0FBQ3ZCLFFBQUlDLGFBQUo7O0FBRUEsUUFBSSxLQUFLTixPQUFMLENBQWFPLFFBQWpCLEVBQTJCO0FBQ3pCO0FBQ0FILGVBQVNJLFFBQVQsR0FBb0IsU0FBU0EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEI7QUFDNUM7QUFDQUwsaUJBQVNLLE1BQVQsR0FBa0JBLE1BQWxCO0FBQ0FKLGdCQUFRSSxNQUFSO0FBQ0QsT0FKRDs7QUFNQTtBQUNBLGFBQU9MLFNBQVNLLE1BQWhCOztBQUVBSCxhQUFPLEtBQUtMLFNBQUwsQ0FBZVMsSUFBZixDQUFvQk4sUUFBcEIsQ0FBUDtBQUNBLFdBQUtKLE9BQUwsQ0FBYVcsSUFBYixDQUFrQixTQUFsQixFQUE2QlAsUUFBN0IsRUFBdUNFLElBQXZDO0FBQ0Q7QUFDRixHOztxQkFFRE0sSyxvQkFBUTtBQUNOLFdBQU8sS0FBS1gsU0FBTCxDQUFlLENBQWYsQ0FBUDtBQUNELEc7O3FCQUVEWSxLLG9CQUFRO0FBQ04sV0FBTyxLQUFLWixTQUFMLENBQWVhLE1BQXRCO0FBQ0QsRzs7cUJBRURDLEksbUJBQU87QUFDTCxXQUFPLEtBQUtkLFNBQUwsQ0FBZSxLQUFLWSxLQUFMLEtBQWUsQ0FBOUIsQ0FBUDtBQUNELEc7O3FCQUVERyxFLGVBQUdWLEksRUFBTTtBQUNQLFdBQU8sS0FBS0wsU0FBTCxDQUFlSyxPQUFPLENBQXRCLENBQVA7QUFDRCxHOzs7OztJQUdHVyxPOzs7QUFFSixxQkFBYztBQUFBOztBQUFBLCtEQUNaLHdCQURZOztBQUVaLFVBQUtWLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxVQUFLSCxRQUFMLEdBQWdCLElBQUlMLFFBQUosT0FBaEI7QUFIWTtBQUliOztvQkFFRG1CLE8sc0JBQVU7QUFDUixTQUFLWCxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS0gsUUFBTCxDQUFjRixLQUFkO0FBQ0QsRzs7b0JBRURpQixTLHdCQUFZO0FBQ1YsU0FBS1osUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtILFFBQUwsQ0FBY0YsS0FBZDtBQUNBLFNBQUtrQixrQkFBTCxDQUF3QixTQUF4QjtBQUNELEc7Ozs7O2tCQUdZLEVBQUVILGdCQUFGLEVBQVdsQixrQkFBWCxFQUFxQkMsU0FBUyxJQUFJaUIsT0FBSixFQUE5QixFIiwiZmlsZSI6Imhvb2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5cbmNsYXNzIENvbnN1bWVyIHtcblxuICBjb25zdHJ1Y3Rvcih0cmFja2VyKSB7XG4gICAgdGhpcy50cmFja2VyID0gdHJhY2tlcjtcbiAgICB0aGlzLmNvbnN1bWVycyA9IFtdO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5jb25zdW1lcnMgPSBbXTtcbiAgfVxuXG4gIHRyYWNrKGNvbnN1bWVyLCByZXNvbHZlKSB7XG4gICAgbGV0IHN0ZXA7XG5cbiAgICBpZiAodGhpcy50cmFja2VyLnRyYWNraW5nKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGNvbnN1bWVyLnJlc3BvbnNlID0gZnVuY3Rpb24gcmVzcG9uc2UocmVzdWx0KSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBjb25zdW1lci5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH07XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgZGVsZXRlIGNvbnN1bWVyLnJlc3VsdDtcblxuICAgICAgc3RlcCA9IHRoaXMuY29uc3VtZXJzLnB1c2goY29uc3VtZXIpO1xuICAgICAgdGhpcy50cmFja2VyLmVtaXQoJ2NvbnN1bWUnLCBjb25zdW1lciwgc3RlcCk7XG4gICAgfVxuICB9XG5cbiAgZmlyc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3VtZXJzWzBdO1xuICB9XG5cbiAgY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3VtZXJzLmxlbmd0aDtcbiAgfVxuXG4gIGxhc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3VtZXJzW3RoaXMuY291bnQoKSAtIDFdO1xuICB9XG5cbiAgYXQoc3RlcCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN1bWVyc1tzdGVwIC0gMV07XG4gIH1cbn1cblxuY2xhc3MgVHJhY2tlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnRyYWNraW5nID0gZmFsc2U7XG4gICAgdGhpcy5jb25zdW1lciA9IG5ldyBDb25zdW1lcih0aGlzKTtcbiAgfVxuXG4gIGluc3RhbGwoKSB7XG4gICAgdGhpcy50cmFja2luZyA9IHRydWU7XG4gICAgdGhpcy5jb25zdW1lci5yZXNldCgpO1xuICB9XG5cbiAgdW5pbnN0YWxsKCkge1xuICAgIHRoaXMudHJhY2tpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmNvbnN1bWVyLnJlc2V0KCk7XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ2NvbnN1bWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IFRyYWNrZXIsIENvbnN1bWVyLCB0cmFja2VyOiBuZXcgVHJhY2tlcigpIH07XG4iXX0=