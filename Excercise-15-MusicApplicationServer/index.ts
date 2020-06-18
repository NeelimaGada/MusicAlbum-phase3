import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
import artists from './artist';
import titles from './titles';
//import TitleServer from './titleserver';
import Genre from './genre';

const app = express();
const port = 4000;
let artistList = new Array();
let titleList = new Array();
let genresList = new Array();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.listen(port, () => {
  console.log('listening is succesffull');

});
//To add Artist
app.get('/createArtist', (req: Request, res: Response) => {
  //const artist_id: number = Number(req.query.artist_id);
  //const artist_name: string = String(req.query.artist_name);
  //const profession: string = String(req.query.profession);
  const artist_id = req.query.artist_id ? Number(req.query.artist_id) : null;
  const artist_name = req.query.artist_name ? String(req.query.artist_name) : null;
  const profession = req.query.profession ? String(req.query.profession) : null;
  if (artist_id === null || artist_id === 0) {
    res.send('Invalid artist id in request');
  }
  else if (artist_name === null || artist_name.length === 0) {
    res.send('Invalid artist name in request');
  }
  else if (profession === null || profession.length === 0) {
    res.send('Invalid profession in request');
  }
  else {
    const newArtist = new artists(artist_id, artist_name, profession);
    artistList.push(newArtist);
    res.send('Successfully added artist to the list....<br\>');
  }
});
//To get all Artists
app.get('/getAllArtists', (req: Request, res: Response) => {
  let localArtist = [];
  for (const artistOb of artistList) {
    localArtist.push(artistOb);
  }
  console.log(localArtist);
  res.send(JSON.stringify(localArtist));
});

app.get('/getAllArtistByName', (req: Request, res: Response) => {

  console.log('Hello World');
  const artist_name: string = String(req.query.artist_name);
  let localArtist = [];
  for (const artistOb of artistList) {
    if (artistOb.artist_name == artist_name) {
      localArtist.push(artistOb);
    }
  }
  console.log(localArtist);
  res.send(JSON.stringify(localArtist));
});

//Add Title 
app.get('/createTitle', (req: Request, res: Response) => {
  console.log('hello');
  const title_id = req.query.title_id ? Number(req.query.title_id) : null;
  const title_name = req.query.title_name ? String(req.query.title_name) : null;
  const lyrisist = req.query.lyrisist ? Number(req.query.lyrisist) : null;
  const singer = req.query.lyrisist ? Number(req.query.singer) : null;
  const director = req.query.director ? Number(req.query.director) : null;

  if (title_id === null || title_id === 0) {
    res.send('Invalid title id in request');
  }
  else if (title_name === null || title_name.length === 0) {
    res.send('Invalid title name in request');
  }
  else if (lyrisist === null || lyrisist === 0) {
    res.send('Invalid lyrisist name in request');
  }
  else if (singer === null || singer === 0) {
    res.send('Invalid lyrisist name in request');
  }
  else if (director === null || director === 0) {
    res.send('Invalid lyrisist name in request');
  }
  else {
    const newLyrisist = new titles(title_id, title_name, lyrisist, singer, director);
    titleList.push(newLyrisist);
    res.send('Successfully added title to the list....<br\>');
  }
});

//Get Titles Information
app.get('/getAllTitles', (req: Request, res: Response) => {
  let localTitles = [];
  for (const titleOb of titleList) {
    localTitles.push(titleOb);
  }
  console.log(localTitles);
  res.send(JSON.stringify(localTitles));
});
