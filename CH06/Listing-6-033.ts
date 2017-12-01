namespace Listing_6_033 {
    function success(pos: Position) {
        console.log('You are here: Lat=' + pos.coords.latitude +
            ' Long=' + pos.coords.longitude +
            ' Altitude=' + pos.coords.altitude +
            ' (Accuracy=' + pos.coords.altitudeAccuracy + ')' +
            ' Heading=' + pos.coords.heading +
            ' Speed=' + pos.coords.speed);
    }

    navigator.geolocation.getCurrentPosition(success);

    // You are here: Lat = 51.5033 Long = 0.1197 
    // Altitude = 15 (Accuracy = 0)
    // Heading = 0 Speed = 0
}