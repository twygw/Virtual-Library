// import the Media class:
const Media = require("./classes/Media");
// create your Music class:
class Music extends Media {
  constructor(title, genre, year, artist, length) {
    super(title, genre, year);
    this.artist = artist;
    this.length = length;
  }
  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length}`;
  }
  static shortestAlbum(albums) {
    if (!Array.isArray(albums) || albums.length === 0) {
      return null;
    }

    let shortest = albums[0];

    for (let i = 1; i < albums.length; i++) {
      if (albums[i].length < shortest.length) {
        shortest = albums[i];
      }
    }

    return shortest;
  }
}
// don't change below
module.exports = Music;
