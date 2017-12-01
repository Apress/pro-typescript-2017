const log = (source: string) => (message: string) => console.log(source, message);

const customLog = log('Custom Log:');

// Custom Log: Message One
customLog('Message One');

// Custom Log: Message Two
customLog('Message Two');