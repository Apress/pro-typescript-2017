namespace Listing_5_11 {
    function go(callback: (arg: string) => void) {
        callback('Example Argument');
    }

    function callbackFunction(arg: string) {
        alert(arg);
    }

    go(callbackFunction);
}