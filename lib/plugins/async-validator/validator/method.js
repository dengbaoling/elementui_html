'use strict';
define(function (require, exports, module) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _rule = require('../rule/index');

  var _rule2 = _interopRequireDefault(_rule);

  var _util = require('../util');

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {"default": obj};
  }

  /**
   *  Validates a function.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */
  function method(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if ((0, _util.isEmptyValue)(value) && !rule.required) {
        return callback();
      }
      _rule2["default"].required(rule, value, source, errors, options);
      if (value !== undefined) {
        _rule2["default"].type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }

  exports["default"] = method;
  module.exports = exports['default'];
})