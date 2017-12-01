namespace Listing_6_036 {
    function success() {
        console.log('Okay');
    }

    function error() {
        console.log('Position information not available.');
    }

    const watch = navigator.geolocation.watchPosition(success, error);
}