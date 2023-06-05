"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notify = void 0;
var _reactToastify = require("react-toastify");
var _MessageConst = require("./MessageConst");
var notify = function notify(message, type) {
  switch (type) {
    case _MessageConst.SUCCESS:
      _reactToastify.toast.success(message, {
        position: _reactToastify.toast.POSITION.TOP_RIGHT,
        theme: "colored"
      });
      break;
    case _MessageConst.ERROR:
      _reactToastify.toast.error(message, {
        position: _reactToastify.toast.POSITION.TOP_RIGHT,
        theme: "colored"
      });
      break;
    case _MessageConst.INFO:
      _reactToastify.toast.info(message, {
        position: _reactToastify.toast.POSITION.TOP_RIGHT,
        theme: "colored"
      });
      break;
    case _MessageConst.WARNING:
      _reactToastify.toast.warn(message, {
        position: _reactToastify.toast.POSITION.TOP_RIGHT,
        theme: "colored"
      });
      break;
    default:
      _reactToastify.toast.info(message, {
        position: _reactToastify.toast.POSITION.TOP_RIGHT,
        theme: "colored"
      });
  }
};
exports.notify = notify;