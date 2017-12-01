const webSocket = new WebSocket('ws://localhost:8080/WS');

webSocket.onmessage = (message: MessageEvent) => {
    // Log message from server
    console.log(message.data);
}

webSocket.send('Message To Server');