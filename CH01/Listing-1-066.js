var log = function (source) { return function (message) { return console.log(source, message); }; };
var customLog = log('Custom Log:');
// Custom Log: Message One
customLog('Message One');
// Custom Log: Message Two
customLog('Message Two');
