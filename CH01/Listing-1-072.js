var Listing_1_72;
(function (Listing_1_72) {
    var Song = /** @class */ (function () {
        function Song(artist, title) {
            // Don't do this!
            this.artist = artist;
            this.title = title;
        }
        Song.prototype.play = function () {
            console.log('Playing ' + this.title + ' by ' + this.artist);
        };
        return Song;
    }());
})(Listing_1_72 || (Listing_1_72 = {}));
