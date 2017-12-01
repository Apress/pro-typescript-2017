// Empty strings are falsey
var errorMessages = '';
// result is 'Saved OK'
var result = errorMessages || 'Saved OK';
// Filled strings are truthy
errorMessages = 'Error Detected';
// result is 'Error Detected'
result = errorMessages || 'Saved OK';
var undefinedLogger;
// if the logger isn't initialized, substitute it for the result of the right-hand expression
var logger = undefinedLogger || { log: function (msg) { alert(msg); } };
// alerts 'Message'
logger.log('Message');
