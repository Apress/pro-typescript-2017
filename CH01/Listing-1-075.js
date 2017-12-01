var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Listing_1_75;
(function (Listing_1_75) {
    var Song = /** @class */ (function () {
        function Song(artist, title) {
            this.artist = artist;
            this.title = title;
        }
        Song.prototype.play = function () {
            console.log('Playing ' + this.title + ' by ' + this.artist);
        };
        Song.Comparer = function (a, b) {
            if (a.title === b.title) {
                return 0;
            }
            return a.title > b.title ? 1 : -1;
        };
        return Song;
    }());
    var Playlist = /** @class */ (function () {
        function Playlist(songs) {
            this.songs = songs;
        }
        Playlist.prototype.play = function () {
            var song = this.songs.pop();
            song.play();
        };
        Playlist.prototype.sort = function () {
            this.songs.sort(Song.Comparer);
        };
        return Playlist;
    }());
    var RepeatingPlaylist = /** @class */ (function (_super) {
        __extends(RepeatingPlaylist, _super);
        function RepeatingPlaylist(songs) {
            var _this = _super.call(this, songs) || this;
            _this.songIndex = 0;
            return _this;
        }
        RepeatingPlaylist.prototype.play = function () {
            this.songs[this.songIndex].play;
            this.songIndex++;
            if (this.songIndex >= this.songs.length) {
                this.songIndex = 0;
            }
        };
        return RepeatingPlaylist;
    }(Playlist));
})(Listing_1_75 || (Listing_1_75 = {}));
