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

require("./chat");

require("./login");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiZmFrZV9kOWIzMDg0Ni5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2NoYXRcIlxyXG5pbXBvcnQgXCIuL2xvZ2luXCJcclxuIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBIn0=
},{"./chat":1,"./login":3}],3:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  var socket = io('/');
  socket.emit('setNickname', {
    nickname: nickname
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9naW5Gb3JtIiwiZ2V0RWxlbWVudEJ5SWQiLCJOSUNLTkFNRSIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJuaWNrbmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dJbiIsInNvY2tldCIsImlvIiwiZW1pdCIsImNsYXNzTmFtZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInZhbHVlIiwic2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlcyI6WyJsb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dpblwiKTtcclxuXHJcbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xyXG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcclxuY29uc3QgTE9HR0VEX0lOID0gXCJsb2dnZWRJblwiO1xyXG5cclxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XHJcblxyXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xyXG4gICAgY29uc3Qgc29ja2V0ID1pbygnLycpXHJcbiAgICBzb2NrZXQuZW1pdCgnc2V0Tmlja25hbWUnLCB7IG5pY2tuYW1lIH0pXHJcbn1cclxuXHJcbmlmIChuaWNrbmFtZSA9PT0gbnVsbCkge1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xyXG59IGVsc2Uge1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XHJcbiAgICBsb2dJbihuaWNrbmFtZSlcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcclxuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCB2YWx1ZSk7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxuICAgIGxvZ0luKHZhbHVlKVxyXG59O1xyXG5cclxuXHJcbmlmIChsb2dpbkZvcm0pIHtcclxuICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm1TdWJtaXQpO1xyXG59Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDSCxRQUFELEVBQWM7RUFDeEIsSUFBTUksTUFBTSxHQUFFQyxFQUFFLENBQUMsR0FBRCxDQUFoQjtFQUNBRCxNQUFNLENBQUNFLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0lBQUVOLFFBQVEsRUFBUkE7RUFBRixDQUEzQjtBQUNILENBSEQ7O0FBS0EsSUFBSUEsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0VBQ25CUixJQUFJLENBQUNlLFNBQUwsR0FBaUJULFVBQWpCO0FBQ0gsQ0FGRCxNQUVPO0VBQ0hOLElBQUksQ0FBQ2UsU0FBTCxHQUFpQlIsU0FBakI7RUFDQUksS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDSDs7QUFJRCxJQUFNUSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLENBQUMsRUFBSTtFQUMxQkEsQ0FBQyxDQUFDQyxjQUFGO0VBQ0EsSUFBTUMsS0FBSyxHQUFHaEIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7RUFDQSxJQUFRa0IsS0FBUixHQUFrQkQsS0FBbEIsQ0FBUUMsS0FBUjtFQUNBRCxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkO0VBQ0FYLFlBQVksQ0FBQ1ksT0FBYixDQUFxQmhCLFFBQXJCLEVBQStCZSxLQUEvQjtFQUNBcEIsSUFBSSxDQUFDZSxTQUFMLEdBQWlCUixTQUFqQjtFQUNBSSxLQUFLLENBQUNTLEtBQUQsQ0FBTDtBQUNILENBUkQ7O0FBV0EsSUFBSWpCLFNBQUosRUFBZTtFQUNYQSxTQUFTLENBQUNtQixnQkFBVixDQUEyQixRQUEzQixFQUFxQ04sZ0JBQXJDO0FBQ0gifQ==
},{}]},{},[2])