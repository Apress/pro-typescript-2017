// Empty strings are falsey
let errorMessages = '';

// result is 'Saved OK'
let result = errorMessages || 'Saved OK';


// Filled strings are truthy
errorMessages = 'Error Detected';

// result is 'Error Detected'
result = errorMessages || 'Saved OK';


let undefinedLogger;

// if the logger isn't initialized, substitute it for the result of the right-hand expression
const logger = undefinedLogger || { log: function (msg: string) { alert(msg); } };

// alerts 'Message'
logger.log('Message');