import artistServer from './artistserver';
import titleServer from './titlesserver';

export function addArtistInfo() {
  let artist_id: any = document.getElementById('artist_id');
  let artist_name: any = document.getElementById('artist_name');
  let profession: any = document.getElementById('profession');
  console.log(artist_id + " " + artist_name + profession);
  artistServer.createArtistObj(Number(artist_id.value), artist_name.value, profession.value)
    .then((response: any) => {
     document.getElementById('mydata').innerHTML = response;
    });
}
export function getArtists() {
  let jsonObject = '';
  artistServer.getArtistsData()
    .then((response: any) => {
      console.log(response);
      let myObj = JSON.parse(response);
      for (let i of myObj) {
        jsonObject += i.artist_id + " " + i.artist_name + " " + i.profession + '<br>';
      }
      document.getElementById('result').innerHTML = jsonObject;
    });

}

export function addTitleInfo() {
  console.log('title');
  let title_id: any = document.getElementById('title_id');
  let title_name: any = document.getElementById('title_name');
  let lyrisist: any = document.getElementById('lyrisist');
  let singer: any = document.getElementById('singer');
  let director: any = document.getElementById('director');
  titleServer.createTitleObj(Number(title_id.value), title_name.value, lyrisist.value, singer.value, director.value)
    .then((response: any) => {
      console.log(response);
      document.getElementById('mydata').innerHTML = response;
    });
}
export function getMyTitles(): void {
  let jsonObject = '';
  titleServer.getTitlesData()
    .then((response: any) => {
      console.log(response);
      let myObj = response;
      for (let i of myObj) {
        jsonObject += i.title_id + " " + i.title_name + " " + i.singer + +' ' + i.lyrisist + '' + i.director + '<br>';
      }
      document.getElementById('result').innerHTML = jsonObject;
    });
  console.log('my titles');

}
export function getArtistsInfoForTitles() {
  console.log('my fun');
  artistServer.getArtistsData()
    .then((response: any) => {
      console.log('hello' + response);
      let myObj = JSON.parse(response);
      for (let i of myObj) {
        let singer = document.getElementById('singer');
        console.log(i.artist_id);
        singer.innerHTML = singer.innerHTML + '<option value="' + i.artist_id + '">' + i.artist_name + '</option>';
        let director = document.getElementById('director');
        director.innerHTML = director.innerHTML + '<option value="' + i.artist_id + '">' + i.artist_name + '</option>';
        let lyrisist = document.getElementById('lyrisist');
        lyrisist.innerHTML = lyrisist.innerHTML + '<option value="' + i.artist_id + '">' + i.artist_name + '</option>';
      }
    });

};

