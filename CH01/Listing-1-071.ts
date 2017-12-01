class Song {
    constructor(private artist: string, private title: string) {

    }

    play() {
        console.log('Playing ' + this.title + ' by ' + this.artist);
    }
}

class Jukebox {
    constructor(private songs: Song[]) {
    }

    play() {
        const song = this.getRandomSong();
        song.play();
    }

    private getRandomSong() {
        const songCount = this.songs.length;
        const songIndex = Math.floor(Math.random() * songCount);

        return this.songs[songIndex];
    }
}

const songs = [
    new Song('Bushbaby', 'Megaphone'),
    new Song('Delays', 'One More Lie In'),
    new Song('Goober Gun', 'Stereo'),
    new Song('Sohnee', 'Shatter'),
    new Song('Get Amped', 'Celebrity')
];

const jukebox = new Jukebox(songs);

jukebox.play();