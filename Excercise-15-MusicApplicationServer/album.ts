export default class Album {
album_id: number ;
album_name: string;
album_titlesList: [];
album_artistsList: [];
album_genreList: []; 
album_year: number ;

//Q. In address class have fields like House Number, street Name, City, State, ZipCode
constructor(album_id: number,album_name: string,titles: [],artists: [],genre:[],year: number) {
  this.album_id = Number(album_id);
  this.album_name = album_name;
  this.album_titlesList = titles;
  this.album_artistsList = artists;
  this.album_genreList = genre;
  this.album_year = year;

}
describe() {
  var description = ' <h3>Album Information </h3><br>';
    description += 'Album Id = ' + this.album_id +'<br>' ;
    description += '  Album Name = ';
    description += String(this.album_name) + ' <br> ';
    description += ' <h3>Titles Information</h3><br> ';
    let titleObject = ' ';
   
  }
}
