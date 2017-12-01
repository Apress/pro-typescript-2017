namespace Listing_1_73 {
    class Playlist {

        private songs: Song[] = [];

        static readonly maxSongCount = 30;

        constructor(public name: string) {
        }

        addSong(song: Song) {
            if (this.songs.length >= Playlist.maxSongCount) {
                throw new Error('Playlist is full');
            }

            this.songs.push(song);
        }
    }

    // Creating a new instance
    const playlist = new Playlist('My Playlist');

    // Accessing a public instance property
    const name = playlist.name;

    // Calling a public instance method
    playlist.addSong(new Song('Therapy?', 'Crooked Timber'));

    // Accessing a public static property
    const maxSongs = Playlist.maxSongCount;

    // Error: Cannot assign to a readonly property
    Playlist.maxSongCount = 20;
}