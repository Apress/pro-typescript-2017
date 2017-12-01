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

    httpPost(url: string, data: string) {
        return new Promise<XMLHttpRequest>((resolve, reject) => {
            const request = new XMLHttpRequest();

            request.onreadystatechange = () => {
                if (this.isCompleted(request)) {
                    resolve(request);
                }
            };

            request.open('POST', url, true);
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            request.send(data);
        });
    }
}