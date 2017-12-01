export class Ajax {
    private readonly READY_STATUS_CODE = 4;

    private isCompleted(request: XMLHttpRequest) {
        return request.readyState === this.READY_STATUS_CODE;
    }

    httpGet(url: string) {
        return new Promise<XMLHttpRequest>((resolve, reject) => {
            // Create a request
            const request = new XMLHttpRequest();

            // Attach an event listener
            request.onreadystatechange = () => {
                if (this.isCompleted(request)) {
                    resolve(request);
                }
            };

            // Specify the HTTP verb and URL
            request.open('GET', url, true);

            // Send the request
            request.send();
        });
    }
}