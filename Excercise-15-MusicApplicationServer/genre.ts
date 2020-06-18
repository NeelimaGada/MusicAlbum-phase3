export default class Genre {
  genre_id: number;
  genre_name: string;
  constructor(genre_id: number, genre_name: string) {
    this.genre_id = genre_id;
    this.genre_name = genre_name;
  }
  describe() {
    let description = ' ';
    description += 'Genre Id = ' + this.genre_id + ',';
    description += 'Genre Name = ' + this.genre_name + '<br>';
    return description;
  }
}


