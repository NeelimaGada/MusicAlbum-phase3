export default class Artist {
  artist_id: number;
  artist_name: string;
  profession: string;
  constructor(artist_id: number, artist_name: string, profession: string) {
    this.artist_id = Number(artist_id);
    this.artist_name = artist_name;
    this.profession = profession;
  }
 
}

