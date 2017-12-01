namespace Listing_5_9 {
    function go(callback: (arg: string) => void) {
        callback.call(this, 'Example Argument');
    }

    function callbackFunction(arg: string) {
        alert(arg);
    }

    go(callbackFunction);
}