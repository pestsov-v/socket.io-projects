(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotification = handleMessageNotification;

function handleMessageNotification(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJoYW5kbGVNZXNzYWdlTm90aWZpY2F0aW9uIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlcyI6WyJjaGF0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlTm90aWZpY2F0aW9uKGRhdGEpIHtcclxuICAgIGNvbnN0IHsgbWVzc2FnZSwgbmlja25hbWUgfSA9IGRhdGFcclxuICAgIGNvbnNvbGUubG9nKGAke25pY2tuYW1lfTogJHttZXNzYWdlfWApXHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSx5QkFBVCxDQUFtQ0MsSUFBbkMsRUFBeUM7RUFDNUMsSUFBUUMsT0FBUixHQUE4QkQsSUFBOUIsQ0FBUUMsT0FBUjtFQUFBLElBQWlCQyxRQUFqQixHQUE4QkYsSUFBOUIsQ0FBaUJFLFFBQWpCO0VBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLGVBQTRCRCxPQUE1QjtBQUNIIn0=
},{}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./chat");

require("./login");

require("./notifications");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiZmFrZV8zYTEwNjQ5Ni5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3NvY2tldHNcIlxyXG5pbXBvcnQgXCIuL2NoYXRcIlxyXG5pbXBvcnQgXCIuL2xvZ2luXCJcclxuaW1wb3J0IFwiLi9ub3RpZmljYXRpb25zXCJcclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSJ9
},{"./chat":1,"./login":3,"./notifications":4,"./sockets":5}],3:[function(require,module,exports){
"use strict";

var _require = require("./sockets"),
    initSockets = _require.initSockets;

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  var socket = io('/');
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  initSockets(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW5pdFNvY2tldHMiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9naW5Gb3JtIiwiZ2V0RWxlbWVudEJ5SWQiLCJOSUNLTkFNRSIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJuaWNrbmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dJbiIsInNvY2tldCIsImlvIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsInNldE5pY2tuYW1lIiwiY2xhc3NOYW1lIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsdWUiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtpbml0U29ja2V0c30gPSByZXF1aXJlKFwiLi9zb2NrZXRzXCIpO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dpblwiKTtcclxuXHJcbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xyXG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcclxuY29uc3QgTE9HR0VEX0lOID0gXCJsb2dnZWRJblwiO1xyXG5cclxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XHJcblxyXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xyXG4gICAgY29uc3Qgc29ja2V0ICA9IGlvKCcvJylcclxuICAgIHNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja25hbWUsIHsgbmlja25hbWUgfSlcclxuICAgIGluaXRTb2NrZXRzKHNvY2tldClcclxufVxyXG5cclxuaWYgKG5pY2tuYW1lID09PSBudWxsKSB7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XHJcbn0gZWxzZSB7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxuICAgIGxvZ0luKG5pY2tuYW1lKVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcclxuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCB2YWx1ZSk7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxuICAgIGxvZ0luKHZhbHVlKTtcclxufTtcclxuXHJcblxyXG5pZiAobG9naW5Gb3JtKSB7XHJcbiAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0KTtcclxufSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxlQUFzQkEsT0FBTyxDQUFDLFdBQUQsQ0FBN0I7QUFBQSxJQUFPQyxXQUFQLFlBQU9BLFdBQVA7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWxCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFVBQWxCO0FBRUEsSUFBTUMsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJMLFFBQXJCLENBQWpCOztBQUVBLElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNILFFBQUQsRUFBYztFQUN4QixJQUFNSSxNQUFNLEdBQUlDLEVBQUUsQ0FBQyxHQUFELENBQWxCO0VBQ0FELE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7SUFBRVQsUUFBUSxFQUFSQTtFQUFGLENBQXZDO0VBQ0FULFdBQVcsQ0FBQ2EsTUFBRCxDQUFYO0FBQ0gsQ0FKRDs7QUFNQSxJQUFJSixRQUFRLEtBQUssSUFBakIsRUFBdUI7RUFDbkJSLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJaLFVBQWpCO0FBQ0gsQ0FGRCxNQUVPO0VBQ0hOLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJYLFNBQWpCO0VBQ0FJLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0g7O0FBRUQsSUFBTVcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxDQUFDLEVBQUk7RUFDMUJBLENBQUMsQ0FBQ0MsY0FBRjtFQUNBLElBQU1DLEtBQUssR0FBR25CLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0VBQ0EsSUFBUXFCLEtBQVIsR0FBa0JELEtBQWxCLENBQVFDLEtBQVI7RUFDQUQsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtFQUNBZCxZQUFZLENBQUNlLE9BQWIsQ0FBcUJuQixRQUFyQixFQUErQmtCLEtBQS9CO0VBQ0F2QixJQUFJLENBQUNrQixTQUFMLEdBQWlCWCxTQUFqQjtFQUNBSSxLQUFLLENBQUNZLEtBQUQsQ0FBTDtBQUNILENBUkQ7O0FBV0EsSUFBSXBCLFNBQUosRUFBZTtFQUNYQSxTQUFTLENBQUNzQixnQkFBVixDQUEyQixRQUEzQixFQUFxQ04sZ0JBQXJDO0FBQ0gifQ==
},{"./sockets":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewUser = void 0;
var notifications = document.getElementById("jsNotifications");

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  console.log(nickname, " присоединился");
};

exports.handleNewUser = handleNewUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJub3RpZmljYXRpb25zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlcyI6WyJub3RpZmljYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBub3RpZmljYXRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc05vdGlmaWNhdGlvbnNcIik7XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3VXNlciA9ICh7bmlja25hbWV9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhuaWNrbmFtZSwgXCIg0L/RgNC40YHQvtC10LTQuNC90LjQu9GB0Y9cIilcclxufVxyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsSUFBTUEsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXRCOztBQUVPLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBZ0I7RUFBQSxJQUFkQyxRQUFjLFFBQWRBLFFBQWM7RUFDekNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaLEVBQXNCLGdCQUF0QjtBQUNILENBRk0ifQ==
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSocket = exports.initSockets = exports.getSocket = void 0;

var _notifications = require("./notifications");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  return socket = aSocket;
};

exports.updateSocket = updateSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocket(aSocket);
  aSocket.on(events.newUser, _notifications.handleNewUser);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzb2NrZXQiLCJnZXRTb2NrZXQiLCJ1cGRhdGVTb2NrZXQiLCJhU29ja2V0IiwiaW5pdFNvY2tldHMiLCJ3aW5kb3ciLCJldmVudHMiLCJvbiIsIm5ld1VzZXIiLCJoYW5kbGVOZXdVc2VyIl0sInNvdXJjZXMiOlsic29ja2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVOZXdVc2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xyXG5sZXQgc29ja2V0ID0gbnVsbDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU29ja2V0ID0gYVNvY2tldCA9PiAoc29ja2V0ID0gYVNvY2tldCk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFNvY2tldHMgPSAoYVNvY2tldCkgPT4ge1xyXG4gICAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcclxuICAgIHVwZGF0ZVNvY2tldChhU29ja2V0KTtcclxuICAgIGFTb2NrZXQub24oZXZlbnRzLm5ld1VzZXIsIGhhbmRsZU5ld1VzZXIpO1xyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0EsSUFBSUEsTUFBTSxHQUFHLElBQWI7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7RUFBQSxPQUFNRCxNQUFOO0FBQUEsQ0FBbEI7Ozs7QUFFQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxPQUFPO0VBQUEsT0FBS0gsTUFBTSxHQUFHRyxPQUFkO0FBQUEsQ0FBNUI7Ozs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDRCxPQUFELEVBQWE7RUFDcEMsY0FBbUJFLE1BQW5CO0VBQUEsSUFBUUMsTUFBUixXQUFRQSxNQUFSO0VBQ0FKLFlBQVksQ0FBQ0MsT0FBRCxDQUFaO0VBQ0FBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNFLE9BQWxCLEVBQTJCQyw0QkFBM0I7QUFDSCxDQUpNIn0=
},{"./notifications":4}]},{},[2])