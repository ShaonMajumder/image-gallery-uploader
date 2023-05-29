"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _im = require("react-icons/im");
var _ai = require("react-icons/ai");
var _Toast = require("./Toast");
var _MessageConst = require("./MessageConst");
require("./ImageGalleryUploader.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ImageGalleryUploader = function ImageGalleryUploader(_ref) {
  var isImageUploader = _ref.isImageUploader,
    imageArray = _ref.imageArray,
    handleImage = _ref.handleImage,
    handleRemoveImage = _ref.handleRemoveImage,
    validation = _ref.validation;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    dragActive = _useState2[0],
    setDragActive = _useState2[1];
  // ref
  var inputRef = (0, _react.useRef)(null);

  // handle drag events
  var handleDrag = function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    if (isImageUploader) {
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    }
  };
  var isValidImage = function isValidImage(file) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = function () {
        URL.revokeObjectURL(img.src);
        resolve(true);
      };
      img.onerror = function () {
        (0, _Toast.notify)("".concat(file.name, " is not image."), _MessageConst.ERROR);
        reject(false);
      };
    });
  };
  var handleAndValidateImage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(filesArray) {
      var files, validImageFiles, filteredFiles, selectedFiles, filteredSelectedFiles;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            files = Array.from(filesArray);
            if (!(files.length > 0)) {
              _context2.next = 10;
              break;
            }
            _context2.next = 4;
            return Promise.all(files.map( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file) {
                var isValid;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return isValidImage(file);
                    case 3:
                      isValid = _context.sent;
                      return _context.abrupt("return", isValid ? file : null);
                    case 7:
                      _context.prev = 7;
                      _context.t0 = _context["catch"](0);
                      return _context.abrupt("return", null);
                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, null, [[0, 7]]);
              }));
              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }()));
          case 4:
            validImageFiles = _context2.sent;
            filteredFiles = validImageFiles.filter(function (file) {
              return file !== null;
            });
            if (validation.maxFileCount && files.length + imageArray.length > validation.maxFileCount) {
              (0, _Toast.notify)("Maximum file count exceeded. Only ".concat(validation.maxFileCount, " files will be selected."), _MessageConst.ERROR);
            }
            selectedFiles = filteredFiles.slice(0, validation.maxFileCount - imageArray.length);
            filteredSelectedFiles = selectedFiles.filter(function (file) {
              if (file && file.size > validation.maxFileSize * 1024 * 1024) {
                (0, _Toast.notify)("File size exceeds ".concat(validation.maxFileSize, "MB: ").concat(file.name, ". Please select a smaller file."), _MessageConst.ERROR);
              }
              return file.size <= validation.maxFileSize * 1024 * 1024;
            });
            if (filteredSelectedFiles.length > 0) {
              handleImage(filteredSelectedFiles);
            } else {
              (0, _Toast.notify)("There is no valid images to import", _MessageConst.ERROR);
            }
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleAndValidateImage(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleDrop = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            e.preventDefault();
            e.stopPropagation();
            if (isImageUploader) {
              setDragActive(false);
              handleAndValidateImage(e.dataTransfer.files);
            }
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function handleDrop(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  // triggers when file is selected with click
  var handleChange = function handleChange(e) {
    e.preventDefault();
    if (isImageUploader) {
      if (e.target.files && e.target.files[0]) {
        handleAndValidateImage(e.target.files);
      }
    }
  };

  // triggers the input when the button is clicked
  var onButtonClick = function onButtonClick() {
    if (isImageUploader) {
      inputRef.current.click();
    }
  };
  var handleFormClick = function handleFormClick(item) {
    if (!imageArray.length) {
      onButtonClick();
    }
  };
  var scrollContainerRef = (0, _react.useRef)(null);
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isMouseDown = _useState4[0],
    setIsMouseDown = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    scrollLeft = _useState6[0],
    setScrollLeft = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    mouseDownX = _useState8[0],
    setMouseDownX = _useState8[1];
  var hasMouseMoved = (0, _react.useRef)(false);
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isMouseReleased = _useState10[0],
    setIsMouseReleased = _useState10[1];
  var handleMouseDown = function handleMouseDown(e) {
    scrollContainerRef.current.style.cursor = 'grabbing';
    setIsMouseDown(true);
    setMouseDownX(e.clientX);
    setIsMouseReleased(false);
  };
  var handleMouseUp = function handleMouseUp() {
    setIsMouseDown(false);
    setIsMouseReleased(true);
    scrollContainerRef.current.style.cursor = 'grabbing';

    // Check if the mouse was moved during the click
    if (hasMouseMoved.current) {
      hasMouseMoved.current = false;
      return;
    }

    // Store the current scroll position
    var currentScrollLeft = scrollContainerRef.current.scrollLeft;

    // Update the scrollLeft value to the current position
    setScrollLeft(currentScrollLeft);

    // Remove the event listener for mouseup
    window.removeEventListener('mouseup', handleMouseUp);
  };

  // const handleMouseUp = () => {
  //   setIsMouseDown(false);
  //   window.removeEventListener('mousemove', handleMouseMove);
  // };

  var handleMouseMove = function handleMouseMove(e) {
    if (isMouseDown) {
      scrollContainerRef.current.style.cursor = 'grabbing';
      var scrollContainer = scrollContainerRef.current;
      var distance = e.clientX - mouseDownX;
      var _scrollLeft = scrollContainer.scrollLeft;

      // Set the scroll speed factor
      var scrollSpeedFactor = 0.09; // Adjust this value as desired

      // Calculate the new scroll position with reduced scroll speed
      var newScrollLeft = _scrollLeft - distance * scrollSpeedFactor;

      // Scroll to the opposite direction if the mouse moved to the left or right
      if (distance < 0 && newScrollLeft >= 0) {
        // the condition ensures that mouse movement is to the left and the scroll doesn't go beyond the leftmost edge of the scrollable container.
        scrollContainer.scrollLeft = newScrollLeft;
      } else if (distance > 0 && newScrollLeft <= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        // the condition ensures that mouse movement is to the right and the scroll doesn't go beyond the rightmost edge of the scrollable container.
        scrollContainer.scrollLeft = newScrollLeft;
      }
    }
  };
  var handleWindowMouseUp = function handleWindowMouseUp() {
    if (isMouseDown) {
      setIsMouseDown(false);
      window.removeEventListener('mousemove', handleMouseMove);
    }
  };

  // event handler is triggered when the mouse cursor enters the boundaries of an element
  var handleMouseEnter = function handleMouseEnter() {
    if (isMouseReleased && !isMouseDown) {
      setIsMouseReleased(false);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  // event handler is triggered when the mouse cursor leaves the boundaries of an element
  var handleMouseLeave = function handleMouseLeave() {
    if (isMouseDown) {
      setIsMouseReleased(true);
    }
  };
  (0, _react.useEffect)(function () {
    var handleWindowMouseUp = function handleWindowMouseUp() {
      // scrollContainerRef.current.style.cursor = 'default';
      // Check if the mouse button is released outside the div
      if (isMouseDown && !scrollContainerRef.current.contains(document.activeElement)) {
        setIsMouseDown(false);
      }
    };
    window.addEventListener('mouseup', handleWindowMouseUp);
    return function () {
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, [isMouseDown]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !isImageUploader && (imageArray === undefined || imageArray.length == 0) ? '' : /*#__PURE__*/_react["default"].createElement("form", {
    onClick: handleFormClick,
    id: "form-file-upload",
    onDragEnter: handleDrag,
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    ref: inputRef,
    id: "input-file-upload",
    type: "file",
    controlId: "validationFormik01",
    onChange: handleChange,
    accept: "image/jpg, image/jpeg, image/gif, image/bmp, image/svg",
    multiple: true
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "image-gallery-uploader-container form-group multi-preview text-center d-flex align-items-center",
    ref: scrollContainerRef,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: {
      userSelect: 'none'
    }
  }, imageArray === undefined || imageArray.length == 0 ? !isImageUploader ? '' : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundImage: "url(".concat(_ai.AiOutlineCloudUpload, ")"),
      margin: "0 auto"
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    variant: "success"
  }, "Choose images to Upload"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-danger font-weight-bold"
  }, "Or drag and drop them here")) : (imageArray || []).map(function (url, id) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: id,
      className: "d-flex",
      style: {
        marginLeft: '10px'
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      className: "img",
      draggable: "false",
      src: url ? url : '',
      alt: "...",
      style: {
        width: 100,
        height: 100
      }
    }), isImageUploader ? /*#__PURE__*/_react["default"].createElement(_im.ImCross, {
      className: "p-1 im-cross",
      onClick: function onClick() {
        return handleRemoveImage(id);
      },
      size: 20
    }) : '');
  })), dragActive && /*#__PURE__*/_react["default"].createElement("div", {
    id: "drag-file-element",
    onDragEnter: handleDrag,
    onDragLeave: handleDrag,
    onDragOver: handleDrag,
    onDrop: handleDrop
  }), imageArray === undefined ? '' : imageArray.length && isImageUploader ? /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    onClick: onButtonClick
  }, "Upload More Images") : ''));
};
var _default = ImageGalleryUploader;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchEditDBImages = exports.fetchDBImages = exports.convertImageUrlToFile = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var convertImageUrlToFile = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(imageUrl) {
    var response, blob, file;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch(imageUrl);
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.blob();
        case 6:
          blob = _context.sent;
          file = new File([blob], 'image.jpg', {
            type: blob.type
          });
          return _context.abrupt("return", file);
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error('Error converting image URL to file:', _context.t0);
          return _context.abrupt("return", null);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function convertImageUrlToFile(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.convertImageUrlToFile = convertImageUrlToFile;
var filterValue = function filterValue(value) {
  value = value == 'true' || value === true ? 1 : value;
  value = value == 'false' || value === false ? 0 : value;
  value = value == null || Number.isNaN(value) || value == 'null' ? '' : value;
  return value;
};
var fetchDBImages = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(images, images_url, imageViewerArray, setImageViewerArray) {
    var fileObj;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          fileObj = [];
          images.map(function (element, index) {
            fileObj.push("".concat(images_url).concat(element.file));
          });
          setImageViewerArray([].concat(_toConsumableArray(imageViewerArray), fileObj));
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function fetchDBImages(_x2, _x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
exports.fetchDBImages = fetchDBImages;
var fetchEditDBImages = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(images, images_url, imageViewerArray, setImageViewerArray, imageFormdataArray, setImageFormdataArray) {
    var fileObjView, fileObjFD, index, element, url, file;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          fileObjView = [];
          fileObjFD = [];
          index = 0;
        case 3:
          if (!(index < images.length)) {
            _context3.next = 14;
            break;
          }
          element = images[index];
          url = "".concat(images_url).concat(element.file);
          fileObjView.push(url);
          _context3.next = 9;
          return convertImageUrlToFile(url);
        case 9:
          file = _context3.sent;
          fileObjFD.push(file);
        case 11:
          index++;
          _context3.next = 3;
          break;
        case 14:
          setImageViewerArray([]);
          setImageFormdataArray([]);
          setImageViewerArray([].concat(_toConsumableArray(imageViewerArray), fileObjView));
          setImageFormdataArray([].concat(_toConsumableArray(imageFormdataArray), fileObjFD));
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function fetchEditDBImages(_x6, _x7, _x8, _x9, _x10, _x11) {
    return _ref3.apply(this, arguments);
  };
}();
exports.fetchEditDBImages = fetchEditDBImages;
