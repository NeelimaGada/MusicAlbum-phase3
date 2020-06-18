export default class Title {
  title_id: number;
  title_name:string;
  lyrisist: number;
  singer: number;
  director: number;
  constructor(title_id:number,title_name:string,lyrisist: number,singer: number,director: number){
    this.title_id = Number(title_id);
    this.title_name = title_name;
    this.lyrisist = Number(lyrisist);
    this.singer = Number(singer);
    this.director = Number(director);
  }
  
}

