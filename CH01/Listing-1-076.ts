namespace Abstract {
    // Abstract class
    abstract class Logger {
        abstract notify(message: string): void;

        protected getMessage(message: string): string {
            return `Information: ${new Date().toUTCString()} ${message}`;
        }
    }

    class ConsoleLogger extends Logger {
        notify(message) {
            console.log(this.getMessage(message));
        }
    }

    class InvasiveLogger extends Logger {
        notify(message) {
            alert(this.getMessage(message));
        }
    }

    let logger: Logger;

    // Error. Cannot create an instance of an abstract class
    logger = new Logger();

    // Create an instance of a sub-class
    logger = new InvasiveLogger();

    logger.notify('Hello World');
}