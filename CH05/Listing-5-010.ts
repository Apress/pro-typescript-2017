namespace Listing_5_10 {
    function go(callback: (arg: string) => void) {
        callback.apply(this, ['Example Argument']);
    }

    function callbackFunction(arg: string) {
        alert(arg);
    }

    go(callbackFunction);
}